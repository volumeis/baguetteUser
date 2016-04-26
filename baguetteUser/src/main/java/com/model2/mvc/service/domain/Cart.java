package com.model2.mvc.service.domain;

import java.util.Date;

import com.model2.mvc.service.domain.Bread;
//==>빵정보 모델링(추상화/캡슐화)한 Bean
public class Cart {
	
	///Field
	
	private int cartNo;
	private int breadNo;		// 빵 기본키
	private int buyQty;			// 빵 구매 수량
	private int customerNo;	// 빵 구매 고객정보
	private Date pickDate; 		// 장바구니 담은날
	private Bread breadDesc;
	
	public Cart() {
	}

	public int getBreadNo() {
		return breadNo;
	}

	public void setBreadNo(int breadNo) {
		this.breadNo = breadNo;
	}

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

	public int getCartNo() {
		return cartNo;
	}

	public void setCartNo(int cartNo) {
		this.cartNo = cartNo;
	}

	public Bread getBreadDesc() {
		return breadDesc;
	}

	public void setBreadDesc(Bread breadDesc) {
		this.breadDesc = breadDesc;
	}

	@Override
	public String toString() {
		return "Cart [cartNo=" + cartNo + ", breadNo=" + breadNo + ", buyQty=" + buyQty + ", customerNo=" + customerNo
				+ ", pickDate=" + pickDate + ", breadDesc=" + breadDesc + "]";
	}
	
}