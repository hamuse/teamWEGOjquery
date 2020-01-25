package com.wego.web.hotel;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface HotelMapper {
	public void createHotel(HashMap<String, String> paramMap);
	public void createRoom(HashMap<String, String> paramMap);
	public void createComments(HashMap<String, String> paramMap);
	public void insertHotel(Hotel param);
	public void insertRoom(Room param);
	public void insertComments(Comments param);
	public int countHotel();
	public List<Hotel> hotellist(HotelProxy pxy);
	public List<Room> roomlist(RoomProxy pxy);
	public List<Hotel> allhotellist();
	
	
}