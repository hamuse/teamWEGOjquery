package com.wego.web.hotel;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wego.web.util.Printer;

@Lazy
@RestController
@RequestMapping("/hotel")
public class HotelController {
	@Autowired
	HotelMapper hotelMapper;
	@Autowired
	HotelProxy hotelProxy;
	@Autowired
	CommentsProxy commentsProxy;
	@Autowired
	RoomProxy roomProxy;
	@Autowired
	pagingProxy pageProxy;
	@Autowired
	Printer printer;

	
	@GetMapping("/create/commentstable/")
	public Map<?, ?> createComments() {
		HashMap<String, String> paramMap = new HashMap<>();
		System.out.println("commentstable");
		paramMap.put("CREATE_COMMENTS", SQL.CREATE_COMMENTS.toString());
		System.out.println("commentstable" + SQL.CREATE_COMMENTS.toString());
		Consumer<HashMap<String, String>> c = t -> hotelMapper.createComments(paramMap);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	
	@GetMapping("/insert/commentsDB/")
	public Map<?, ?> insertcommentsDB() {
		printer.accept("컨트롤러 들어옴");
		HashMap<String, String> paramMap = new HashMap<>();
		commentsProxy.insertCommentsDB();
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	
	@GetMapping("/create/hoteltable/")
	public Map<?, ?> createHotel() {
		HashMap<String, String> paramMap = new HashMap<>();
		System.out.println("hoteltable");
		paramMap.put("CREATE_HOTEL", SQL.CREATE_HOTEL.toString());
		System.out.println("hoteltable" + SQL.CREATE_HOTEL.toString());
		Consumer<HashMap<String, String>> c = t -> hotelMapper.createHotel(paramMap);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@GetMapping("/insert/hotelDB/")
	public Map<?, ?> insertHotelDB() {
		printer.accept("호텔더미 컨트롤러 들어옴");
		HashMap<String, String> paramMap = new HashMap<>();
		hotelProxy.insertHotelDB();
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@GetMapping("/create/roomtable/")
	public Map<?, ?> createRoom() {
		HashMap<String, String> paramMap = new HashMap<>();
		System.out.println("createRoom");
		paramMap.put("CREATE_ROOM", SQL.CREATE_ROOM.toString());
		System.out.println("createRoom" + SQL.CREATE_ROOM.toString());
		Consumer<HashMap<String, String>> c = t -> hotelMapper.createRoom(paramMap);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@GetMapping("/insert/roomdb/")
	public Map<?, ?> insertRoomDB() {
		printer.accept("컨트롤러 들어옴");
		HashMap<String, String> paramMap = new HashMap<>();
		roomProxy.insertRoomDB();
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@GetMapping("/list/{pageNo}")
	public Map<?, ?> hotelList(@PathVariable int pageNo) {
		System.out.println("리스트 컨트롤러");
		HashMap<String, List<Hotel>> map = new HashMap<>();
		pageProxy.setPageNum(pageNo);
		pageProxy.paging();
		//System.out.println(pageNo);
		map.put("hotel", hotelMapper.hotellist(hotelProxy));
		//System.out.println("호텔리스트" + map.get("hotel"));
		return map;
	}
	@GetMapping("/roomlist")
	public Map<?, ?> roomList() {
		System.out.println("룸리스트 컨트롤러");
		HashMap<String, List<Room>> map = new HashMap<>();
		map.put("room", hotelMapper.roomlist(roomProxy));
		
		System.out.println("룸리스트" + map.get("room"));
		
		return map;
	}



}
