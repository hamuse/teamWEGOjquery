var hotelEndVue = hotelEndVue || {}
hotelEndVue = {
		hEnd_body: x=>{
			return '<style>'+
			'	.container{		'+
			//'		display: grid;'+
			'/* 		grid-template-columns: 20% 1fr; */'+
			'		grid-template-rows: 100px 630px;'+
			'		width: 50%'+
			'		height: 100%'+
			'		border: 1px solid black; '+
			'		text-align: center;'+
			'				'+
			'}'+

			'</style>'+
			'<body>'+
			'<section class="tour_details_content section_padding">'+
			'        <div class="container">'+
			'            <div class="row justify-content-center">'+
			'                <div class="col-lg-6">'+
			'                    <div class="content_iner">'+
			'                        <h1>예약이 완료되었습니다.</h1>'+
			'                        '+
			'                        <h3>(주)위고를 이용해주셔서 감사합니다.</h3>'+
			'                        <div class="tour_details_content_btn">'+
			'                            <a id="maingo" href="#" class="btn_1">메인으로 돌아가기</a>'+
			'                        </div>'+
			'                    </div>'+
			'                </div>'+
			'            </div>'+
			'        </div>'+
			'    </section>'+
			
			'</body>'
		}
}