<?php
/**
* The template for displaying the header widgets
*
* @package elara
*/
$elara_example_content  = elara_get_option( 'elara_example_content' );
if ( $elara_example_content == 0 &&
	! is_active_sidebar( 'sidebar-top-left' ) &&
	! is_active_sidebar( 'sidebar-top-center' ) &&
	! is_active_sidebar( 'sidebar-top-right' ) ) {
	return;
}
?>
<div class="widget-area widget-area-header">
	<div class="container-wrap">
		<div class="wrapper">
			<div class="row">
      			<nav class="navbar navbar-expand-md fixed-top navbar-dark">
					<a class="navbar-brand" href="/wordpress/index.php/creator"><img src="/wordpress/src/assets/img/capsule_w.png" height="30px"/></a>
					<ul class="navbar-nav mr-auto">
						<li class="nav-item"><a class="nav-link" href="/wordpress/index.php/category/creators/">CREATORS</a></li>
						<li class="nav-item"><a class="nav-link" href="/wordpress/index.php">NEWS</a></li>
						<li class="nav-item"><a class="nav-link" href="#">PARTNERSHIP</a></li>
					</ul>
					<ul class="navbar-nav ml-auto">
						<li class="nav-item"><a class="nav-link" href="#">企業資訊
							<div class="fa fa-file">              </div></a></li>
						<li class="nav-item"><a class="nav-link" href="#">這邊在放點東西好了</a></li>
					</ul>
				</nav>
			</div><!-- row -->
		</div><!-- wrapper -->
	</div><!-- container-wrap -->
</div><!-- widget-area widget-area-header -->
<div class="header-toggle"><i class="fa fa-angle-down"></i></div>
