'use strict';

const
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    pugPHPFilter = require('pug-php-filter'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create();

gulp.task('watch', ['browserSync'], () => {
    return watch('./src/**/*.*', () => {
        gulp.start('execution');
    })
});

gulp.task('execution', (calback) => {
    runSequence(
        ['sass', 'pug', 'babel'],
        'reload',
        calback
    )
});

gulp.task('browserSync', () => {
    browserSync.init({
        proxy: 'http://127.0.0.1/wordpress'
    });
});

gulp.task('reload', () => {
    browserSync.reload();
});

gulp.task('sass', () => {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./wp-content/themes/elara/creator'));
});

gulp.task('pug', () => { 
    let option = {
        pretty: true,
        filters: {
            php: pugPHPFilter
        }
    }
    return gulp.src('./src/pug/**/*.pug')
        .pipe(plumber())
        .pipe(pug(option))
        .pipe(rename({
            extname: '.php'
        }))
        .pipe(gulp.dest('./wp-content/themes/elara'));
});

gulp.task('babel', () => {
    return gulp.src('./src/js/**/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./wp-content/themes/elara/creator/js'));
})


gulp.task('default', ['watch', 'execution', 'reload', 'sass', 'pug', 'babel','browserSync',]);
