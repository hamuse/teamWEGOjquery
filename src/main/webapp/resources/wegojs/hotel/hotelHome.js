"use strict"
var hotelHome = hotelHome || {}
hotelHome = (()=>{
	const WHEN_ERR = '호출하는 hotelHome js를 찾을 수 없습니다 .'
	let context, js, routerjs, hotelMainVuejs, mainVuejs,hotelDetailjs;
	let init =()=>{
		context = $.ctx()
		js = $.js()
        routerjs = js+'/cmm/router.js'
      	mainVuejs = js+'/vue/mainVue.js'
      	hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
      	hotelDetailjs = js+'/hotel/hotelDetail.js'
	}
	let onCreate=()=>{
		init();
		$.when(
			$.getScript(mainVuejs),
			$.getScript(routerjs),
			$.getScript(hotelDetailjs),
			$.getScript(hotelMainVuejs)
		).done(()=>{
			setContentView()
			hotelList({pageNo: 1 })
			datepicker()
			hotelTableCreate()
			
			
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
        let x = {css:$.css(),img:$.img()}	
		$('#mainbody').html(hotelMainVue.hmain_body())
		 $('html').scrollTop(0);	
	}

    let hotelList=x=>{
    	$.getJSON(context+'/hotel/list/'+x.pageNo, d=>{
    		let h = d.hotel
    		console.log(d.hotel)
    		$.each(h, (i,j)=>{
    			$('<div class="col-lg-6 col-md-6">  '+
    					'	<div class="single_place"> '+
    					'		<img src="'+j.hotelimg+'" alt="" style="min-inline-size:-webkit-fill-available">  '+
    					'		<div class="hover_Text d-flex align-items-end justify-content-between"> '+
    					'			<div class="hover_text_iner"> '+
    					'			 <a id="id'+j.hseq+'" href="#" class="place_btn"><img src="'+j.hotelimg+'" alt=""></a> <h3>'+j.hotelname+'</h3> '+
    					'			 <p>'+j.haddr+'</p>  '+
    					'			 <div class="place_review">   '+
    					'			 	<a href="#"><i class="fas fa-star"></i></a> '+
    					'			 		<a href="#"><i class="fas fa-star"></i></a> '+
    					'			 	<a href="#"><i class="fas fa-star"></i></a>  '+
    					'			 	<a href="#"><i class="fas fa-star"></i></a>   '+
    					'			 	<a href="#"><i class="fas fa-star"></i></a>  '+
    					'			 	<span>'+j.rating+'</span></div></div> '+
    					'			 	<div class="details_icon text-right"> <h3>'+j.price+'원</h3></div></div></div></div>')
    					.appendTo('#hotelList')
    					$('#id'+j.hseq).click(e=>{
        		e.preventDefault()
        		hotelDetail.roomList(j.hseq)
        	})
    		})
    	})
    }

    let datepicker=()=>{
    	const input1 = document.getElementById('datepicker1');
    	const input2 = document.getElementById('datepicker2');
    	const datepicker1 = new TheDatepicker.Datepicker(input1);
    	const datepicker2 = new TheDatepicker.Datepicker(input2);
    	datepicker1.render();
    	datepicker2.render();
    }
    let hotelTableCreate=()=>{
		$('#tablebtn').click(e=>{
			e.preventDefault()
			/* $.getJSON(context+'/hotel/create/hoteltable/',d=>{
				alert("hoteltable성공:"+d.msg)
				//hotel table 생성
			}) */
			/*   $.getJSON(context+'/hotel/insert/hotelDB/',d=>{
				alert("성공:"+d.msg)
				//hotel db 생성
			})  */
			/*      $.getJSON(context+'/hotel/create/roomtable/',d=>{
				alert("roomtable성공:"+d.msg)
				//room table 생성
			})  */
			    $.getJSON(context+'/hotel/insert/roomdb/',d=>{
				alert("성공:"+d.msg)
				
			})
		/*	$.getJSON(context+'/hotel/create/commentstable/',d=>{
				alert("commentstable 성공:"+d.msg) })*/
				
			/*	$.getJSON(context+'/hotel/insert/commentsDB/',d=>{
				alert("commentsDB 성공:"+d.msg) })*/
			
		})
	}
    
	return{onCreate}
		
})();
