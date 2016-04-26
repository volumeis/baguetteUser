package com.model2.mvc.service.domain;

import java.util.Date;

import com.model2.mvc.service.domain.Bread;
//==>빵정보 모델링(추상화/캡슐화)한 Bean
public class Cart {
	
	///Field
	
	private int breadNo;// 빵 기본키
	private int buyQty;			// 빵 구매 수량
	private int customerNo;	// 빵 구매 고객정보
	private Date pickDate; // 장바구니 담은날
	/*private String name;	// 빵 이름
	private int price;		// 빵 가격
	private String img;	// 빵 이미지주소
*/	
	private Bread breadDesc;
	
	public Cart() {
	}

	public int getBreadNo() {
		return breadNo;
	}

	public void setBreadNo(int breadNo) {
		this.breadNo = breadNo;
	}

//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public int getPrice() {
//		return price;
//	}
//
//	public void setPrice(int price) {
//		this.price = price;
//	}
//
//	public String getImg() {
//		return img;
//	}
//
//	public void setImg(String img) {
//		this.img = img;
//	}

	public int getBuyQty() {
		return buyQty;
	}

	public void setBuyQty(int buyQty) {
		this.buyQty = buyQty;
	}

	public Date getPickDate() {
		return pickDate;
	}

	public void setPickDate(Date pickDate) {
		this.pickDate = pickDate;
	}

	public int getCustomerNo() {
		return customerNo;
	}

	public void setCustomerNo(int customerNo) {
		this.customerNo = customerNo;
	}

	public Bread getBreaddesc() {
		return breadDesc;
	}

	public void setBreaddesc(Bread breaddesc) {
		this.breadDesc = breaddesc;
	}
	


	
	
}