package com.wego.web.hotel;

public enum SQL {
	CREATE_HOTEL,CREATE_ROOM, CREATE_COMMENTS;
	
	@Override
	public String toString() {
		String result = "";
		switch (this) {


		case CREATE_HOTEL:
			result = "CREATE TABLE HOTEL"
					+ "(HSEQ INT(30) PRIMARY KEY AUTO_INCREMENT,"
					+ "HOTELNAME VARCHAR(30),"
					+ "UNAME VARCHAR(30),"
					+ "RATING DOUBLE,"
					+ "HID VARCHAR(30),"
					+ "PRICE INT,"
					+ "INDATE VARCHAR(30),"
					+ "OUTDATE VARCHAR(30),"
					+ "HOTELIMG VARCHAR(500),"
					+ "HADDR VARCHAR(50))";  
			break;
		case CREATE_ROOM:
			result = "CREATE TABLE ROOM"
					+ "(RSEQ INT(30) PRIMARY KEY AUTO_INCREMENT,"
					+ "ROOMTYPE VARCHAR(50),"
					+ "ROOMIMG VARCHAR(500),"
					+ "PRICE INT,"
					+ "HOTELNAME VARCHAR(30),"
					+ "HOTELIMG VARCHAR(500),"
					+ "HADDR VARCHAR(50))";
			break;	
		case CREATE_COMMENTS:
			result = "CREATE TABLE COMMENTS"
					+"(COMMENTS_SEQ INT(30) PRIMARY KEY AUTO_INCREMENT,"
					+ "COMMENTS VARCHAR(500),"
					+ "RATING DOUBLE,"
					+ "UID VARCHAR(30))";
		}
		return result;
	}  
}