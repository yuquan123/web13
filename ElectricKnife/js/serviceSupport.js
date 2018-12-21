$(function(){
	(function(){
		//加载头部，底部，返回顶部导航
		$('#navHeader').load('homepage.html .navHeader');
		$('#footerBottom').load('homepage.html .footerBottom');
		$('#goTop').load('homepage.html .goTop',function(){
			$('body').append('<script src="js/homepage.js"></script>');
		});
	})();
	(function(){
		wow = new WOW({
		 　　animateClass: 'animated'
		 });
		 wow.init();
	})();
	(function(){
		$('.serveBox .serveNavItem7 .container .center .centerbottom li').click(function(){
			$('.serveBox .serveNavItem7 .container .center .centertop').eq($(this).index()).show().siblings('.serveBox .serveNavItem7 .container .center .centertop').hide();
		})
	})();
	(function(){
		$('.serveNavList a').click(function(){
			$('body,html').animate({scrollTop : $('.hrefTop').eq($(this).index()).offset().top-83},1000);
		})
	})();
});