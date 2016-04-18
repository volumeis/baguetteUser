package com.model2.mvc.web.customer;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.model2.mvc.service.customer.CustomerService;
import com.model2.mvc.service.domain.Customer;



//==> Customer관리 Controller
@Controller
@RequestMapping("/customer/*")
public class CustomerContorller {
	
	///Field
	@Autowired
	@Qualifier("customerServiceImpl")
	private CustomerService customerService;

	public CustomerContorller(){
		System.out.println(this.getClass());
	}
	
	@RequestMapping( value="addCustomer", method=RequestMethod.POST )
	public String addUser( @ModelAttribute("customer") Customer customer ) throws Exception {

		System.out.println("/customer/addCustomer : POST");
	
		customerService.addCustomer(customer);
		
		return "redirect:/custoemr/가입.jsp";
	}
	//===========================================
	//===========================================
	@RequestMapping( value="getJsonCustomer/{customerTel}", method=RequestMethod.GET)
	public void getJsonCustomer(	@PathVariable String customerTel,
		HttpSession ssesion,	Model model	) throws Exception{
		System.out.println("/getJsonCustomer/getUser : GET" + customerTel);
		//Business Logic
		Customer customer = customerService.getCustomer(customerTel);
		
		System.out.println();
		// Model 과 View 연결
		model.addAttribute("customer",customer);
	}
	//===========================================
	//===========================================
	@RequestMapping( value="test", method=RequestMethod.GET)
	public String getJsonCustomer() throws Exception{
		System.out.println("/getJsonCustomer/getUser : GET");
		return "/yhh.jsp";
	}
	
}