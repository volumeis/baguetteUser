package com.model2.mvc.service.store.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.model2.mvc.service.domain.Customer;
import com.model2.mvc.service.domain.Store;
import com.model2.mvc.service.store.StoreDao;
import com.model2.mvc.service.store.StoreService;


//==> 회원관리 서비스 구현
@Service("storeServiceImpl")
public class StoreServiceImpl implements StoreService{
	
	///Field
	@Autowired
	@Qualifier("storeDaoImpl")
	private StoreDao storeDao;
	public void setCustomerDao(StoreDao customerDao) {
		this.storeDao = customerDao;
	}
	
	///Constructor
	public StoreServiceImpl() {
		System.out.println(this.getClass());
	}

//	///Method
//	public void addUser(User user) throws Exception {
//		userDao.addUser(user);
//	}

	@Override
	public Store getStoreByNo(int storeNo) throws Exception {
		return storeDao.getStoreByNo(storeNo);
	}
	@Override
	public Store getStoreByName(String storeName) throws Exception {
		return storeDao.getStoreByName(storeName);
	}

	@Override
	public Map<String, Object> getStoreList(String address) throws Exception {
		List<Store> list = storeDao.getStoreList(address);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("list", list);
		map.put("size", list.size());
		return map;
	}
	
	@Override
	public Map<String, Object> getStoreListShort(String address) throws Exception {
		List<Store> list = storeDao.getStoreListShort(address);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("list", list);
		map.put("size", list.size());
		return map;
	}



//	public Map<String , Object > getUserList(Search search) throws Exception {
//		List<User> list= userDao.getUserList(search);
//		int totalCount = userDao.getTotalCount(search);
//		
//		Map<String, Object> map = new HashMap<String, Object>();
//		map.put("list", list );
//		map.put("totalCount", new Integer(totalCount));
//		
//		return map;
//	}
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