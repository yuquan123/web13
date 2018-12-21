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
		$('.maketingBox .top a').click(function(){
			$('body,html').animate({scrollTop : $('.hrefTop').eq($(this).index()).offset().top},1000);
		})
		$.ajax({
			url:"js/marketing.json",
			success : function(res){
				res[0].forEach(function(o,i){
					$('.maketingBox .topItem1 .banner').append(`
						<div class="swiper-slide bannerChild">
					    	<div class="pic">
					    		<a href="http://127.0.0.1:8020/Electric%20knife/marketingItem.html?${o.id}"><img src="${o.pic}" alt="" /></a>
					    	</div>
					    	<div class="bottom">
						    	<a href="http://127.0.0.1:8020/Electric%20knife/marketingItem.html?${o.id}">${o.title}</a>
						    	<span>${o.time}</span>
						    	<p>${o.text}</p>
					    	</div>
					    </div>
					`)
				})
			}
		});
		var  swiper5  = new Swiper('#swiper5', {
			autoplay : 5000,
			slidesPerView : 2,
			slidesPerGroup : 1,
			observer : true,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
		});
		
		$.ajax({
			url:"js/marketing.json",
			success : function(res){
				res[1].forEach(function(o,i){
					$('#swiper6 .swiper-wrapper').append(`
						<div class="swiper-slide">${o.list}</div>
					`)
				})
				var  swiper6  = new Swiper('#swiper6', {
					direction : 'vertical',
					prevButton:'.swiper-button-prev',
					nextButton:'.swiper-button-next',
					slidesPerView : 8,
					slidesPerGroup : 1
				});
				$('#swiper6 .swiper-slide').click(function(){
					$('.maketingBox .topItem2 .parent').children().eq($(this).index()).show().siblings().hide();
					$('.maketingBox .topItem2 .parent .play').show().siblings('.pic').show();
				});
			}
		});
		$.ajax({
			url:"js/marketing.json",
			success : function(res){
				res[2].forEach(function(o,i){
					$('.topItem2 .row .parent').append(`<div class="child">
						<div class="pic"><img src="${o.item1}" alt="" /></div>
						<iframe frameborder="0" width="100%" height="100%" src="${o.item2}" frameborder="0"></iframe>
						<div class="play"><img src="img/markplay.png" alt="" /></div></div>
					`)
				});
				$('.maketingBox .topItem2 .parent .play').click(function(){
					$(this).hide();
					$(this).siblings('.pic').hide();
				});
			}
		});
	})();
	
	
	(function(){
		var num = 0;
		$('.maketingBox .topItem3 .bannerBto .preve').click(function(){
			++ num;
			move(5);
		});
		$('.maketingBox .topItem3 .bannerBto .next').click(function(){
			++num;
			move(0);
			
		});
		function move(a){
			$('.maketingBox .topItem3 .bannerBto .bigBox').stop().animate({marginLeft : num * -183});
			if($('.maketingBox .topItem3 .bannerBto .bigBox .box').eq(a).offset().left < $('.maketingBox .topItem3 .bannerBto .next').offset().left){
				$('.maketingBox .topItem3 .bannerBto .bigBox').stop().animate({marginLeft : 0});
				num = 0
			};
		};
		$(window).resize(function(){
			if($(window).innerWidth()<=1084){
				$('.maketingBox .topItem3 .bannerBto .btn').show();
			}else{
				$('.maketingBox .topItem3 .bannerBto .btn').hide();
			};
		});
		if($(window).innerWidth()<=1084){
			$('.maketingBox .topItem3 .bannerBto .btn').show();
		}else{
			$('.maketingBox .topItem3 .bannerBto .btn').hide();
		};
	
		$.ajax({
			url:"js/marketing.json",
			success : function(res){
				res[3].forEach(function(o,i){
					$('.topItem3 #aaa').append(`
						<div class="row">
							<div class="col-md-9">
								<div class="pic">
									<div class="swiper-container bbb">
									  <div class="swiper-wrapper">
									  	<div class="swiper-slide"><img src="${o.pic1}"/></div>
									    <div class="swiper-slide"><img src="${o.pic2}"/></div>
									    <div class="swiper-slide"><img src="${o.pic3}"/></div>
									  </div>
									   <div class="swiper-pagination"></div>
									</div>	
								</div>
							</div>
							<div class="col-md-3">
								<div class="title">
									<h3>${o.item1}</h3>
									<p>${o.item2}</p>
								</div>
							</div>
						</div>
					`)
				});
				var swiper = new Swiper('.bbb', {
					autoplay: 3000,//可选选项，自动滑动
					loop : true,
					effect : 'fade',
					fade: {
					  crossFade: false,
					},
					observer:true,
					observeParents:true,
					watchSlidesProgress : true,
					speed:600,
					pagination : '.swiper-pagination',
					paginationClickable :true,
				});	
			}
		});
		$.ajax({
			url:"js/marketing.json",
			success : function(res){
				res[4].forEach(function(o,i){
					$('.topItem3 .bannerBto .bigBox').append(`		
						<div class="box">${o.botoom}</div>
					`)
				});
				$('.maketingBox .topItem3 .bannerBto .bigBox .box').click(function(){
					$(this).css({'background' : '#e80064','color' : '#fff'}).siblings().css({'background' : '#e8e8e8','color' : '#616161'});
					$('.maketingBox .topItem3 .row').eq($(this).index()).fadeIn().siblings().hide();
				})
			}
		});
		
	})();
})
