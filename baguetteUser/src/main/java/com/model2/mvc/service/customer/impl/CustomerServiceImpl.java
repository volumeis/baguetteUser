package com.model2.mvc.service.customer.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.model2.mvc.service.customer.CustomerDao;
import com.model2.mvc.service.customer.CustomerService;
import com.model2.mvc.service.domain.Customer;


//==> 회원관리 서비스 구현
@Service("customerServiceImpl")
public class CustomerServiceImpl implements CustomerService{
	
	///Field
	@Autowired
	@Qualifier("customerDaoImpl")
	private CustomerDao customerDao;
	public void setCustomerDao(CustomerDao customerDao) {
		this.customerDao = customerDao;
	}
	
	///Constructor
	public CustomerServiceImpl() {
		System.out.println(this.getClass());
	}

//	///Method
//	public void addUser(User user) throws Exception {
//		userDao.addUser(user);
//	}
	@Override
	public void addCustomer(Customer customer) throws Exception {
		customerDao.addCustomer(customer);
	}

	public Customer getCustomer(String customerTel) throws Exception {
		return customerDao.getCustomer(customerTel);
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