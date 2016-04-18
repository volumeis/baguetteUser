package com.model2.mvc.service.store;

import com.model2.mvc.service.domain.Store;


//==> StoreDao관리에서 CRUD 추상화/캡슐화한 DAO Interface Definition
public interface StoreDao {
	
//	// INSERT
//	public void addUser(User user) throws Exception ;

	// SELECT ONE
	public Store getStore(int storeNo) throws Exception ;

//	// SELECT LIST
//	public List<User> getUserList(Search search) throws Exception ;
//
//	// UPDATE
//	public void updateUser(User user) throws Exception ;
//	
//	// 게시판 Page 처리를 위한 전체Row(totalCount)  return
//	public int getTotalCount(Search search) throws Exception ;
	
}