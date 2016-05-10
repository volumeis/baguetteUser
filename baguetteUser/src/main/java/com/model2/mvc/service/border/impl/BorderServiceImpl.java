package com.model2.mvc.service.border.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.model2.mvc.service.border.BorderDao;
import com.model2.mvc.service.border.BorderService;
import com.model2.mvc.service.domain.Border;

//==> 회원관리 서비스 구현
@Service("borderServiceImpl")
public class BorderServiceImpl implements BorderService{
	
	///Field
	@Autowired
	@Qualifier("borderDaoImpl")
	private BorderDao borderDao;
	public void setBorderDao(BorderDao breadDao) {
		this.borderDao = breadDao;
	}
	
	///Constructor
	public BorderServiceImpl() {
		System.out.println(this.getClass());
	}

//	///Method
	public void addBorder(Border border) throws Exception {
		borderDao.addBorder(border);
	}

	public Border getBorder(int ono) throws Exception {
		return borderDao.getBorder(ono);
	}

	public Map<String , Object > getBorderList(Border border) throws Exception {
		List<Border> list= borderDao.getBorderList(border);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("list", list );
		
		return map;
	}
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