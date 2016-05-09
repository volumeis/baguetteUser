package com.model2.mvc.service.border;

import java.util.List;

import com.model2.mvc.service.domain.Border;


//==> BreadDao관리에서 CRUD 추상화/캡슐화한 DAO Interface Definition
public interface BorderDao {
	
//	// INSERT
	public void addBorder(Border border) throws Exception ;

	// SELECT ONE
	public Border getBorder(int ono) throws Exception ;

	// SELECT LIST
	public List<Border> getBorderList(int customerNo) throws Exception ;
//
//	// UPDATE
//	public void updateUser(User user) throws Exception ;
//	
//	// 게시판 Page 처리를 위한 전체Row(totalCount)  return
//	public int getTotalCount(Search search) throws Exception ;
	
}