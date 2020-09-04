<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF=8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no">
		<link rel="preconnect" href="https://www.google-analytics.com">
		<link rel="dns-prefetch" href="https://www.google-analytics.com">
		<title><?php if(is_single()): ?><?php the_title(); echo ' - '; bloginfo('name'); ?><?php else: ?><?php bloginfo('name'); echo ' | '; bloginfo('description'); ?><?php endif; ?></title>
		<link rel="apple-touch-icon" sizes="180x180" href="<?php bloginfo('template_directory') ?>/imgs/favicon/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="<?php bloginfo('template_directory') ?>/imgs/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="194x194" href="<?php bloginfo('template_directory') ?>/imgs/favicon/favicon-194x194.png">
		<link rel="icon" type="image/png" sizes="192x192" href="<?php bloginfo('template_directory') ?>/imgs/favicon/android-chrome-192x192.png">
		<link rel="icon" type="image/png" sizes="16x16" href="<?php bloginfo('template_directory') ?>/imgs/favicon/favicon-16x16.png">
		<link rel="manifest" href="<?php bloginfo('template_directory') ?>/imgs/favicon/site.webmanifest">
		<link rel="mask-icon" href="<?php bloginfo('template_directory') ?>/imgs/favicon/safari-pinned-tab.svg" color="#3d3d3d">
		<meta name="msapplication-TileColor" content="#000000">
		<meta name="msapplication-TileImage" content="<?php bloginfo('template_directory') ?>/imgs/favicon/mstile-144x144.png">
		<meta name="theme-color" content="#000000">
		<?php if(is_front_page()): ?><link rel="preload" href="<?php bloginfo('template_directory') ?>/imgs/home-bg1.mp4" as="video" type="video/mp4"><?php endif; ?>
		<?php if(is_single()) : ?><link rel="prerender" href="https://katsuagency.com"><?php endif; ?>
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory') ?>/css/styles.css">
		<meta name="description" content="A Katsu! Agency é uma agência que oferece soluções digitais, como branding, web e motion design, com foco no que importa para nossos clientes: vender e crescer.">
		<meta property="og:title" content="<?php if(is_single()): ?><?php the_title(); echo ' - '; bloginfo('name'); ?><?php else: ?><?php bloginfo('name'); echo ' | '; bloginfo('description'); ?><?php endif; ?>">
		<meta property="og:description" content="A Katsu! Agency é uma agência que oferece soluções digitais, como branding, web e motion design, com foco no que importa para nossos clientes: vender e crescer.">
		<meta property="og:type" content="website">
		<meta property="og:image" content="<?php bloginfo('template_directory'); ?>/imgs/katsu.jpg">
		<meta name="twitter:title" content="<?php if(is_single()): ?><?php the_title(); echo ' - '; bloginfo('name'); ?><?php else: ?><?php bloginfo('name'); echo ' | '; bloginfo('description'); ?><?php endif; ?>">
		<meta name="twitter:description" content="A Katsu! Agency é uma agência que oferece soluções digitais, como branding, web e motion design, com foco no que importa para nossos clientes: vender e crescer.">
		<meta name="twitter:creator" content="@rafaelsantosdd">
		<meta name="twitter:card" content="summary">
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-173229722-2"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'UA-173229722-2');
		</script>
		<?php wp_head(); ?>
	</head>
	<body class="<?php if(is_front_page()){ echo 'black-page'; } ?>">

		<?php if(is_front_page()) : ?>

			<header class="page-menu">
				<div class="page-menu__logo">
					<a href="" data-nav="0"><img src="<?php bloginfo('template_directory') ?>/imgs/page-logo.png" alt="KatsuLogo.png"></a>
				</div>
				<nav class="page-menu__navigation">
					<ul>
						<li><a href="" data-nav="0"><span class="page-menu__dot"></span><span class="page-menu__item">Home</span></a></li>
						<li><a href="#projetos" data-nav="1"><span class="page-menu__dot"></span><span class="page-menu__item">Projetos</span></a></li>
						<li><a href="#sobre" data-nav="2"><span class="page-menu__dot"></span><span class="page-menu__item">Sobre</span></a></li>
						<li><a href="#contato" data-nav="3"><span class="page-menu__dot"></span><span class="page-menu__item">Contato</span></a></li>
					</ul>
				</nav>
				<ul class="page-menu__social">
					<li><a href="https://twitter.com/katsuagency" target="_blank" ><i class="fab fa-twitter"></i></a></li>
					<li><a href="http://be.net/katsuagency" target="_blank" ><i class="fab fa-behance"></i></a></li>
				</ul>
			</header>
			<div class="menu-burger">MENU</div>
			<div class="menu-mobile">
				<nav class="menu-mobile__navigation">
					<ul>
						<li><a href="#projetos"><span class="page-menu__dot"></span><span class="page-menu__item">Projetos</span></a></li>
						<li><a href="#sobre"><span class="page-menu__dot"></span><span class="page-menu__item">Sobre</span></a></li>
						<li><a href="#contato"><span class="page-menu__dot"></span><span class="page-menu__item">Contato</span></a></li>
					</ul>
				</nav>
			</div>
			<footer class="page-footer">
				<div class="page-footer__next">
					<a href="#projetos" data-nav="1"><span>Projetos</span><i class="fas fa-arrow-down"></i></a>
				</div>
				<div class="page-footer__contact">
					<a href="#contato" class="page-footer__contact-link" data-nav="3"><i class="far fa-envelope"></i></a>
					<a href="mailto:contato@katsuagency.com" class="page-footer__contact-email">contato@katsuagency.com</a>
				</div>
			</footer>
		
		<?php elseif(is_single()) : ?>

			<header class="page-menu">
				<div class="page-menu__logo">
					<a href="<?php bloginfo('url'); ?>"><img src="<?php bloginfo('template_directory') ?>/imgs/single-logo.png" alt="KatsuLogo.png"></a>
				</div>
				<ul class="page-menu__social">
					<li><a href="https://twitter.com/katsuagency" target="_blank" ><i class="fab fa-twitter"></i></a></li>
					<li><a href="http://be.net/katsuagency" target="_blank" ><i class="fab fa-behance"></i></a></li>
				</ul>
			</header>
			<div class="single__back">
				<a href="<?php bloginfo('url'); ?>#projetos"><i class="fas fa-arrow-left"></i></a>
			</div>

		<?php endif; ?>