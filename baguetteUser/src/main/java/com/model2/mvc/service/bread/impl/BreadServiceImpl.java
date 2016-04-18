package com.model2.mvc.service.bread.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.model2.mvc.service.bread.BreadDao;
import com.model2.mvc.service.bread.BreadService;
import com.model2.mvc.service.domain.Bread;


//==> 회원관리 서비스 구현
@Service("breadServiceImpl")
public class BreadServiceImpl implements BreadService{
	
	///Field
	@Autowired
	@Qualifier("breadDaoImpl")
	private BreadDao breadDao;
	public void setBreadDao(BreadDao breadDao) {
		this.breadDao = breadDao;
	}
	
	///Constructor
	public BreadServiceImpl() {
		System.out.println(this.getClass());
	}

//	///Method
//	public void addUser(User user) throws Exception {
//		userDao.addUser(user);
//	}

	public Bread getBread(int breadNo) throws Exception {
		return breadDao.getBread(breadNo);
	}
//
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