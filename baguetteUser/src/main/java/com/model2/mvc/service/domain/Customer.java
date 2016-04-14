package com.model2.mvc.service.domain;

//==>회원정보를 모델링(추상화/캡슐화)한 Bean
public class Customer {
	
	///Field
	// private String customerNo; //db에서만 쓰이는 기본키
	private String customerTel; //전화번호
	private String password;	//비밀번호
	
	public Customer() {
	}
	
	public String getCustomerTel() {
		return customerTel;
	}
	public void setCustomerTel(String customerTel) {
		this.customerTel = customerTel;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "Customer [customerTel=" + customerTel + ", password=" + password + "]";
	}
}