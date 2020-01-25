var hotelMainVue = hotelMainVue || {}
hotelMainVue = {
		hmain_body: x=>{
			return '<style>'+
			'#datepicker1{'+
			'  color: #fe5c24;'+
			'    border: 1px solid #fe5c24;'+
			'    background: #fff;'+
			'    margin-right: 10px;'+
			'    margin-top: 10px;'+
			'    line-height: 40px;'+
			'    padding: 0 30px;'+
			'    font-size: .8em;'+
			'    text-align: center;  '+
			'}'+
			'#datepicker2{'+
			'  color: #fe5c24;'+
			'    border: 1px solid #fe5c24;'+
			'    background: #fff;'+
			'    margin-right: 10px;'+
			'    margin-top: 10px;'+
			'    line-height: 40px;'+
			'    padding: 0 30px;'+
			'    font-size: .8em;'+
			'    text-align: center;  '+
			'}'+
			'#location{'+
			' color: #fe5c24;'+
			'    border: 1px solid #fe5c24;'+
			'    background: #fff;'+
			'    margin-right: 10px;'+
			'    margin-top: 10px;'+
			'    line-height: 40px;'+
			'    padding: 0 30px;'+
			'    font-size: .8em;'+
			'    text-align: center;	'+
			'	 font-size: x-large'+	
			'}'+
			'   #persons{'+
			' color: #fe5c24;'+
			'    border: 1px solid #fe5c24;'+
			'    background: #fff;'+
			'    margin-right: 10px;'+
			'    margin-top: 10px;'+
			'    line-height: 40px;'+
			'    padding: 0 30px;'+
			'    font-size: .8em;'+
			'    text-align: center;	'+
			'	 font-size: x-large'+	
			'}'+
			'</style>'+
			'<body>'+			
			'    <!-- breadcrumb start-->'+
			'    <section class="breadcrumb breadcrumb_bg">'+
			'        <div class="container">'+
			'            <div class="row">'+
			'                <div class="col-lg-12">'+
			'                    <div class="breadcrumb_iner">'+
			'                        <div class="breadcrumb_iner_item text-center">'+
			'                            <h2>HOTEL</h2>'+
		
			'                        </div>'+
			'                    </div>'+
			'                </div>'+
			'            </div>'+
			'        </div>'+
			'    </section>'+
			'    <!-- breadcrumb start-->'+
			'<div class="container">'+
			'		<div class="header">'+
			'			<select name="select" id="location" >'+
			'				<option value="option1">서울</option>'+
			'				<option value="option2">강릉</option>'+
			'				<option value="option3">경주</option>'+
			'				<option value="option4">부산</option>'+
			'			</select>'+
			'			<select name="select" id="persons" >'+
			'				<option value="option5">1명</option>'+
			'				<option value="option6">2명</option>'+
			'				<option value="option7">3명</option>'+
			'				<option value="option8">4명</option>'+
			'			</select>'+
			
			'</div>'+
			'</section>'+
			'		<div class="calendar-container" style="font-size: 20px;"><span class="time-tab"><label class="in"></label><input type="text" id="datepicker1" placeholder="Check in" class="focus-input show-hightlight" readonly="" value="12월 8일 (일)" data-key="2019/12/08"></span><span class="nights"><span>  /   </span></span><span class="time-tab"><label class="out"></label><input type="text" placeholder="Check out" id="datepicker2" class="focus-input show-hightlight out-time" readonly="" value="12월 9일 (월)" data-key="2019/12/09"><a href="#" class="genric-btn primary radius">Search</a></span></div>'+
			' <button id = "tablebtn">값 넘기기 테스트중</button>'+
			'    <!-- hotel list css start-->'+
			'    <section class="top_place section_padding">'+
			'        <div class="container" >'+

			'            <div class="row" id="hotelList">'+

			'            </div>'+
			'        </div>'+
			'    </section>'+
			'    <!-- hotel list css end -->'+
			'</body>'
		}
}