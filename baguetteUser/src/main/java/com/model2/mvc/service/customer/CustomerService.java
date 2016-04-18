package com.model2.mvc.service.customer;

import com.model2.mvc.service.domain.Customer;


//==> 회원관리에서 서비스할 내용 추상화/캡슐화한 Service  Interface Definition  
public interface CustomerService {
	
//	// 회원가입
	public void addCustomer(Customer customer) throws Exception;
	
	// 내정보확인 / 로그인
	public Customer getCustomer(String customerTel) throws Exception;
	
//	// 회원정보리스트 
//	public Map<String , Object> getUserList(Search search) throws Exception;
//	
//	// 회원정보수정
//	public void updateUser(User user) throws Exception;
//	
//	// 회원 ID 중복 확인
//	public boolean checkDuplication(String userId) throws Exception;
	
}