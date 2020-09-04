<?php get_header(); ?>

	<div class="container">
		<div class="single__header s__preparation">
			<h1 class="single__title"><?php the_title(); ?></h1>
			<div class="single__sub">
				<span><?php the_field('year'); ?></span>
				<?php $types = get_field('type'); ?>
				<?php if( $types ): ?>
					<ul>
						<?php foreach( $types as $type ): ?>
							<li><?php echo $type; ?></li>
						<?php endforeach; ?>
					</ul>
				<?php endif; ?>
			</div>
		</div>

		<div class="single__image single__image--first s__preparation">
			<img src="<?php the_field('project_img'); ?>" alt="<?php the_title(); ?>">
		</div>
		<div class="single__section-header s__preparation">
			<h2 class="single__section-title">Conceito</h2>
			<div class="single__section-text"><?php the_field('conceito') ?></div>
		</div>
	</div>

	<?php if( get_field('has_id') ): ?>

		<?php if( get_field('id_img') ): ?>

			<div class="container">
				<div class="single__image s__preparation">
					<img src="<?php the_field('id_img'); ?>" alt="<?php the_title(); ?>">
				</div>
			</div>

		<?php endif; ?>

		<?php if( get_field('id_text') ): ?>

			<div class="container">
				<div class="single__section-header s__preparation">
					<h2 class="single__section-title">Identidade Visual</h2>
					<div class="single__section-text"><?php the_field('id_text') ?></div>
				</div>
			</div>

		<?php endif; ?>

		<?php if( get_field('id_video') ): ?>

			<div class="container">
				<div class="single__video-wrapper s__preparation">
					<video class="single__video">
						<source src="<?php the_field('id_video'); ?>" type="video/mp4">
					</video>
					<div class="single__video-play">
						<div class="single__video-play-wrapper">
							<i class="play-button fas fa-play"></i>
							<div class="loading-ball"><span></span></div>
						</div>
					</div>
				</div>
			</div>

		<?php endif; ?>

		<?php if( get_field('id_img2') ): ?>

			<div class="container">
				<div class="single__image2 s__preparation">
					<img src="<?php the_field('id_img2'); ?>" alt="<?php the_title(); ?>">
				</div>
			</div>

		<?php endif; ?>

		<?php if( get_field('id_gallery') ): ?>

			<div class="single__gallery-wrapper idGallery s__preparation">

				<div class="single__gallery-prev disabled"></div>
				<div class="single__gallery-next"></div>

				<div class="single__gallery container">

					<div class="single__gallery-scroll">

					<?php $id_images = acf_photo_gallery('id_gallery', $post->ID);
						if( count($id_images) ):
							foreach($id_images as $id_image):
								$full_image_url = $id_image['full_image_url'];
					?>
								<div class="single__gallery-image">
									<img src="<?php echo $full_image_url; ?>" alt="<?php the_title(); ?>">
								</div>
							<?php endforeach; ?>
					<?php endif; ?>

					</div>

				</div>

				<div class="single__gallery-count"><span class="orderNumber">1</span> / <span class="lengthNumber"></span></div>
			
			</div>

		<?php endif; ?>


	<?php endif; ?>


	<?php if( get_field('has_site') ): ?>

		<?php if( get_field('site_img') ): ?>

			<div class="container">
				<div class="single__image s__preparation">
					<img src="<?php the_field('site_img'); ?>" alt="<?php the_title(); ?>">
				</div>
			</div>

		<?php endif; ?>

		<?php if( get_field('site_text') ): ?>

			<div class="container">
				<div class="single__section-header s__preparation">
					<h2 class="single__section-title">Web Site</h2>
					<div class="single__section-text"><?php the_field('site_text') ?></div>
				</div>
			</div>

		<?php endif; ?>

		<?php if( get_field('site_gallery') ): ?>

			<div class="single__gallery-wrapper webGallery s__preparation">

				<div class="single__gallery-prev disabled"></div>
				<div class="single__gallery-next"></div>

				<div class="single__gallery container">

					<div class="single__gallery-scroll">

					<?php $web_images = acf_photo_gallery('id_gallery', $post->ID);
						if( count($web_images) ):
							foreach($web_images as $web_image):
								$full_image_url = $web_image['full_image_url'];
					?>
								<div class="single__gallery-image">
									<img src="<?php echo $full_image_url; ?>" alt="<?php the_title(); ?>">
								</div>
							<?php endforeach; ?>
					<?php endif; ?>

					</div>

				</div>

				<div class="single__gallery-count"><span class="orderNumber">1</span> / <span class="lengthNumber"></span></div>
			
			</div>

		<?php endif; ?>


	<?php endif; ?>

	<div class="container">
		<div class="single__others-header">
			<p class="call-text">Tem uma ideia de projeto ou negócio</p>
			<p class="call-text">e gostaria de dar vida a ele?</p>
			<a href="<?php bloginfo('url') ?>#contato" class="button button--black">
				<span>FALE COM A GENTE!</span>
			</a>
		</div>
	</div>

	<div class="single__others">
	
		<?php $prev_post = get_previous_post();
			if (!empty( $prev_post )) :
		?>

			<article class="single__prev">
				<a href="<?php echo get_permalink( $prev_post->ID ); ?>">
					<div class="single__others-call">
						<h4 class="single__others-title"><?php echo $prev_post->post_title; ?></h4>
						<i class="single__others-arrow fas fa-long-arrow-alt-left"></i>
					</div>
					<img src="<?php the_field( 'project_img', $prev_post->ID ); ?>" alt="<?php echo $prev_post->post_title; ?>">
				</a>
			</article>

		<?php endif; ?>

		<?php $next_post = get_next_post();
			if (!empty( $next_post )) :
		?>

			<article class="single__next">
				<a href="<?php echo get_permalink( $next_post->ID ); ?>">
					<div class="single__others-call">
						<h4 class="single__others-title"><?php echo $next_post->post_title; ?></h4>
						<i class="single__others-arrow fas fa-long-arrow-alt-right"></i>
					</div>
					<img src="<?php the_field( 'project_img', $next_post->ID ); ?>" alt="<?php echo $next_post->post_title; ?>">
				</a>
			</article>

		<?php endif; ?>
	</div>
	

<?php get_footer(); ?>