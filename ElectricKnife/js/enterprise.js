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
		
		$.ajax({
			url:"js/enterprise.json",
			success : function(res){
				res[0].forEach(function(o,i){
					$('#sweiper1 .swiper-wrapper').append(`
						<div class="swiper-slide">
					    	<div class="item">
					    		<div class="img">
						    		<a href="">
						    			<h2>${o.item1}</h2>
						    			<p>${o.item2}</p>
						    			<p>${o.item3}</p>
						    		</a>
					    			<img src="${o.item4}"/>
					    		</div>
					    		<div class="bot">${o.item5}</div	>
					    	</div>
					    </div>
					`)
				});
				var swiper1 = new Swiper('#sweiper1', {
					slidesPerView : 4,
					slidesPerGroup : 1,
					prevButton:'.swiper-button-prev',
					nextButton:'.swiper-button-next',
				});
			}
		});
	})();
	(function(){
		$.ajax({
			url:"js/enterprise.json",
			success : function(res){
				res[1].forEach(function(o,i){
					$('.main5 #swiper2 .swiper-wrapper').append(`
						<div class="swiper-slide">
					    	<div class="box">
					    		<img src="${o.pic}" alt="" />
					    	</div>
					    	<p>${o.text}</p>
					    </div>
					`)
				})
				var swiper2 = new Swiper('#swiper2', {
					autoplay: 5000,//可选选项，自动滑动
					slidesPerView : 4,
					slidesPerGroup : 1,
					prevButton:'.swiper-button-prev',
					nextButton:'.swiper-button-next',
				})
			}
		});	
	})();
	(function(){
		$('.enterbox .enter-top .anima img').click(function(){
			$('body,html').animate({scrollTop : $('.herfTop').eq(0).offset().top-83},1000);
		})
	})();
	(function(){
		if($('body,html').scrollTop() <= 600){
			$('.left-nav').fadeOut();
		}else{
			$('.left-nav').fadeIn();
		}
		$(window).scroll(function(){
			if($('body,html').scrollTop() <= 800){
				$('.left-nav').fadeOut();
			}else{
				$('.left-nav').fadeIn();
			}
		});
		$('.left-nav a').click(function(){
			$(this).css({background: '#e50065',color : '#fff'}).siblings().css({background: '#fff',color : '#616161'});
			$('body,html').animate({scrollTop : $('.herfTop').eq($(this).index()).offset().top-83},1000);
		});
		var winPos = $(window).scrollTop();
		$(window).scroll(function(){
			var winPos = $(window).scrollTop();
			if(winPos<$('.herfTop').eq(1).offset().top - innerHeight / 2&&winPos>$('.herfTop').eq(0).offset().top - innerHeight / 2){
				$('.left-nav a').eq(0).css({background: '#e50065',color : '#fff'}).siblings().css({background: '#fff',color : '#616161'});
			}else if(winPos<$('.herfTop').eq(2).offset().top - innerHeight / 2&&winPos>$('.herfTop').eq(1).offset().top - innerHeight / 2){
				$('.left-nav a').eq(1).css({background: '#e50065',color : '#fff'}).siblings().css({background: '#fff',color : '#616161'});
			}else if(winPos<$('.herfTop').eq(3).offset().top - innerHeight / 2&&winPos>$('.herfTop').eq(2).offset().top - innerHeight / 2){
				$('.left-nav a').eq(2).css({background: '#e50065',color : '#fff'}).siblings().css({background: '#fff',color : '#616161'});
			}else if(winPos>=$('.herfTop').eq(3).offset().top - innerHeight / 2){
				$('.left-nav a').eq(3).css({background: '#e50065',color : '#fff'}).siblings().css({background: '#fff',color : '#616161'});
			}
		})
	})();
})