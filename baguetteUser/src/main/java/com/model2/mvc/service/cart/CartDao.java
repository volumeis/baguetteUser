package com.model2.mvc.service.cart;

import java.util.List;

import com.model2.mvc.service.domain.Cart;


//==> BreadDao관리에서 CRUD 추상화/캡슐화한 DAO Interface Definition
public interface CartDao {
	
//	// INSERT
	public void addCart(Cart cart) throws Exception ;

	// SELECT ONE

	public Cart getCart(Cart cart) throws Exception;
	// SELECT LIST
	public List<Cart> getCartList(int customerNo) throws Exception ;

	public void delCart(int cartNo) throws Exception;
	
//	// UPDATE
//	public void updateUser(User user) throws Exception ;
//	
//	// 게시판 Page 처리를 위한 전체Row(totalCount)  return
//	public int getTotalCount(Search search) throws Exception ;
	
}