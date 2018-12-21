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
		var loca_search = location.search.substr(1);
		$.ajax({
			url:"js/serviceSupportItem.json",
			success : function(res){
				$('.serveItemBox').append(`
					<div class="container">
						<h2>${res[loca_search].title}</h2>
						<ul>
							<li><img src="img/icon_18.png"/>时间：<span>${res[loca_search].time}</span></li>
						</ul>
						<div class="box">
							<p>${res[loca_search].one}</p>
							<div class="title">${res[loca_search].item1}</div>
							<p>${res[loca_search].item11}</p>
							<p>${res[loca_search].item11}</p>
							<div class="title">${res[loca_search].item2}</div>
							<p>${res[loca_search].item21}</p>
							<div class="title">${res[loca_search].item3}</div>
							<p>${res[loca_search].item31}</p>
							<div class="title">${res[loca_search].item4}</div>
							<p>${res[loca_search].item41}</p>
							<p>${res[loca_search].item42}</p>
						</div>
						<div class="bottom">
							<a href="serviceSupportItem.html?${parseInt(loca_search)==0?0:parseInt(loca_search)-1}"><div class="prave">上一项：<span>${res[loca_search].item5}</span></div></a>
							<a href="serviceSupportItem.html?${parseInt(loca_search)==3?3:parseInt(loca_search)+ 1}"><div class="next">下一项: <span>${res[loca_search].item6}</span></div></a>
						</div>
					</div>	
				`)
			}
		});
	})();
})