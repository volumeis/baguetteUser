package com.model2.mvc.service.store.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.model2.mvc.service.domain.Store;
import com.model2.mvc.service.store.StoreDao;


//==> 가게관리 DAO CRUD 구현
@Repository("storeDaoImpl")
public class StoreDaoImpl implements StoreDao{
	
	///Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	///Constructor
	public StoreDaoImpl() {
		System.out.println(this.getClass());
	}

	///Method
//	public void addUser(User user) throws Exception {
//		sqlSession.insert("UserMapper.addUser", user);
//	}
	@Override
	public Store getStore(int storeNo) throws Exception {
		return sqlSession.selectOne("StoreMapper.getStore", storeNo);
	}
	@Override
	public Store getStore(String storeName) throws Exception {
//		return sqlSession.selectOne("StoreMapper.getStore", storeName);
		return null;
	}
//	
//	public void updateUser(User user) throws Exception {
//		sqlSession.update("UserMapper.updateUser", user);
//	}
//
//	public List<User> getUserList(Search search) throws Exception {
//		return sqlSession.selectList("UserMapper.getUserList", search);
//	}
//
	@Override
	public List<Store> getStoreList(String address) throws Exception {
		return sqlSession.selectList("StoreMapper.getStoreList", address);
	}
//	// 게시판 Page 처리를 위한 전체 Row(totalCount)  return
//	public int getTotalCount(Search search) throws Exception {
//		return sqlSession.selectOne("UserMapper.getTotalCount", search);
//	}





}