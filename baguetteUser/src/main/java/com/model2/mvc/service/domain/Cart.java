package com.model2.mvc.service.domain;

import java.util.Date;

//==>빵정보 모델링(추상화/캡슐화)한 Bean
public class Cart {
	
	///Field
	
	private int breadNo;// 빵 기본키
	private String name;	// 빵 이름
	private int price;		// 빵 가격
	private String img;	// 빵 이미지주소
	private int buyQty;			// 빵 구매수량
	private int storeNo;	// 스토어 사업자번호
	private Date pickDate; // 장바구니 담은날
	
	public Cart() {
	}

	public int getBreadNo() {
		return breadNo;
	}

	public void setBreadNo(int breadNo) {
		this.breadNo = breadNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public int getBuyQty() {
		return buyQty;
	}

	public void setBuyQty(int buyQty) {
		this.buyQty = buyQty;
	}

	public int getStoreNo() {
		return storeNo;
	}

	public void setStoreNo(int storeNo) {
		this.storeNo = storeNo;
	}

	public Date getPickDate() {
		return pickDate;
	}

	public void setPickDate(Date pickDate) {
		this.pickDate = pickDate;
	}

	@Override
	public String toString() {
		return "Cart [breadNo=" + breadNo + ", name=" + name + ", price=" + price + ", img=" + img + ", buyQty="
				+ buyQty + ", storeNo=" + storeNo + ", pickDate=" + pickDate + "]";
	}
	
}