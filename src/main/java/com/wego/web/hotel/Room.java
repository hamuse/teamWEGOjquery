package com.wego.web.hotel;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@NoArgsConstructor
@Lazy
public class Room {
	private String rseq, roomimg,roomtype, hotelname, hotelimg, haddr;
	private int price;
	public Room(String roomtype, String roomimg, int price, String hotelname, String hotelimg, String haddr) {
		this.roomtype=roomtype;
		this.roomimg=roomimg;
		this.price=price;
		this.hotelname=hotelname;
		this.hotelimg=hotelimg;
		this.haddr=haddr;
	}
}