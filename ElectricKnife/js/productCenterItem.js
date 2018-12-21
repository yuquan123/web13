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
		var loca_search = location.search.substr(1);
		$.ajax({
			url:"js/productCenterItem.json",
			success : function(res){
					$('.super-box').append(`
					<div class="container topNav">
				<div class="fix">
					<a href="productCenterItem.html?${parseInt(loca_search)==0?1:parseInt(loca_search)-1}">
						<div class="fix-left"></div>
						<p>上一款</p>
						<span class="text">${res[loca_search].item1}</span>
					</a>
				    <a href="productCenterItem.html?${parseInt(loca_search)==77?76:parseInt(loca_search)+ 1}">
				    	<div class="fix-right"></div>
				    	<p style="text-align: right;">下一款</p>
				    	<span class="text">${res[loca_search].item2}</span>
				    </a>
				</div>
				 <div class="col-md-2"></div>
				 <div class="col-md-8">
				 	<div class="bigBox">
					 	<div class="bigImg">
					 		<div class="list">
					 			<img src="${res[loca_search].item3}" alt="" />
					 		</div>
					 		<div class="list">
					 			<img src="${res[loca_search].item4}" alt="" />
					 		</div>
					 		<div class="list">
					 			<img src="${res[loca_search].item5}" alt="" />
					 		</div>
					 		<div class="list">
					 			<img src="${res[loca_search].item6}" alt="" />
					 		</div>
					 		<div class="list">
					 			<img src="${res[loca_search].item7}" alt="" />
					 		</div>
					 	</div>
					 	<div class="smallImg">
					 		<div class="item cur">
					 			<img src="${res[loca_search].item8}" alt="" />
					 		</div>
					 		<div class="item">
					 			<img src="${res[loca_search].item9}" alt="" />
					 		</div>
					 		<div class="item">
					 			<img src="${res[loca_search].item10}" alt="" />
					 		</div>
					 		<div class="item">
					 			<img src="${res[loca_search].item11}" alt="" />
					 		</div>
					 		<div class="item">
					 			<img src="${res[loca_search].item12}" alt="" />
					 		</div>
					 	</div>
					</div> 	
				 </div>
				 <div class="col-md-2"></div>
			</div>
			<div class="topNavBot">
				<div class="container ">
					<h2>${res[loca_search].item13}</h2>
					<p><span>${res[loca_search].item14}</span></p>
					<div class="row center">
					  <div class="col-md-1">
					  	<p>整车尺寸：</p>
					  	<p>电机：</p>
					  	<p>前刹车：</p>
					  </div>
					  <div class="col-md-2">
					  	<span>${res[loca_search].item15}</span>
					  	<span>${res[loca_search].item16}</span>
					  	<span>${res[loca_search].item17}</span>
					  </div>
					  <div class="col-md-1">
					  	<p>踏板档距：</p>
					  	<p>控制器：</p>
					  	<p>后刹车：</p>
					  </div>
					   <div class="col-md-2">
					  	<span>${res[loca_search].item18}</span>
						<span>${res[loca_search].item19}</span>
						<span>${res[loca_search].item20}</span>
					  </div>
					  <div class="col-md-1">
					  	<p>电池：</p>
					  	<p>前减震：</p>
					  	<p>轮胎：</p>
					  </div>
					  <div class="col-md-2">
					  	<span>${res[loca_search].item21}</span>
					  	<span>${res[loca_search].item22}</span>
					  	<span>${res[loca_search].item23}</span>
					  </div>
					  <div class="col-md-1">
					  	<p>充电器：</p>
					  	<p>后减震：</p>
					  </div>
					  <div class="col-md-2">
					  	<span>${res[loca_search].item24}</span>
					  	<span>${res[loca_search].item25}</span>
					  </div>
					</div>
					<div class="row">
					  <div class="col-md-5">
					  	<div class="bigPic">
					  		<div class="purchase">
					  			<img src="img/icon_121.png"/>
					  			京东购买
					  		</div>
					  		<div class="purchase">
					  			<img src="img/icon_122.png"/>
					  			天猫购买
					  		</div>
					  		<div class="purchase yellow">
					  			<img src="img/icon_123.png"/>
					  			正品专卖
					  		</div>
					  		<div class="purchase yellow">
					  			<img src="img/icon_124.png"/>
					  			配件订购
					  		</div>
					  	</div>
					  </div>
					  <div class="col-md-2">
					  	<div class="smallPic">
					  		<a href="" title="分享到腾讯微博" class="share qqmb"></a>
					  		<a href="" title="分享到QQ空间" class="share qqzone"></a>
					  		<a href="" title="分享到朋友网" class="share qqxiaoyou"></a>
					  		<a href="" title="分享到新浪微博" class="share qqmbsinam"></a>
					  		<a href="" title="分享到人人网" class="share renren"></a>
					  		<a href="" title="分享到网易微博" class="share net"></a>
					  	</div>
					  </div>
					</div>
				</div>
			</div>
			<div class="container topnavtwo">
				<h3>${res[loca_search].item26}</h3>
				<p>${res[loca_search].item27}</p>
				<p>${res[loca_search].item28}</p>
			</div>
			<div class="wow fadeInUp topnavthree" data-wow-duration=".5s" data-wow-delay=".2s">
				<img src="${res[loca_search].item29}"/>
			</div>
			<div class="topnavfour">
				<div class="container">
					<div class="row">
						<div class="col-md-6 wow fadeInLeftBig" data-wow-duration="1.8s">
							<img src="${res[loca_search].item30}" alt="" />
						</div>
						<div class="col-md-5 col-md-offset-1 wow fadeInRightBig rightText" data-wow-duration=".8s">						
								<div class="title">${res[loca_search].item31}</div>
								<p>${res[loca_search].item32}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="wow fadeInUp topnavfive" data-wow-duration=".5s" data-wow-delay=".2s">
				<img src="${res[loca_search].item33}"/>
			</div>
			<div class="topnavsix">
				<div class="container">
					<div class="row">
						<div class="col-md-5 wow fadeInLeftBig LeftText" data-wow-duration=".8s">						
								<div class="title">${res[loca_search].item34}</div>
								<p>${res[loca_search].item35}</p>
						</div>
						<div class="col-md-6 col-md-offset-1 wow fadeInRightBig rightPic" data-wow-duration="1.8s">
							<img src="${res[loca_search].item36}" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div class="wow fadeInUp topnavfive" data-wow-duration=".5s" data-wow-delay=".2s">
				<img src="${res[loca_search].item37}"/>
			</div>
			<div class="topnavfour">
				<div class="container">
					<div class="row">
						<div class="col-md-6 wow fadeInLeftBig" data-wow-duration="1.8s">
							<img src="${res[loca_search].item38}" alt="" />
						</div>
						<div class="col-md-5 col-md-offset-1 wow fadeInRightBig rightText" data-wow-duration=".8s">						
							<div class="title">${res[loca_search].item39}</div>
							<p>${res[loca_search].item40}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="wow fadeInUp topnavfive" data-wow-duration=".5s" data-wow-delay=".2s">
				<img src="${res[loca_search].item41}"/>
			</div>
			<div class="topnavsix">
				<div class="container">
					<div class="row">
						<div class="col-md-5 wow fadeInLeftBig LeftText" data-wow-duration=".8s">						
								<div class="title">${res[loca_search].item42}</div>
								<p>${res[loca_search].item43}</p>
						</div>
						<div class="col-md-6 col-md-offset-1 wow fadeInRightBig rightPic" data-wow-duration="1.8s">
							<img src="${res[loca_search].item44}" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div class="wow fadeInUp topnavfive" data-wow-duration=".5s" data-wow-delay=".2s">
				<img src="${res[loca_search].item45}"/>
			</div>
			<div class="topnavfour">
				<div class="container">
					<div class="row">
						<div class="col-md-6 wow fadeInLeftBig" data-wow-duration="1.8s">
							<img src="${res[loca_search].item46}" alt="" />
						</div>
						<div class="col-md-5 col-md-offset-1 wow fadeInRightBig rightText" data-wow-duration=".8s">						
							<div class="title">${res[loca_search].item47}</div>
							<p>${res[loca_search].item48}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="wow fadeInUp topnavfive" data-wow-duration=".5s" data-wow-delay=".2s">
				<img src="${res[loca_search].item49}"/>
			</div>
			<div class="topnavsix">
				<div class="container">
					<div class="row">
						<div class="col-md-5 wow fadeInLeftBig LeftText" data-wow-duration=".8s">						
								<div class="title">${res[loca_search].item50}</div>
								<p>${res[loca_search].item51}</p>
						</div>
						<div class="col-md-6 col-md-offset-1 wow fadeInRightBig rightPic" data-wow-duration="1.8s">
							<img src="${res[loca_search].item52}" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div class="wow fadeInUp topnavfive" data-wow-duration=".5s" data-wow-delay=".2s">
				<img src="${res[loca_search].item53}"/>
			</div>
			<div class="topnavsix">
				<div class="container">
					<div class="row">
						<div class="col-md-5 wow fadeInLeftBig LeftText" data-wow-duration=".8s">						
								<div class="title">${res[loca_search].item54}</div>
								<p>${res[loca_search].item55}</p>
						</div>
						<div class="col-md-6 col-md-offset-1 wow fadeInRightBig rightPic" data-wow-duration="1.8s">
							<img src="${res[loca_search].item56}" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div class="container wow fadeInUp kong"></div>
			<div class="container wow fadeInUp xuanx">
				<div class="xuanmain">
					<div><a href="">上一款：<span>${res[loca_search].item57}</span> </a></div>
					<div><a href="">下一款：<span>${res[loca_search].item58}</span></a></div>
				</div>	
			</div>	
				`)
				$('.topNav .bigBox .smallImg .item').mouseenter(function(){
					$(this).addClass('cur').siblings().removeClass('cur');
					$('.topNav .bigBox .bigImg .list').eq($(this).index()).show().siblings().hide();
				})
				
			}
		});
		
	})();
})
