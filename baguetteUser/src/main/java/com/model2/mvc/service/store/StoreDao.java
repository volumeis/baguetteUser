package com.model2.mvc.service.store;

import java.util.List;

import com.model2.mvc.service.domain.Store;


//==> StoreDao관리에서 CRUD 추상화/캡슐화한 DAO Interface Definition
public interface StoreDao {
	
//	// INSERT
//	public void addUser(User user) throws Exception ;

	// SELECT ONE
	public Store getStoreByNo(int storeNo) throws Exception ;
	public Store getStoreByName(String storeName) throws Exception ;

	// SELECT LIST
	public List<Store> getStoreList(String address) throws Exception ;
	public List<Store> getStoreListShort(String address) throws Exception ;
//
//	// UPDATE
//	public void updateUser(User user) throws Exception ;
//	
//	// 게시판 Page 처리를 위한 전체Row(totalCount)  return
//	public int getTotalCount(Search search) throws Exception ;
	
}