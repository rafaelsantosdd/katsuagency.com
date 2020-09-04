// MAIN

$(function(){


	// CHANGE PAGE ON SCROLL

	var navLinks			= $(".page-menu__navigation li a"),
		footerLink			= $(".page-footer__next a"),
		sections 			= $(".page-section"),
		home				= $(".section-home"),
		projects			= $(".section-projects"),
		currentSection 		= 0,
		lastSection			= sections.length - 1,
		activeScroll		= true,
		projectsLimit		= 0,
		wrnUp				= $(".scroll-warning--up"),
		wrnDown				= $(".scroll-warning--down"),
		wheel				= 0,
		isMobile			= window.matchMedia("(max-width: 768px)").matches;


	// ENTRANCE

	var pageList = [];

	sections.each(function(i){

		let id = this.id;

		pageList.push(id);

	});

	if(window.location.hash && pageList.includes(window.location.hash.substring(1))) {

		let hash = window.location.hash.substring(1),
			nav;

		if(hash == "wpcf7-f9-o1") {
		
			nav = lastSection;
		
		} else {

			sections.each(function(i){
				if($(this).is("#" + hash)) {

					nav = $(this).data("section");

				}
			});

		}

		$(".page-menu").css({
			"transform": "translateX(0)"
		});

		$(".page-footer").css({
			"transform": "translateY(0)"
		});

		$(".scroll-it").addClass("visible");
		
		setThePage(1, true, nav);

	} else {

		window.onload = function(){

			$(".page-menu").css({
				"transform": "translateX(0)"
			});

			$(".page-footer").css({
				"transform": "translateY(0)"
			});

			$(".scroll-it").addClass("visible");
			home.addClass("section--active");
			navLinks.parent().first().addClass("active");
			home.find(".preparation").addClass("entrance");

		}
	
	}


	$("a[data-nav]").click(function(e) {

		e.preventDefault();

		if(!$(this).parent().hasClass("active")) {

			let i 		= $(this).data("nav"),
				li  	= $(this).parent();

			animateChange(1, true, i);
		
		}

	});

	projects.on("scroll", function() {

		if(currentSection == 1) {

			if($(this).scrollTop() == 0) {
				
				projectsLimit = 0;

			} else if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {

				projectsLimit = 1;

			} else {

				projectsLimit = false;

			}
		
		}

	});


	$('body').on('mousewheel DOMMouseScroll', function(e){
		if(typeof e.originalEvent.detail == 'number' && e.originalEvent.detail !== 0) {
			
			if(e.originalEvent.detail > 0) {

				changePage(1);
			
			} else if(e.originalEvent.detail < 0){

				changePage(0);
			
			}
		
		} else if (typeof e.originalEvent.wheelDelta == 'number') {
			
			if(e.originalEvent.wheelDelta < 0) {

				changePage(1);
			
			} else if(e.originalEvent.wheelDelta > 0) {

				changePage(0);
			
			}
	
		}
	});

	function changePage(direction) {

		if (activeScroll === true) {

			if (currentSection != 1) { // if it is NOT projects

				if (direction === 1 && currentSection !== lastSection) { // if scroll down

					animateChange(1, false);

				} else if (direction === 0 && currentSection !== 0) { // if scroll up

					animateChange(0, false);

				}
			
			} else if (currentSection = 1) { // if it's projects

				if (direction === 1 && projectsLimit === 1) { // if scroll down and bottom of project 

					wheel++;
					wrnDown.height(wheel * 4);

					if (wheel === 6) { // number of wheel rolls
						animateChange(1, false);

						wheel = 0;
						wrnDown.height(0);
						
						setTimeout(function(){
							projects.scrollTop(0);
						}, 1000);						

					}

				} else if (direction === 0 && projectsLimit === 0) { // if scroll up and top of project

					wheel++;
					wrnUp.height(wheel * 5);

					if (wheel === 6) { // number of wheel rolls
						animateChange(0, false);

						wheel = 0;
						wrnUp.height(0);
					}

				}

			}

		}

	}

	function animateChange(direction, isClick, i) {

		let old = sections.eq(currentSection);

		old.find(".preparation").removeClass("entrance");
		$(".scroll-it").removeClass("visible");

		setTimeout(function(){
			old.removeClass("section--active");
		}, 900);
		
		setTimeout(function(){
			
			setThePage(direction, isClick, i);

		}, 910);
	
		activeScroll = false;
		setTimeout(function(){
			activeScroll = true;
		}, 2500);

	}

	function setThePage(direction, isClick, i) {

		if (isClick === true) {

			currentSection = i;

		} else {
		
			if (direction === 1) {
				
				currentSection++;
			
			} else if (direction === 0) {
				
				currentSection--;
			
			}

		}

		sections.eq(currentSection).addClass("section--active");
		sections.eq(currentSection).find(".preparation").addClass("entrance");

		if (currentSection === 0) { // if it's home

			$(".scroll-it").addClass("visible");

		}

		if (currentSection === 1) { // if it's projects

			sections.eq(currentSection).find(".preparation").children().addClass("entrance");
			projectsLimit = 0;

		}

		navLinks.parent().removeClass("active");
		navLinks.eq(currentSection).parent().addClass("active");

		let currentPageName = navLinks.eq(currentSection + 1).text(),
			footerLinkIndex = (isClick === true) ? i + 1 : footerLink.data("nav") + 1;

		if (currentSection === lastSection) { // if it's contact

			footerLink.data("nav", 0);
			footerLink.find("span").text("Voltar à Home");
			footerLink.parent().addClass("back-home");
			$(".page-footer__contact-link").hide();
			if(!isMobile){
				$(".page-footer__contact-email").show();
			} else {
				$(".page-footer__contact-email").hide();
			}
		
		} else {

			footerLink.data("nav", footerLinkIndex);
			footerLink.find("span").text(currentPageName);
			footerLink.parent().removeClass("back-home");
			$(".page-footer__contact-link").show();
			$(".page-footer__contact-email").hide();

		}

		let hash = (currentSection === 0) ? '' : sections[currentSection].id;

		window.location.hash = hash;

	}


	// EASESCROLL.JS

	$.fn.easeScroll=function(e){!function(){function t(){var e=!1;e&&s("keydown",n),y.keyboardSupport&&!e&&u("keydown",n)}function a(){if(document.body){var e=document.body,a=document.documentElement,o=window.innerHeight,r=e.scrollHeight;if(H=document.compatMode.indexOf("CSS")>=0?a:e,g=e,t(),D=!0,top!=self)k=!0;else if(r>o&&(e.offsetHeight<=o||a.offsetHeight<=o)){var n=!1,i=function(){n||a.scrollHeight==document.height||(n=!0,setTimeout(function(){a.style.height=document.height+"px",n=!1},100))};if(a.style.height="auto",setTimeout(i,10),H.offsetHeight<=o){var l=document.createElement("div");l.style.clear="both",e.appendChild(l)}}y.fixedBackground||S||(e.style.backgroundAttachment="scroll",a.style.backgroundAttachment="scroll")}}function o(e,t,a,o){if(o||(o=1e3),f(t,a),1!=y.accelerationMax){var r=+new Date,n=r-C;if(n<y.accelerationDelta){var i=(1+30/n)/2;i>1&&(i=Math.min(i,y.accelerationMax),t*=i,a*=i)}C=+new Date}if(z.push({x:t,y:a,lastX:0>t?.99:-.99,lastY:0>a?.99:-.99,start:+new Date}),!A){var l=e===document.body,c=function(){for(var r=+new Date,n=0,i=0,u=0;u<z.length;u++){var s=z[u],d=r-s.start,f=d>=y.animationTime,p=f?1:d/y.animationTime;y.pulseAlgorithm&&(p=w(p));var m=s.x*p-s.lastX>>0,h=s.y*p-s.lastY>>0;n+=m,i+=h,s.lastX+=m,s.lastY+=h,f&&(z.splice(u,1),u--)}l?window.scrollBy(n,i):(n&&(e.scrollLeft+=n),i&&(e.scrollTop+=i)),t||a||(z=[]),z.length?K(c,e,o/y.frameRate+1):A=!1};K(c,e,0),A=!0}}function r(e){D||a();var t=e.target,r=c(t);if(!r||e.defaultPrevented||d(g,"embed")||d(t,"embed")&&/\.pdf/i.test(t.src))return!0;var n=e.wheelDeltaX||0,i=e.wheelDeltaY||0;return n||i||(i=e.wheelDelta||0),!(y.touchpadSupport||!p(i))||(Math.abs(n)>1.2&&(n*=y.stepSize/120),Math.abs(i)>1.2&&(i*=y.stepSize/120),o(r,-n,-i),void e.preventDefault())}function n(e){var t=e.target,a=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==T.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||a)return!0;if(d(t,"button")&&e.keyCode===T.spacebar)return!0;var r,n=0,i=0,l=c(g),u=l.clientHeight;switch(l==document.body&&(u=window.innerHeight),e.keyCode){case T.up:i=-y.arrowScroll;break;case T.down:i=y.arrowScroll;break;case T.spacebar:r=e.shiftKey?1:-1,i=-r*u*.9;break;case T.pageup:i=.9*-u;break;case T.pagedown:i=.9*u;break;case T.home:i=-l.scrollTop;break;case T.end:var s=l.scrollHeight-l.scrollTop-u;i=s>0?s+10:0;break;case T.left:n=-y.arrowScroll;break;case T.right:n=y.arrowScroll;break;default:return!0}o(l,n,i),e.preventDefault()}function i(e){g=e.target}function l(e,t){for(var a=e.length;a--;)N[B(e[a])]=t;return t}function c(e){var t=[],a=H.scrollHeight;do{var o=N[B(e)];if(o)return l(t,o);if(t.push(e),a===e.scrollHeight){if(!k||H.clientHeight+10<a)return l(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return l(t,e)}while(e=e.parentNode)}function u(e,t,a){window.addEventListener(e,t,a||!1)}function s(e,t,a){window.removeEventListener(e,t,a||!1)}function d(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function f(e,t){e=e>0?1:-1,t=t>0?1:-1,(x.x!==e||x.y!==t)&&(x.x=e,x.y=t,z=[],C=0)}function p(e){if(e){e=Math.abs(e),M.push(e),M.shift(),clearTimeout(E);var t=M[0]==M[1]&&M[1]==M[2],a=m(M[0],120)&&m(M[1],120)&&m(M[2],120);return!(t||a)}}function m(e,t){return Math.floor(e/t)==e/t}function h(e){var t,a,o;return e*=y.pulseScale,1>e?t=e-(1-Math.exp(-e)):(a=Math.exp(-1),e-=1,o=1-Math.exp(-e),t=a+o*(1-a)),t*y.pulseNormalize}function w(e){return e>=1?1:0>=e?0:(1==y.pulseNormalize&&(y.pulseNormalize/=h(1)),h(e))}var g,v=$.extend({frameRate:60,animationTime:1e3,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0},e),b={frameRate:v.frameRate,animationTime:v.animationTime,stepSize:v.stepSize,pulseAlgorithm:v.pulseAlgorithm,pulseScale:v.pulseScale,pulseNormalize:v.pulseNormalize,accelerationDelta:v.accelerationDelta,accelerationMax:v.accelerationMax,keyboardSupport:v.keyboardSupport,arrowScroll:v.arrowScroll,touchpadSupport:v.touchpadSupport,fixedBackground:v.fixedBackground,excluded:""},y=b,S=!1,k=!1,x={x:0,y:0},D=!1,H=document.documentElement,M=[120,120,120],T={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},z=(y=b,[]),A=!1,C=+new Date,N={};setInterval(function(){N={}},1e4);var E,B=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),K=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,a){window.setTimeout(e,a||1e3/60)},L=/chrome|iPad/i.test(window.navigator.userAgent),R="onmousewheel"in document;R&&L&&(u("mousedown",i),u("mousewheel",r),u("load",a))}()};


	// SMOOTH SCROLL

	projects.easeScroll();




	// CONTACT FORM SUBMIT BUTTON FIX

	$(".contact__form input[type='submit']").replaceWith("<div class='preparation'><button type='submit' class='wpcf7-form-control wpcf7-submit button'><span class='submit__text'>ENVIAR</span><div class='button__loading'><span></span></div><div class='button__feedback'><i class='feedback--red fas fa-times'></i><i class='feedback--yellow fas fa-exclamation'></i><i class='feedback--green fas fa-check'></i></div></button></div>");


	// CONTACT FEEDBACK

	$(".wpcf7-submit").parent().parent().css({
		float: "left"
	});

	var message 	= $(".wpcf7-response-output"),
		submit		= $(".wpcf7-submit"),
		disabled	= false;

	submit.click(function(){

		if (disabled == true) {

			return false;

		}

		$(this).addClass("loading");
		disabled = true;
		return true;

	});

	document.addEventListener( "wpcf7invalid", function( event ) {
		message.addClass("alert-danger");
		submit.addClass("feedback submit--danger");
		setTimeout(function(){
			submit.removeClass("loading feedback submit--danger");
			disabled = false;
		}, 3000);
	}, false );
	document.addEventListener( "wpcf7spam", function( event ) {
		message.addClass("alert-warning");
		submit.addClass("feedback submit--warning");
		setTimeout(function(){
			submit.removeClass("loading feedback submit--warning");
			disabled = false;
		}, 3000);
	}, false );
	document.addEventListener( "wpcf7mailfailed", function( event ) {
		message.addClass("alert-warning");
		submit.addClass("feedback submit--warning");
		setTimeout(function(){
			submit.removeClass("loading feedback submit--warning");
			disabled = false;
		}, 3000);
	}, false );
	document.addEventListener( "wpcf7mailsent", function( event ) {
		message.addClass("alert-success");
		submit.addClass("feedback submit--success");
		setTimeout(function(){
			submit.removeClass("loading feedback submit--success");
			disabled = false;
		}, 3000);
	}, false );




	// MENU MOBILE

	var burger 			= $(".menu-burger"),
		mobileMenu		= $(".menu-mobile__navigation"),
		mobileMenuLis	= $(".menu-mobile__navigation ul li"),
		socialBtns		= $(".page-menu__social");

	burger.click(function(){

		if(!mobileMenu.hasClass("visible")) {

			burger.text("FECHAR");
			mobileMenu.addClass("visible");
			socialBtns.addClass("visible");

			setTimeout(function(){

				mobileMenuLis.each(function(i){

					$(this).delay(i*150).queue(function(next) {
						$(this).addClass("li-animated");
						next();
					});

				});

			}, 600);

		} else if(mobileMenu.hasClass("visible")) {

			closeMobileMenu();

		}

	});

	$(".menu-mobile__navigation ul li a").click(function(){

		closeMobileMenu();

	});

	function closeMobileMenu() {

		mobileMenuLis.each(function(i){

			$(this).delay(i*150).queue(function(next) {
				$(this).removeClass("li-animated");
				next();
			});

		});

		setTimeout(function(){

			burger.text("MENU");
			mobileMenu.removeClass("visible");
			socialBtns.removeClass("visible");

		}, 500);

	}

	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
			scrollTop: target.offset().top
			}, 1000, function() {
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) {
					return false;
				} else {
					$target.attr('tabindex','-1');
					$target.focus();
				};
			});
		}
		}
	});

});