var hotelDetailVue = hotelDetailVue || {}
hotelDetailVue = {
		hDetail_body: x=>{
			return '<style>'+
			'.modal{'+
			'    display: grid;'+
			'/*      grid-template-columns: 20% 1fr; */'+
			'        grid-template-rows: 100px 630px;'+
			'        width: 50%'+
			'        height: 100%'+
			'        border: 1px solid black; '+
			'        text-align: center;'+
			'}'+
			'.detail{}'+
			'.title{'+
			'      width: inherit;'+
			'    height: 100%; '+
			'    text-align: center;'+
			'    float: left;'+
			'  border: 1px solid #bcbcbc; '+
			'    }'+
			'.head{'+
			'/*             display: grid;'+
			'grid-template-columns: 20% 1fr;'+
			'        grid-template-rows: 100px 630px; */'+
			'    display:inline-flex;'+
			'     width: 100%;'+
			'    height: 10%;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.main{'+
			'    display:inline-flex;'+
			'     width: 100%;'+
			'    height: 90%;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.content{'+
			'     display:inline-table;'+
			'     width: 100%;'+
			'    height: 100%;'+
			'   /*  float: left; */'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.con{'+
			'      width: inherit;'+
			'    height: 100%; '+
			'    text-align: center;'+
			'    float: left;'+
			'  border: 1px solid #bcbcbc;   '+
			'}'+
			
			'	.container{'+
			'		/* display: grid; */'+
			'		grid-template-columns: 0% 1fr;'+
			'		/* grid-template-rows: 50px 500px 50px; */'+
			'		height: 100%'+
			'		border: 1px solid #bcbcbc; '+
			'		grid-template-areas: '+
			'		"header header"'+
			'		"side main"'+
			'		"footer footer"}'+
			'	.header{'+
			'		grid-area: header;'+
			'		margin: 0 auto;'+
			'		border: 1px solid #bcbcbc; '+
			'	}'+
			'		.main{'+
			'		grid-area: main;'+
			'		display: grid;'+
			'		grid-template-rows: 300px 500px 500px;'+
			'		border: 1px solid #bcbcbc; '+
			'	}'+
			
			'.main1 {'+
			
			'	background-repeat: no-repeat;'+
			'	  background-attachment: fixed;'+
			'  background-size: 100% 100%;'+
			'          font-weight: bold;'+
			'          text-align: center;'+
			'        background-color: rgba(255);'+
			'	border: 1px solid #bcbcbc;} ;'+
			'	.main2 {'+
			'	background-repeat: no-repeat;'+
			'	  background-attachment: fixed;'+
			'  background-size: 100% 100%;	'+
			'          font-weight: bold;'+
			'          text-align: center;'+
			'        background-color: #ffffff;'+
			'        opacity: 0.9;'+
			'	border: 1px solid #bcbcbc; '+
			'	}'+
			'	.main3 {'+
			'	background-repeat: no-repeat;'+
			'	  background-attachment: fixed;'+
			'  background-size: 100% 100%;'+
			'        font-weight: bold;'+
			'          text-align: center;'+
			'        background-color: #ffffff;'+
			'        opacity: 0.9;'+
			'	border: 1px solid #bcbcbc; '+
			'	}'+
/*			'.main_common1{'+
			'background-image: url(https://images.trvl-media.com/hotels/11000000/10560000/10554500/10554498/623758b9.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium);'+
			'	background-repeat: no-repeat;'+
			' 	  background-attachment: fixed; '+
			'  background-size: 100% 100%;'+
			'    display:inline-table;'+
			'    float: left;'+
			'    width: 700px;'+
			'    height: 300px;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+*/
			'.main_common2{'+
			'    display:inline-table;'+
			'    float: left;'+
			'    width: 430px;'+
			'    height: 300px;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.main_common3{'+
			'    width: 100%;'+
			'    height: 100px;'+
			'    border: 1px solid #bcbcbc;'+
			'    margin-bottom: auto 0;'+
			'}'+
			'.calendar-container{'+
			'	 width: 100%;'+
			'    height: 100%;'+
			'}'+
			'.content1{'+
			'	grid-area: main3;'+
			'	display: grid;'+
			'	grid-template-rows: 250px 250px'+
			'    width: 50px;'+
			'    height: 50px;'+ 
			'}'+
			'.content2{'+
			'	border: 1px solid black; '+
			'    height: 250px; '+
			'}'+
			'.inner {'+
		/*	'	background-image: url(https://image.goodchoice.kr/resize_370x220/affiliate/2019/11/19/5dd3a0ef3a514.jpg);'+*/
			'	background-repeat: no-repeat;'+
			'/* 	  background-attachment: fixed; */'+
			'  background-size: 100% 100%;'+
			'    display:inline-table;'+
			'     width: 50%;'+
			'    height: 100%;'+
			'    float: left;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.inner2 {'+
			/*	'	background-image: url(https://image.goodchoice.kr/resize_370x220/affiliate/2019/11/19/5dd3a0ef3a514.jpg);'+*/
				'	background-repeat: no-repeat;'+
				'/* 	  background-attachment: fixed; */'+
				'  background-size: 100% 100%;'+
				'    display:inline-table;'+
				'     width: 50%;'+
				'    height: 100%;'+
				'    float: left;'+
				'    border: 1px solid #bcbcbc; '+
				'}'+
			'.content3{'+
			'	grid-area: main_2 main_common2;'+
			'	width: 100%;   '+
			'    height: 100px;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'#star_grade a{'+
			'        text-decoration: none;'+
			'        color: gray;'+
			'    }'+
			'    #star_grade a.on{'+
			'        color: red;'+
			'    }'+
			'#comments{  border: 1px solid #bcbcbc;}'+
			'</style>'+
			'<body>'+
			'	<div class="container">'+
			'		<div class="header">'+
			'   <div class="main">'+
			'      <div class="main1" id="main1">'+

			'    </div>'+
			

			
			'		<div class="main3" id="main3" style="height:850px;">'+
/*			'				<div class="content2">'+
			'				 <div class="inner"></div>'+
			'				<div class="inner2">'
			'				 <button id="hPaygo" type="button"   onclick="location.href="/reservation?adcno=2&amp;ano=61931&amp;armgno=239371&amp;checkin_type=2&amp;checkin_date=2019-12-26&amp;checkout_date=2019-12-27";" class="gra_left_right_red" style="background-color: red;border-radius: 10px;font-size: xx-large;"> 예약</button>'+
			'				 </div>'+
			'				 </div>'+*/
			'    </div>'+

			'</div>'
			'		</div>'+
			'		</div>'+
			'	</div>'+
			'</body>'
		}
}