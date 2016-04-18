package com.model2.mvc.web.customer;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.model2.mvc.service.bread.BreadService;
import com.model2.mvc.service.customer.CustomerService;
import com.model2.mvc.service.domain.Customer;


//==> Customer관리 Controller
@Controller
@RequestMapping("/bread/*")
public class BreadContorller {
	
	///Field
	@Autowired
	@Qualifier("breadServiceImpl")
	private BreadService breadService;

	public BreadContorller(){
		System.out.println(this.getClass());
	}
	
	//===========================================
	//===========================================
	
	//===========================================
	//===========================================
	
	
}