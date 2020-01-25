package com.wego.web.hotel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import lombok.Data;

@Data
@Component
public class RoomProxy {
	@Autowired HotelMapper hotelMapper;
	

	public List<String> roomimgList() {
		List<String> roomimg = Arrays.asList("https://image.goodchoice.kr/resize_370x220/affiliate/2016/05/23/57427066030b2.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/12/06/584623540866a.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/08/5938fe71bd97d.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/08/5938fe71bd97d.jpg",
				"https://exp.cdn-hotels.com/hotels/2000000/1530000/1528600/1528555/187bddf0_b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/01/592fbbde76887.jpg",
				"https://exp.cdn-hotels.com/hotels/40000000/39760000/39757400/39757330/86df6c02_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/01b38d28_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/03a00032_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/700c36bb_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/98f72664_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f8b790d0_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f6ad45fc_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/34000000/33070000/33064700/33064680/976cbcbd_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/fa820e75_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/d650a32c_b.jpg");
		
		return roomimg;
	}


	public List<String> roomtypeList() {
		List<String> roomtype = Arrays.asList("스튜디오 더블", 
				"스튜디오 트윈", 
				"원베드 디럭스", 
				"투베드 디럭스",
				"스튜디오,퀸사이즈침대 1개",
				"스튜디오,싱글침대 2개",
				"베이직룸",
				"aloft,룸,킹사이즈침대 1개,시내 전망",
				"aloft,룸,싱글침대 2개,시내 전망",
				"패밀리룸",
				"Quad Room",
				"스탠다드룸",
				"디럭스룸",
				"공용 도미토리,여성 전용",
				"공용 도미토리2,여성 전용",
				"시티룸,퀸사이즈침대 1개",
				"스탠다드룸,금연",
				"4인 도미토리");
		
		return roomtype;
	}

	public List<Integer> priceList(){
		List<Integer> price = Arrays.asList(93397,47273,95000,52364,90909,36091,40909,53273,45455,
				63636,59091,160000,52728,61322,49587,36364,35455,36364);
		
		return price;
		
	}
	public List<String> hotelnameList() {
		List<String> hotelname = Arrays.asList("호텔 카푸치노","알로프트 서울 강남","프레이저 플레이스",
				"더리센츠 호텔","골든호텔","카라쉬 호텔","케니스토리","호텔 크레센도","호텔 데님",
				"호텔 선샤인 서울","호텔 포레힐","라비타 호텔","메이플레이스","호텔 파비아","아벤트리 호텔","크라운 호텔","호텔 페이토","호텔 아트리움");
		
		return hotelname;
	}
	public List<String> hotelimgList(){
		List<String> hotelimg = Arrays.asList("https://image.goodchoice.kr/resize_1000X500x0/affiliate/2018/02/20/5a8bd16270015.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2017/05/12/59155dd18fd3b.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/23/57427066030b2.jpg",//
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/60449/0/5cf9fa5002ed3.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2019/11/20/5dd4d28239794.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/57843/0/5d6cc2fc934bc.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743b380cbe43.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2019/10/17/5da8243dcefbd.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743fc4cd44d8.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/23/57425f4e7f400.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/51149/0/5b472ee80c5ef.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/21/573ffda182be0.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/46392/0/592f4601e1fb3.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2019/07/16/5d2d628cede99.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/20/573ebadaddeed.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2018/10/31/5bd96e0371c77.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/6244/0/574e49a02aef8.jpg");
		
		return hotelimg;
		
	}
	public List<String> haddrList(){
		List<String> haddr = Arrays.asList("서울 강남구 봉은사로 155", 
				"서울 강남구 영동대로 736", 
				"서울 중구 통일로 78 프레이저플레이스", 
				"연남로7길 24-11,마포구,서울특별시,121867,대한민국",
				"종로구 필운대로 27-5,서울특별시,03039,대한민국",
				"강남구 논현로159길 22,서울특별시,06018,대한민국",
				"중구 퇴계로24길 13-8,서울특별시,04629,대한민국",
				"독막로9길 43,서울특별시,121-895,대한민국",
				"서초구 동광로 49,서울특별시,06561,대한민국",
				"마포구 와우산로29가길 12,서울특별시,04053,대한민국",
				"서교동 331-18 성우빌딩 4층,마포구,서울특별시,대한민국",
				"영동대로 736,강남구,서울특별시,135-957,대한민국",
				"중구 통일로 78,서울특별시,대한민국",
				"원미구 심곡동 139-14,부천시,경기도,420-822,대한민국",
				"효원로235번길 38,팔달구,수원시,경기도,442-834,대한민국",
				"부평구 시장로12번길 31,부평구,인천광역시,21395,대한민국",
				"상면 수목원로 333,사과꽃향기 펜션,가평군,경기도,12448,대한민국",
				"동대문구 회기로29길 5,191-20,서울특별시,02445,대한민국");
		
		return haddr;
		
	}
	 public List<Room> roomDB() {
		 Room room= null;
		 List<Room> roomList = new ArrayList<>();
		 for(int i = 0 ; i<roomtypeList().size();i++) {
			 room = new Room(roomtypeList().get(i), roomimgList().get(i), priceList().get(i), hotelnameList().get(i), hotelimgList().get(i), haddrList().get(i));
			 roomList.add(room);
			
		 }
		 
	  return roomList;
	 }
	 
		@Transactional
		public void insertRoomDB() {
			 List<Room> rList = roomDB();
			for(int i=0;i<rList.size();i++) {
				hotelMapper.insertRoom(rList.get(i));
			}
		
		}
	 
}