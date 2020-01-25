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
public class Comments {
	private String uid, comments;
	private double rating;
	public Comments(String comments, String uid, double rating){
		this.comments = comments;
		this.uid = uid;
		this.rating = rating;
	}
}
