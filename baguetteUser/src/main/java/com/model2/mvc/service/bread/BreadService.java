package com.model2.mvc.service.bread;

import java.util.Map;

import com.model2.mvc.service.domain.Bread;


//==> 회원관리에서 서비스할 내용 추상화/캡슐화한 Service  Interface Definition  
public interface BreadService {
	
//	// 회원가입
//	public void addUser(User user) throws Exception;
	
	// 빵정보확인
	public Bread getBread(int breadNo) throws Exception ;
	
//	// 회원정보리스트 
	public Map<String , Object> getBreadList(int storeNo) throws Exception;
//	
//	// 회원정보수정
//	public void updateUser(User user) throws Exception;
//	
//	// 회원 ID 중복 확인
//	public boolean checkDuplication(String userId) throws Exception;
	
}