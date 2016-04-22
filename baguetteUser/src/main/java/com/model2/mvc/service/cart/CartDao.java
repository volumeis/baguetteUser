package com.model2.mvc.service.cart;

import com.model2.mvc.service.domain.Cart;


//==> BreadDao관리에서 CRUD 추상화/캡슐화한 DAO Interface Definition
public interface CartDao {
	
//	// INSERT
	public void addCart(Cart cart) throws Exception ;

	// SELECT ONE
	public Cart getCart(int customerNo) throws Exception ;

//	// SELECT LIST
//	public List<Bread> getBreadList(int storeNo) throws Exception ;
//
//	// UPDATE
//	public void updateUser(User user) throws Exception ;
//	
//	// 게시판 Page 처리를 위한 전체Row(totalCount)  return
//	public int getTotalCount(Search search) throws Exception ;
	
}