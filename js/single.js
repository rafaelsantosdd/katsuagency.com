$(function(){

	var gallery		= $(".single__gallery"),
		wrapper		= $(".single__gallery-wrapper"),
		images		= $(".single__gallery-image"),
		
		imgWidth	= gallery.width(),
		
		prev		= $(".single__gallery-prev"),
		next		= $(".single__gallery-next"),
		
		slideId		= 0,
		slideWeb	= 0,
		
		isMobile	= window.matchMedia("(max-width: 600px)").matches,

		prepared	= $(".s__preparation");
	
	if ("scrollRestoration" in history) {
		history.scrollRestoration = "manual";
	}

	window.scrollTo(0,0);

	window.onload = function(){

		$(".page-menu, .single__back").css({
			"transform": "translateX(0)"
		});

		$(".single__header").addClass("entrance");
		$(".single__image--first").addClass("entrance");


		if(!isMobile) { // CONSTRUCT SLIDE

			images.each(function(i){

				let imgLeft = i * (imgWidth + 51);

				$(this).width(imgWidth).css({
					left: imgLeft
				});

			});

			var scrollHeight = images.height();

			wrapper.each(function(){

				let length = $(this).find(".single__gallery-image").length;

				$(this).height(scrollHeight);
				$(this).find(".lengthNumber").text(length);
				
			});

		} else {

			$(".single__section-header").eq(0).addClass("entrance");

		}
	}

	$(window).scroll(function(){

		prepared.each(function() {

			if(!$(this).hasClass("entrance")) {

				let offset = $(this).offset().top,
					height = $(window).height();
					scroll = $(window).scrollTop();

				if((height + scroll) >= (offset + 38)) {

					$(this).addClass("entrance");

				}

			}

		});

	});

	if($(".single__video-wrapper").length) {

		let wrapper 	= $(".single__video-wrapper"),
			play		= $(".single__video-play"),
			vid 		= document.querySelector(".single__video"),
			d,
			started		= false,
			canPlay		= false;

		vid.addEventListener('durationchange', function() { // ADD OR NOT PLAYER
			d = vid.duration;

			if (d < 20) {

				vid.loop = true;
				vid.muted = true;
				vid.play();
				play.hide();
	
			} else if (d >= 20) {

				play.click(function(){

					if(started === false) {

						started = true;

						if(canPlay === false) {

							play.addClass("loading");

						} else if(canPlay === true) {

							play.removeClass("loading").addClass("played");

							vid.play();

						}

					} else {

						play.removeClass("loading played");

						vid.pause();

						started = false;

					}

				});

			}
		});

		vid.addEventListener("canplaythrough", function() {

			canPlay = true;

		});

		vid.addEventListener('ended', function() {

			play.removeClass("played");

			started = false;

		});
	}

	prev.click(function(){

		if(!isMobile) {
		
			let theSlide 	= $(this).parent(),
				scroll		= theSlide.find(".single__gallery-scroll"),
				order		= theSlide.find(".orderNumber"),
				length		= theSlide.find(".single__gallery-image").length - 1,
				tl;

			if(!$(this).hasClass("disabled")) {

				if(theSlide.hasClass("idGallery")) {

					if(slideId == length) {

						$(this).next().removeClass("back");

					}

					slideId--;

					if(slideId === 0) {

						$(this).addClass("disabled");

					}

					order.text(slideId + 1);

					tl = slideId * (imgWidth + 51);
				
				} else if(theSlide.hasClass("webGallery")) {

					if(slideWeb == length) {

						$(this).next().removeClass("back");

					}

					slideWeb--;

					if(slideWeb === 0) {

						$(this).addClass("disabled");

					}

					order.text(slideWeb + 1);

					tl = slideWeb * (imgWidth + 51);
				
				}
				
				scroll.css({
					transform: "translateX(-"+ tl + "px)"
				});
		
			}

		}

	});

	next.click(function(){

		if(!isMobile) {
		
			let theSlide 	= $(this).parent(),
				scroll		= theSlide.find(".single__gallery-scroll"),
				order		= theSlide.find(".orderNumber"),
				length		= theSlide.find(".single__gallery-image").length - 1,
				tl;

			if(!$(this).hasClass("disabled")) {

				if(theSlide.hasClass("idGallery")) {

					if(slideId === 0) {

						$(this).prev().removeClass("disabled");

					}

					if((slideId + 1) == length) {

						$(this).addClass("back");

					}

					if(slideId  == length) {

						$(this).removeClass("back");
						$(this).prev().addClass("disabled");

						slideId = 0;

					} else {

						slideId++;

					}

					order.text(slideId + 1);

					tl = slideId * (imgWidth + 51);
				
				} else if(theSlide.hasClass("webGallery")) {

					if(slideWeb === 0) {

						$(this).prev().removeClass("disabled");

					}

					if((slideWeb + 1) == length) {

						$(this).addClass("back");

					}

					if(slideWeb  == length) {

						$(this).removeClass("back");
						$(this).prev().addClass("disabled");

						slideWeb = 0;

					} else {

						slideWeb++;

					}

					order.text(slideWeb + 1);

					tl = slideWeb * (imgWidth + 51);
				
				}
				
				scroll.css({
					transform: "translateX(-"+ tl + "px)"
				});
		
			}

		}

	});

});