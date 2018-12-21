$(function(){
	var dataNum = location.search.substr(1);
	$('.centerList .col-md-1').eq(dataNum).css({
		background : '#e80064',
		color : '#fff'
	});
	(function(){
		//加载头部，底部，返回顶部导航
		$('#navHeader').load('homepage.html .navHeader');
		$('#footerBottom').load('homepage.html .footerBottom');
		$('#goTop').load('homepage.html .goTop',function(){
			$('body').append('<script src="js/homepage.js"></script>');
		});
	})();
	(function(){
		var swiper1 = new Swiper('#swiper4', {
			loop : true,
			autoplay: 5000,
			parallax : true,
			observer : true,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
			pagination : '.swiper-pagination',
			paginationClickable :true,
			paginationType : 'custom',
			paginationCustomRender: function (swiper, current, total) {
				var str = ''
				for(var i = 1;i <= total;i ++){
					if(i == current)
						str += '<span class="item cur"></span>'
					else
						str += '<span class="item"></span>'
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
	})();
	(function(){		
		function aaa(a){
			$.ajax({
				url:"js/productCenter.json",
				success : function(res){
					var str='';
					var data = res[dataNum].slice(0,a*6);
					var num=Math.ceil(res[dataNum].length/6);
					if(a == num){
						$('.centerItemBottom').hide();
					}
					str+='<div class="row">';
					data.forEach(function(o,i){
						str+=`<div class="col-md-4">
					  	<a href="${o.href}"><div class="box">
					  		<div class="img">
					  			<img src="${o.src}"/>
					  		</div>
					  		<div class="title">
					  			<h4>${o.title}</h4>
					  		</div>
					  		<div class="centent">
					  			${o.text}
					  		</div>
					  	</div></div></a>`
					})
					str+='</div>';
					$('.centerItem').html(str);
				}
			});		
		}
		var bbb = 0;
		aaa( ++ bbb);
		//点击加载6张图片，加载完消失
		$('.centerItemBottom').click(function(){
			aaa( ++ bbb);
			
		})
	})();
});