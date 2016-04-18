package com.model2.mvc.service.bread;

import com.model2.mvc.service.domain.Bread;


//==> BreadDao관리에서 CRUD 추상화/캡슐화한 DAO Interface Definition
public interface BreadDao {
	
//	// INSERT
//	public void addUser(User user) throws Exception ;

	// SELECT ONE
	public Bread getBread(int breadNo) throws Exception ;

//	// SELECT LIST
//	public List<User> getUserList(Search search) throws Exception ;
//
//	// UPDATE
//	public void updateUser(User user) throws Exception ;
//	
//	// 게시판 Page 처리를 위한 전체Row(totalCount)  return
//	public int getTotalCount(Search search) throws Exception ;
	
}