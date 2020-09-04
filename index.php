<?php get_header(); ?>

		<main role="main">
			<section class="page-section section-home" id="home" data-section="0">
				<div class="container">
					<div class="section-home__call">
						<h1 class="section-home__main">
							<div class="preparation">
								<span>Estratégias sólidas e</span>
							</div>
							<div class="preparation">
								<span>impactantes para o</span>
							</div>
							<div class="preparation">
								<span>que importa</span>
							</div>
						</h1>
						<h2 class="section-home__compl">
							<div class="preparation">
								<span>Desenvolvemos soluções digitais</span>
							</div>
							<div class="preparation">
								<span>que te ajudam a vender e crescer.</span>
							</div>
						</h2>
						<div class="section-home__the-call">
							<div class="preparation">
								<a href="#projetos" data-nav="1" class="button">
									<span>CONHEÇA NOSSOS TRABALHOS</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="scroll-it">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 211 470.08" xml:space="preserve">
						<defs>
						</defs>
						<g>
							<path d="M100.5,319.04C45.08,319.04,0,273.95,0,218.54V100.5C0,45.08,45.08,0,100.5,0S201,45.08,201,100.5v118.04
								C201,273.95,155.92,319.04,100.5,319.04z M100.5,10C50.6,10,10,50.6,10,100.5v118.04c0,49.9,40.6,90.5,90.5,90.5
								c49.9,0,90.5-40.6,90.5-90.5V100.5C191,50.6,150.4,10,100.5,10z"/>
						</g>
						<g>
							<path d="M100,129.21c-2.76,0-5-2.24-5-5V65c0-2.76,2.24-5,5-5s5,2.24,5,5v59.21C105,126.97,102.76,129.21,100,129.21z"/>
						</g>
					</svg>
				</div>
				<video autoplay muted loop playsinline class="section-home__background">
					<source src="<?php bloginfo('template_directory') ?>/imgs/home-bg1.mp4" type="video/mp4">
				</video>
			</section>
			<section class="page-section section-projects" id="projetos" data-section="1">
				<span class="scroll-warning scroll-warning--up"></span>
				<span class="scroll-warning scroll-warning--down"></span>
				<div class="container">
					<div class="page-section__header">
						<div class="page-section__subtitle">
							<div class="preparation">
								<span>O QUE FAZEMOS DE MELHOR</span>
							</div>
						</div>
						<h1 class="page-section__title">
							<div class="preparation">
								<span>Projetos</span>
							</div>
						</h1>
					</div>
					<?php 
						$args = array(
							'posts_per_page'	=> -1
						);

						$the_query = new WP_Query($args);

						if ( $the_query->have_posts() ) :
					?>
					
					<div class="projects__list preparation">

					<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

						<div class="projects__single-container">
							<article class="projects__single">
								<a href="<?php the_permalink(); ?>" class="projects__inner">
									<div class="projects__image">
										<img src="<?php the_field('project_thumbnail'); ?>" alt="<?php the_title(); ?>">
									</div>
									<h3 class="projects__title"><?php the_title(); ?></h3>
								</a>
							</article>
						</div>

					<?php endwhile; ?>

					<?php wp_reset_postdata(); ?>
						
					</div>

					<?php endif; ?>

				</div>
			</section>
			<section class="page-section section-about" id="sobre" data-section="2">
				<div class="container">
					<div class="page-section__header">
						<div class="page-section__subtitle">
							<div class="preparation">
								<span>	
									MAIS QUE UMA AGÊNCIA
								</span>
							</div>
						</div>
						<h1 class="page-section__title">
							<div class="preparation"><span>Sobre nós</span></div>
						</h1>
					</div>
					<div class="section-about__row">
						<div class="content preparation">
							<p class="content__text">A Katsu! Agency é uma moderna agência brasileira, com base no trabalho remoto de uma equipe qualificada espalhada por todo o território nacional. Prestando serviços de <strong>design de marca, gráfico, de experiência e interface, desenvolvimento, broadcasting e motion</strong>, nós acreditamos num plano estratégico de negócio sólido, que seja duradouro e marcante, alinhado à excelência da técnica, e em uma relação de trabalho estável e acolhedora.</p>
							<p class="content__text">Tudo isso com o intuito primeiro de auxiliar nos objetivos fundamentais dos nossos clientes: vender, crescer, difundir, popularizar e prosperar.</p>
						</div>
						<div class="section-about__right">
							<div class="desktop preparation"><img src="<?php bloginfo('template_directory') ?>/imgs/pattern.png" alt="pattern.png"></div>
							<div class="mobile preparation"><img src="<?php bloginfo('template_directory') ?>/imgs/pattern-mobile.png" alt="pattern-mobile.png"></div>
							<div class="preparation section-about__call">
								<p class="call-text">Tem uma ideia?</p>
								<a href="#contato" data-nav="3" class="button">
									<span>FALE COM A GENTE!</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="page-section section-contact" id="contato" data-section="3">
				<div class="container">
					<div class="page-section__header">
						<div class="page-section__subtitle">
							<div class="preparation">
								<span>
									DÊ UM OI!
								</span>	
							</div>
						</div>
						<h1 class="page-section__title">
							<div class="preparation">
								<span>
									Contato
								</span>	
							</div>
						</h1>
					</div>
					<div class="content preparation">
						<p class="content__text">Tem uma ideia de projeto ou negócio e gostaria de dar vida a ele? Deixa que a gente te ajuda! Nos envie os detalhes e responderemos o mais breve possível.</p>
					</div>
					<div class="contact__form preparation">
						<?php echo do_shortcode('[contact-form-7 id="9" title="Formulário de Contato"]'); ?>
					</div>
				</div>
			</section>
		</main>

<?php get_footer(); ?>