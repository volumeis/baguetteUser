package com.model2.mvc.service.cart.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.model2.mvc.service.cart.CartDao;
import com.model2.mvc.service.cart.CartService;
import com.model2.mvc.service.domain.Cart;


//==> 회원관리 서비스 구현
@Service("cartServiceImpl")
public class CartServiceImpl implements CartService{
	
	///Field
	@Autowired
	@Qualifier("cartDaoImpl")
	private CartDao cartDao;
	public void setCartDao(CartDao cartDao) {
		this.cartDao = cartDao;
	}
	
	///Constructor
	public CartServiceImpl() {
		System.out.println(this.getClass());
	}

//	///Method
	public void addCart(Cart cart) throws Exception {
		cartDao.addCart(cart);
	}

	public Map<String, Object> getCartList(int customerNo) throws Exception {
		List<Cart> list = cartDao.getCartList(customerNo);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("cartlist", list);
		
		return map;
	}
//
/*	public Map<String , Object > getBreadList(int storeNo) throws Exception {
		List<Bread> list= breadDao.getBreadList(storeNo);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("breadlist", list );
		
		return map;
	}
	*/
//
//	public void updateUser(User user) throws Exception {
//		userDao.updateUser(user);
//	}
//
//	public boolean checkDuplication(String userId) throws Exception {
//		boolean result=true;
//		User user=userDao.getUser(userId);
//		if(user != null) {
//			result=false;
//		}
//		return result;
//	}
}