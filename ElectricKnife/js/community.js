$(function(){
	(function(){
		//加载头部，底部，返回顶部导航
		$('#navHeader').load('homepage.html .navHeader');
		
		$('#footerBottom').load('homepage.html .footerBottom');
		$('#goTop').load('homepage.html .goTop',function(){
			$('body').append('<script src="js/homepage.js"></script>');
		});
		$('#serveTop').load('marketing.html .serveTop',function(){
			$('body').append('<script src="js/marketing.js"></script>');
		});
	})();
	(function(){
		$('.box .login input').focus(function(){
			$(this).siblings('.pic').addClass('cur');
		});
		$('.box .login input').blur(function(){
			$(this).siblings('.pic').removeClass('cur');
		});
	})();
})