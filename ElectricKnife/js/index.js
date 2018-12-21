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
		var swiper1 = new Swiper('#swiper1', {
			loop : true,
			autoplay: 5000,
			parallax : true,
			observer : true,
			initialSlide : -1,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
			pagination : '.swiper-pagination',
			paginationClickable :true,
			paginationType : 'custom',
			paginationCustomRender: function (swiper, current, total) {
				var str = '';
				current = current == 4 ? 0 : current;
				for(var i = 0;i < total;i ++){
					if(i == current)
						str += '<span class="item cur"></span>';
					else
						str += '<span class="item"></span>';
				}
					return str;
			},
			onPaginationRendered:function(swiper, paginationContainer){
				
		      $('.item').click(function(){
		      	$(this).addClass('cur').siblings().removeClass('cur');
		      	swiper1.slideTo($(this).index(), 1000, false);
		      })
		   }
		})
	})();
	(function(){
		$('.bannerBtomList .center1 div').mouseover(function(){
			$(this).find('p').css('color','#e50065').parent().siblings().find('p').css('color','#999');
			$(this).find('.img2').show().parent().siblings().find('.img2').hide();
			$(this).find('.img1').hide().parent().siblings().find('.img1').show();
			$('.bannerBtomItem').children().eq($(this).index()).show().siblings().hide();
		});
		var  swiper2  = new Swiper('#swiper2', {
			slidesPerView : 3,
			slidesPerGroup : 1,
			observer : true,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
		});
		var  swiper3  = new Swiper('#swiper3', {
			slidesPerView : 3,
			slidesPerGroup : 1,
			observer : true,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
		});
	})();
	(function(){
		$('.itemBottom .itemBottom1 .left1pic .play').click(function(){
			$(this).hide();
			$('.itemBottom .itemBottom1 .left1pic .playImg').hide();
			$('.itemBottom .itemBottom1 .left1pic .video').show();
		})
	})();
});