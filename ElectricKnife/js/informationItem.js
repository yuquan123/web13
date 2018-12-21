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
			url:"js/informationItem.json",
			success : function(res){
				$('.bigBox').append(`
					<div class="title">
						<div class="container">
							<h2>${res[loca_search].item1}</h2>
							<div class="time"><img src="img/icon_18.png"/>${res[loca_search].item2}</div>
						</div>
					</div>
					<div class="mains wow fadeInUp">
						<div class="container">
							<div class="line">${res[loca_search].item3}</div>
							<div class="line">${res[loca_search].item4}</div>
							<p><span>${res[loca_search].item5}</span></p>
							<p><span>${res[loca_search].item6}</span></p>
							<p>${res[loca_search].item7}</p>
							<p>${res[loca_search].item8}</p>
							<p>${res[loca_search].item9}</p>
							<p>${res[loca_search].item10}</p>
							<img src="${res[loca_search].item11}" alt="" />
							<div class="line1"><span>${res[loca_search].item12}</span></div>
							<p>${res[loca_search].item13}</p>
							<p>${res[loca_search].item14}</p>
							<p>${res[loca_search].item15}</p>
							<p>${res[loca_search].item16}</p>
							<p>${res[loca_search].item17}</p>
							<img src="${res[loca_search].item18}" alt="" />
							<div class="line">${res[loca_search].item19}</div>
							<p><span>${res[loca_search].item20}</span></p>
							<p>${res[loca_search].item21}</p>
							<p>${res[loca_search].item22}</p>
							<p>${res[loca_search].item23}</p>
							<p>${res[loca_search].item24}</p>
							<div class="line">${res[loca_search].item25}</div>
							<img src="${res[loca_search].item26}" alt="" />
							<div class="line">${res[loca_search].item27}</div>
							<img src="${res[loca_search].item28}" alt="" />
							<p>${res[loca_search].item29}</p>
							<img src="${res[loca_search].item30}" alt="" />
							<div class="line">${res[loca_search].item31}</div>
							<p><span>${res[loca_search].item32}</span></p>
							<p>${res[loca_search].item33}</p>
							<p>${res[loca_search].item34}</p>
							<p>${res[loca_search].item35}</p>
							<p>${res[loca_search].item36}</p>
							<img src="${res[loca_search].item37}" alt="" />
							<div class="line1"><span>${res[loca_search].item38}</span></div>
							<p>${res[loca_search].item39}</p>
							<p>${res[loca_search].item40}</p>
							<div class="line">${res[loca_search].item41}</div>
							<img src="${res[loca_search].item42}" alt="" />
						</div>
						<div class="container">
							<div class="btoBox">
							<a href="informationItem.html?${parseInt(loca_search)==0?0:parseInt(loca_search)-1}">
								<div class="preve">上一款：${res[loca_search].item43}</div>
							</a>	
							<a href="informationItem.html?${parseInt(loca_search)==18?18:parseInt(loca_search)+1}">	
								<div class="next">下一款：${res[loca_search].item44}</div>
							</a>	
							</div>
						</div>
					</div>
				`)
			}
		});
	})();
})
