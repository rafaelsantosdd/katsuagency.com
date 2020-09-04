
			<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
		
		<?php if(is_front_page()) : ?>	
			
			<script type="text/javascript" src="<?php bloginfo('template_directory') ?>/js/main.js"></script>
	
		<?php elseif(is_single()) : ?>

			<script type="text/javascript" src="<?php bloginfo('template_directory') ?>/js/single.js"></script>

		<?php endif; ?>
		<?php wp_footer(); ?>
	</body>
</html>