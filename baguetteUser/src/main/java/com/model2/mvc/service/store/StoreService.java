package com.model2.mvc.service.store;

import java.util.List;
import java.util.Map;

import com.model2.mvc.service.domain.Store;


//==> Store에서 서비스할 내용 추상화/캡슐화한 Service  Interface Definition  
public interface StoreService {
	
//	// 회원가입
//	public void addUser(User user) throws Exception;
	
	// 가게정보 확인
	public Store getStoreByNo(int storeNo) throws Exception;
	public Store getStoreByName(String storeName) throws Exception ;
	
	// 가게정보 리스트 
	public Map<String , Object> getStoreList(String address) throws Exception;
	public Map<String , Object> getStoreListShort(String address) throws Exception ;
//	
//	// 회원정보수정
//	public void updateUser(User user) throws Exception;
//	
//	// 회원 ID 중복 확인
//	public boolean checkDuplication(String userId) throws Exception;
	
}