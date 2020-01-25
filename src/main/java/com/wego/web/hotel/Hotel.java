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
public class Hotel {		
	private String hseq, hotelname, hotelimg, hid,  uname, haddr,indate,outdate;
	private double rating;
	private int price;
	
	 public Hotel(String hotelname, String uname, String hid, String hotelimg,String haddr, double rating, int price) { 
	  this.hotelname = hotelname;
	  this.price =price;
	  this.rating = rating; 
	  this.haddr =haddr;
      this.hid = hid;
	  this.uname = uname;
	  this.hotelimg = hotelimg;
	  
	  }
	 


	
}