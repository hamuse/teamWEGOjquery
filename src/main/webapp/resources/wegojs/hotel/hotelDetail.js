"use strict"
var hotelDetail = hotelDetail || {}
hotelDetail = (()=>{
	const WHEN_ERR = '호출하는 hotelDetail js를 찾을 수 없습니다 .'
	        let context, js;
	        let routerjs;
	        let mainVuejs, hotelMainVuejs, hotelHomejs,hotelComparejs, hotelPayjs;
	        let init=()=>{
	            context = $.ctx()
	            js = $.js()
	            routerjs = js+'/cmm/router.js'
	          	mainVuejs = js+'/vue/mainVue.js'
	          	hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
	          	hotelHomejs = js+'/hotel/hotelHome.js'
	          	hotelComparejs = js+'/hotel/hotelCompare.js'
	          	hotelPayjs = js + '/hotel/hotelPay.js'
	        }
	        let onCreate=()=>{
	        	init();
	        	$.when(
	                    $.getScript(mainVuejs),
	                    $.getScript(routerjs),
	                    $.getScript(hotelHomejs),
	                    $.getScript(hotelComparejs),
	                    $.getScript(hotelPayjs)
	               
	        	).done(()=>{
	                setContentView()
	                gpa()
	                compare()
	                roomList()
	        	}).fail(()=>{
	        		alert(WHEN_ERR)
	        	})
	        }
	        let setContentView=()=>{ 	
	            let x = {css:$.css(),img:$.img()}
	    		$('#mainbody').html(hotelDetailVue.hDetail_body(x))
	    		 $('html').scrollTop(0);
	        }
	    	let hotelComparego=()=>{
	    		$('#detailgo').click(e=>{
	    			e.preventDefault()
	    		})
	    	}

	    	let gpa = ()=>{
				$('#star_grade a').click(function(){
		            $(this).parent().children("a").removeClass("on");  
		            $(this).addClass("on").prevAll("a").addClass("on"); 
		            return false;
		        })
			}
	    	let compare=()=>{
	    		$('#btn_cancel').click(e=>{
					e.preventDefault()
				})
				$('#add_file').click(e=>{
					e.preventDefault()
					alert('>>>> ')
					const modal = document.getElementById("myModal");
					modal.style.display = "block";
				})
	    	}
	    	 let heart=()=>{
	    			$('#heart1').on("click",function(e) {
	    				var $this = $(this);
	    			$this.find(">img").attr("src", function(index, attr) {
	    				if(attr.match('beforeheart')){
	    					return attr.replace("beforeheart.png","afterheart.png")
	    				}else {
	    					return attr.replace("afterheart.png", "beforeheart.png")
	    				}
	    			})
	    			})
	    		}
	    	 
	    	let roomList=x=>{
	    		$('#mainbody').html(hotelDetailVue.hDetail_body(x))
	    		 $('html').scrollTop(0);
	    		
	    		context = $.ctx()
	    		$.getJSON(context+'/hotel/roomlist/', d=>{
	    			let r = d.room
	    			let i = x-1
	   
	    			console.log(r)
	    			$(	' <div class="main_1 main_common1" style="background-repeat: no-repeat; background-attachment: fixed; background-size: 100% 100%; display:inline-table;  float: left; width: 700px; height: 300px; border: 1px solid #bcbcbc; >'+
	    					'          <p class="content"><img src="'+r[i].hotelimg+'"/></p>'+
	    					'        </div>'+
	    					'          <div class="main_2 main_common2"  style= display:inline-table; float: left; width: 430px; height: 300px;  border: 1px solid #bcbcbc; >'+
	    					'            <div class="content3">'+r[i].hotelname+'</div>'+
	    					'            <div class="content3">'+r[i].haddr+'</div>'+
	    					'          <div class="content3">지도</div>'+
	    					'          </div>').appendTo('#main1')
	    				
	    						$('				<div class="content2">'+
	    					'				 <div class="inner" style="background-image: url('+r[i].roomimg+');"></div>'+
	    					'				<div class="inner2">'+
	    					'				<h2>'+r[i].roomtype+'</h2>'+
	    					'				<h2>'+r[i].price+'원</h2>'+	
	    					'				 <button id="hPaygo" type="button"   onclick="location.href="/reservation?adcno=2&amp;ano=61931&amp;armgno=239371&amp;checkin_type=2&amp;checkin_date=2019-12-26&amp;checkout_date=2019-12-27";" class="gra_left_right_red" style="background-color: red;border-radius: 10px;font-size: xx-large;"> 예약</button>'+
	    					'				 </div>'+
	    					'				 </div>').appendTo('#main3')
	    					$('#hPaygo').click(e=>{
	    			e.preventDefault()
	    			hotelPay.onCreate()

	    			
	    		})
	    		
	    					
	    					
	    		})
	    		
	    	}
	        return{onCreate, roomList}
})();