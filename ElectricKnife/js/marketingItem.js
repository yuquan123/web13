homepage$(function(){
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
		wow = new WOW({
		 　　animateClass: 'animated'
		 });
		 wow.init();
	})();
	(function(){
		var loca_search = location.search.substr(1);
		$.ajax({
			url:"js/marketingItem.json",
			success : function(res){
				console.log(res)
				$('.bigBox .centerBox').append(`<div>
						<h2>${res[loca_search].item1}</h2>
						<div class="top"><span class="left"><img src="img/icon_18.png"/></span><span>${res[loca_search].item2}</span></div>
						<div class="container center wow fadeInUp">
							<p>${res[loca_search].item3}</p>
							<p>${res[loca_search].item4}</p>
							<p>${res[loca_search].item5}</p>
							<div class="row">
								<div class="col-md-6"><img src="${res[loca_search].item6}"/></div>
								<div class="col-md-6"><img src="${res[loca_search].item7}"/></div>
							</div>
							<div class="row"><img src="${res[loca_search].item24}"/></div>
							<p>${res[loca_search].item8}</p>
							<p>${res[loca_search].item9}</p>
							<p>${res[loca_search].item10}</p>
							<p>${res[loca_search].item11}</p>
							<div class="row">
								<div class="col-md-6"><img src="${res[loca_search].item12}"/></div>
								<div class="col-md-6"><img src="${res[loca_search].item13}"/></div>
							</div>
							<p>${res[loca_search].item14}</p>
							<p>${res[loca_search].item15}</p>
							<p>${res[loca_search].item16}</p>
							<p>${res[loca_search].item17}</p>
							<p>${res[loca_search].item20}</p>
							<p>${res[loca_search].item21}</p>
							<p>${res[loca_search].item22}</p>
							<p>${res[loca_search].item23}</p>
						</div>
						<div class="botom">
							<a href="http://127.0.0.1:8020/Electric%20knife/marketingItem.html?${res[loca_search].item25}"><div class="shang">上一款：<span>${res[loca_search].item18}</span></div></a>
							<a href="http://127.0.0.1:8020/Electric%20knife/marketingItem.html?${res[loca_search].item26}"><div class="xia">下一款：<span>${res[loca_search].item19}</span></div></a>
						</div>
					</div>`)
			}
		});
	})();
})