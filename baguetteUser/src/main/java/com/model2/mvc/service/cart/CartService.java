package com.model2.mvc.service.cart;

import com.model2.mvc.service.domain.Cart;


//==> 회원관리에서 서비스할 내용 추상화/캡슐화한 Service  Interface Definition  
public interface CartService {
	
//	// 회원가입
	public void addCart(Cart cart) throws Exception;
	
	// 빵정보확인
	public Cart getCart(int customerNo) throws Exception ;
	
//	// 회원정보리스트 
	//public Map<String , Object> getBreadList(int storeNo) throws Exception;
//	
//	// 회원정보수정
//	public void updateUser(User user) throws Exception;
//	
//	// 회원 ID 중복 확인
//	public boolean checkDuplication(String userId) throws Exception;
	
}