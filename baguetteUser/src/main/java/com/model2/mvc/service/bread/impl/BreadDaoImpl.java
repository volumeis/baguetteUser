package com.model2.mvc.service.bread.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.model2.mvc.service.bread.BreadDao;
import com.model2.mvc.service.domain.Bread;


//==> 회원관리 DAO CRUD 구현
@Repository("breadDaoImpl")
public class BreadDaoImpl implements BreadDao{
	
	///Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	///Constructor
	public BreadDaoImpl() {
		System.out.println(this.getClass());
	}

	///Method
//	public void addUser(User user) throws Exception {
//		sqlSession.insert("UserMapper.addUser", user);
//	}

	public Bread getBread(int breadNo) throws Exception {
		Bread bread = sqlSession.selectOne("BreadMapper.getBread", breadNo);
		System.out.println(bread);
		return bread;
	}

	public List<Bread> getBreadList(int storeNo) throws Exception {
	return sqlSession.selectList("BreadMapper.getBreadList", storeNo);
	}	
	
//	public void updateUser(User user) throws Exception {
//		sqlSession.update("UserMapper.updateUser", user);
//	}
//

//
//	// 게시판 Page 처리를 위한 전체 Row(totalCount)  return
//	public int getTotalCount(Search search) throws Exception {
//		return sqlSession.selectOne("UserMapper.getTotalCount", search);
//	}
}