package com.model2.mvc.service.cart.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.model2.mvc.service.cart.CartDao;
import com.model2.mvc.service.domain.Cart;


//==> 회원관리 DAO CRUD 구현
@Repository("cartDaoImpl")
public class CartDaoImpl implements CartDao{
	
	///Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	///Constructor
	public CartDaoImpl() {
		System.out.println(this.getClass());
	}

	///Method
	public void addCart(Cart cart) throws Exception {
		sqlSession.insert("CartMapper.addCart", cart);
	}
	
	public Cart getCart(Cart cart) throws Exception{
		return sqlSession.selectOne("CartMapper.getCart", cart);
	}
	public List<Cart> getCartList(int customerNo) throws Exception {
		return sqlSession.selectList("CartMapper.getCartList", customerNo);
		}

	
	public void delCart(int cartNo) throws Exception {
		sqlSession.delete("CartMapper.delCart", cartNo);
	}

	public void updateCart(Cart cart) throws Exception {
		sqlSession.update("CartMapper.updateCart",cart);
		
	}

 

public void deleteCart(int customerNo)throws Exception{
	sqlSession.delete("CartMapper.deleteCart", customerNo);    
}
	
	
	//	public List<Bread> getBreadList(int storeNo) throws Exception {
//	return sqlSession.selectList("BreadMapper.getBreadList", storeNo);
//	}	
//	
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