package com.model2.mvc.service.border.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.model2.mvc.service.border.BorderDao;
import com.model2.mvc.service.domain.Border;

//==> 회원관리 DAO CRUD 구현
@Repository("borderDaoImpl")
public class BorderDaoImpl implements BorderDao{
	
	///Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	///Constructor
	public BorderDaoImpl() {
		System.out.println(this.getClass());
	}

	///Method
	public void addBorder(Border border) throws Exception {
		sqlSession.insert("BoderMapper.addBorder", border);
		}

    public Border getBorder(int ono) throws Exception {
		Border border = sqlSession.selectOne("BorderMapper.getBorder", ono);
		System.out.println(border);
		return border;
	}

	public List<Border> getBorderList(int customerNo) throws Exception {
	return sqlSession.selectList("BorderMapper.getBorderList", customerNo);
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