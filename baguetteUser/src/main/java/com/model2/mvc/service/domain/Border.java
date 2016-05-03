package com.model2.mvc.service.domain;

import java.util.Date;

//==>빵정보 모델링(추상화/캡슐화)한 Bean
public class Border {

	/// Field
	private int oqty;// 주문량
	private int ono; // 빵주문 일련번호
	private String otran; // 주문상태
	private Date odate; // 주문일
   	private int customerNo; // 고객번호
	private String or_chk; // 리뷰여부
    private int breadNo;
    private String name;
    private int price;
    private String img;
    private int sno; // 가게번호
    
	public int getOqty() {
		return oqty;
	}
	public void setOqty(int oqty) {
		this.oqty = oqty;
	}
	public int getOno() {
		return ono;
	}
	public void setOno(int ono) {
		this.ono = ono;
	}
	public String getOtran() {
		return otran;
	}
	public void setOtran(String otran) {
		this.otran = otran;
	}
	public Date getOdate() {
		return odate;
	}
	public void setOdate(Date odate) {
		this.odate = odate;
	}
	public int getCustomerNo() {
		return customerNo;
	}
	public void setCustomerNo(int customerNo) {
		this.customerNo = customerNo;
	}
	public String getOr_chk() {
		return or_chk;
	}
	public void setOr_chk(String or_chk) {
		this.or_chk = or_chk;
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
	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	
	@Override
	public String toString() {
		return "Border [oqty=" + oqty + ", ono=" + ono + ", otran=" + otran + ", odate=" + odate + ", customerNo="
				+ customerNo + ", or_chk=" + or_chk + ", breadNo=" + breadNo + ", name=" + name + ", price=" + price
				+ ", img=" + img + ", sno=" + sno + "]";
	}
	
}