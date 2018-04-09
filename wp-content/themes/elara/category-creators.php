<?php
/**
 * Category template file
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package elara
 */
 ?>
<html lang="zh-tw">
    <head>
        <link rel="stylesheet" href="/wordpress/wp-content/themes/elara/creator/category-creators.css"> 
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"> 
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </head>
<body>
    <!-- nav -->
    <div id="nav">
        <nav class="navbar navbar-expand-md fixed-top navbar-dark"><a class="navbar-brand" href="/wordpress/index.php/creator"><img src="/wordpress/src/assets/img/capsule_w.png"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2" aria-expanded="false"><span class="navbar-toggler-icon"></span></button>
        <div class="navbar-collapse collapse w-100 order-1 order-sm-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item"><a class="nav-link" href="/wordpress/index.php/category/creators/">CREATORS</a></li>
            <li class="nav-item"><a class="nav-link" href="/wordpress/index.php">NEWS</a></li>
            <li class="nav-item"><a class="nav-link" href="#">PARTNERSHIP</a></li>
            </ul>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="#">企業資訊
                <div class="fa fa-file">              </div></a></li>
            <li class="nav-item"><a class="nav-link" href="#">這邊在放點東西好了</a></li>
            </ul>
        </div>
        </nav>
    </div>
    <!-- 頂部滿版 -->
    <section id="top">
        <h1>
            CREATORS
        </h1>
    </section>
    <!-- 分類的nav -->
    <section id = "categoryNav">
        <div class ="container">
            <div class= "categoryNavList" id ="lianYNav"><a href="#lianY">lianY</a></div>
            <div class= "categoryNavList" id ="frogYNav"><a href="#frogY">frogY</a></div>
            <div class= "categoryNavList" id ="sevenYNav"><a href="#sevenY">sevenY</a></div>
        </div>
    </section>
    <!-- main -->
    <div class="container">
            <?php
                // 抓category文章
                $lianY = new WP_Query( array( 'category_name' => 'lianyoutuber' ) );
                $frogY = new WP_Query( array( 'category_name' => 'frogyoutuber' ) );
                $sevenY = new WP_Query( array( 'category_name' => '17youtuber' ) );
            ?><!-- category分類 -->
            <div class="category_section">這裡是lianY
                <div id="lianY"></div>
                <br>
                <!-- define category -->
                <?php if ( $lianY->have_posts() ) : ?>
                    <?php while ( $lianY->have_posts() ) : $lianY->the_post(); ?>
                        <div class="entry_wrap">
                            <?php if (has_post_thumbnail( $post->ID ) ): ?>
                                <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>
                                <div class="entry-thumb" style="background-image: url('<?php echo $image[0]; ?>')">
                                </div>
                            <?php endif; ?>
                            <?php elara_entry_title(); ?> 
                        </div>
                    <?php endwhile; ?>
                    <?php wp_reset_postdata(); ?>
                <?php else: ?>
                    // No Posts Found Code
                <?php endif; ?>
            </div><!-- category: lianyoutuber -->

            <div class="category_section" >
                <div id="frogY">這裡是frogY</div>
                <br>            
                <?php if ( $frogY->have_posts() ) : ?>
                    <?php while ( $frogY->have_posts() ) : $frogY->the_post(); ?>
                        <div class="entry_wrap">
                            <?php if (has_post_thumbnail( $post->ID ) ): ?>
                                <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>
                                <div class="entry-thumb" style="background-image: url('<?php echo $image[0]; ?>')">
                                </div>
                            <?php endif; ?>
                            <?php elara_entry_title(); ?> 
                        </div>
                    <?php endwhile; ?>
                    <?php wp_reset_postdata(); ?>
                <?php else: ?>
                    // No Posts Found Code
                <?php endif; ?>
            </div><!-- category: frogyoutuber -->
            
            <div class="category_section" >
                <div id="sevenY">這裡是sevenY</div>
                <br>    
                <?php if ( $sevenY->have_posts() ) : ?>
                    <?php while ( $sevenY->have_posts() ) : $sevenY->the_post(); ?>
                        <div class="entry_wrap">
                            <?php if (has_post_thumbnail( $post->ID ) ): ?>
                                <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>
                                <div class="entry-thumb" style="background-image: url('<?php echo $image[0]; ?>')">
                                </div>
                            <?php endif; ?>
                            <?php elara_entry_title(); ?> 
                        </div>
                    <?php endwhile; ?>
                    <?php wp_reset_postdata(); ?>
                <?php else: ?>
                    // No Posts Found Code
                <?php endif; ?>
            </div><!-- category: sevenyoutuber -->            
    </div>

    <footer class="footerbuttons">
      <div class="row">
        <div class="col-lg-11 offset-lg-1 col-12 offset-0">
          <div class="row">
            <div class="col-lg col-3 cubeWrap">
              <div class="cube">
                <div class="cubeFront cubeGreen">
                  <div class="imgWrap"><a href="https://www.youtube.com/channel/UCyBPhn5oWduXS7OgeoOJ2lA"><img src="/wordpress/src/assets/img/icon/yt_icon_mono_dark.png" id="iconYt"/></a></div>
                </div>
                <div class="cubeBottom cubeBlack">
                  <div class="imgWrap"><a href="https://www.youtube.com/channel/UCyBPhn5oWduXS7OgeoOJ2lA">                                                                  <img src="/wordpress/src/assets/img/icon/yt_icon_mono_dark.png" id="iconYt"/></a></div>
                </div>
              </div>
            </div>
            <div class="col-lg col-3 cubeWrap">
              <div class="cube">
                <div class="cubeFront cubeGreen">
                  <div class="imgWrap"><a href="https://www.facebook.com/CAPSULGROUP/"><img src="/wordpress/src/assets/img/icon/FB-f-Logo__white.png" id="iconFb"/></a></div>
                </div>
                <div class="cubeBottom cubeBlack">
                  <div class="imgWrap"><a href="https://www.facebook.com/CAPSULGROUP/">                                       <img src="/wordpress/src/assets/img/icon/FB-f-Logo__white.png" id="iconFb"/></a></div>
                </div>
              </div>
            </div>
            <div class="col-lg col-3 cubeWrap">
              <div class="cube">
                <div class="cubeFront cubeGray"><span>
                    CAPSULE
                    OFFICIAL
                    WEBSITE</span></div>
                <div class="cubeBottom cubeBlack"> <span>
                       CAPSULE
                    OFFICIAL
                    WEBSITE                   </span></div>
              </div>
            </div>
            <div class="col-lg-7 order-lg-1 col-12 order-2 cubeLargeWrap">
              <div class="cube cubeLarge">
                <div class="cubeFront cubeBlack"><span>© 2017 CAPSULE. ALL RIGHTS RESERVED</span></div>
                <div class="cubeBottom cubeGray"><span>© 2017 CAPSULE. ALL RIGHTS RESERVED                                </span></div>
              </div>
            </div>
            <div class="col-lg order-lg-2 col-3 order-1 cubeWrap">
              <div class="cube">
                <div class="cubeFront cubeGreen"><a href="#nav">
                    <div class="fa fa-angle-up fa-5x"></div></a></div>
                <div class="cubeBottom cubeBlack"><a href="#nav">
                    <div class="fa fa-angle-up fa-5x">                               </div></a></div>
              </div>
            </div>
            <div class="col-lg cubeWrap order-last d-none d-lg-block d-lg-none"></div>
          </div>
        </div>
      </div>
    </footer>
    <script type="text/javascript" src="/wordpress/wp-content/themes/elara/creator/js/category-creators.js"></script>
</body>
