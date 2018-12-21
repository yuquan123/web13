$(function(){
	(function(){
		$('.navHeader .navForm .searchOpen').click(function(){
			$('.navHeader .formFirst').fadeIn();
			$(this).fadeOut();
		});
		$('.navHeader .navForm .searchPut').click(function(){
			$('.navHeader .formFirst').fadeOut();
			$('.navHeader .navForm .searchOpen').fadeIn();
			$('.navHeader .navForm input').val('');
		});
		
		var pHtmlStr = '';
        for(var name in pc){
            pHtmlStr = pHtmlStr + '<option value="' + name + '">'+name+'</option>';
        }
        $(".province").html(pHtmlStr); // 省
        $(".province").change(function(){
            var pname = $(this).val();
            var pHtmlStr = '';
            var cityList = pc[pname];
            for(var index in cityList){
                pHtmlStr = pHtmlStr + '<option>'+cityList[index]+'</option>';
            }
//          $(".city").html(pHtmlStr);
			$(this).parent().siblings().find(".city").html(pHtmlStr);
        });
        $(".province").change();
		$.ajax({
			url:"js/homepage.json",
			success : function(res){
				res.forEach(function(o,i){
					var str = '';
					o.main.forEach(function(a,b){
						str += `<a href="${o.href}">${a}</a>`;
					})
					$('.footerRight').append(`<div class="col-sm-2 footerRightItem"><a href="${o.href}"><h4>${o.title}</h4></a>${str}</div>`);
				})
				
			}
		});
		if($('body,html').scrollTop() <= 600){
			$('.goTop').fadeOut();
		}else{
			$('.goTop').fadeIn();
		};
		$(window).scroll(function(){
			if($('body,html').scrollTop() <= 600){
				$('.goTop').fadeOut();
			}else{
				$('.goTop').fadeIn();
			};
		});	
		$('.goTop').click(function(){
			$('body,html').animate({
				scrollTop : 0
			},1000);
		})
		wow = new WOW({
		 　　animateClass: 'animated'
		 });
		 wow.init();
	})();
})