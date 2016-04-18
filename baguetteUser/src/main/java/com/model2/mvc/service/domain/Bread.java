package com.model2.mvc.service.domain;

//==>빵정보 모델링(추상화/캡슐화)한 Bean
public class Bread {
	
	///Field
	
	private int breadNo;// 빵 기본키
	private String name;	// 빵 이름
	private int price;		// 빵 가격
	private String desc;	// 빵 설명
	private String img;	// 빵 이미지주소
	private int qty;			// 빵 남은 수량
	private int storeNo;	// 스토어 사업자번호
	
	public Bread() {
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

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public int getStoreNo() {
		return storeNo;
	}

	public void setStoreNo(int storeNo) {
		this.storeNo = storeNo;
	}

	@Override
	public String toString() {
		return "Bread [breadNo=" + breadNo + ", name=" + name + ", price=" + price + ", desc=" + desc + ", img=" + img
				+ ", qty=" + qty + ", storeNo=" + storeNo + "]";
	}
	
	
}