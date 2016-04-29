package com.model2.mvc.service.cart;

import java.util.Map;

import com.model2.mvc.service.domain.Cart;


//==> 회원관리에서 서비스할 내용 추상화/캡슐화한 Service  Interface Definition  
public interface CartService {
	
	//빵 카트에 추가
	public void addCart(Cart cart) throws Exception;
	
	public Cart getCart(Cart cart) throws Exception;
	// 빵정보확인
	public Map<String, Object> getCartList(int customerNo) throws Exception ;
	
	// 카트삭제
	public void delCart(int cartNo) throws Exception;
   
	public void deleteCart(int customerNo) throws Exception;
	
	//	// 회원정보리스트 

	// 카트 수정
	public void updateCart(Cart cart) throws Exception ;
	//	// 회원정보리스트 
	//public Map<String , Object> getBreadList(int storeNo) throws Exception;
//	
//	// 회원정보수정
//	public void updateUser(User user) throws Exception;
//	
//	// 회원 ID 중복 확인
//	public boolean checkDuplication(String userId) throws Exception;
	
}