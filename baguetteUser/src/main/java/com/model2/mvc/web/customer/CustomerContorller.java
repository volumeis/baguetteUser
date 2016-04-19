package com.model2.mvc.web.customer;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.model2.mvc.service.customer.CustomerService;
import com.model2.mvc.service.domain.Customer;

//==> Customer관리 Controller
@Controller
@RequestMapping("/customer/*")
public class CustomerContorller {

	/// Field
	@Autowired
	@Qualifier("customerServiceImpl")
	private CustomerService customerService;

	public CustomerContorller() {
		System.out.println(this.getClass());
	}

	@RequestMapping(value = "jsonLogin", method = RequestMethod.POST)
	public void jsonLogin(@RequestBody Customer customer, HttpSession session, Model model) throws Exception {

		System.out.println("/customer/jsonLogin : POST");
		// Business Logic
		System.out.println("::" + customer);
		Customer dbUser = customerService.getCustomer(customer.getCustomerTel());

		if (dbUser != null && customer.getPassword().equals(dbUser.getPassword())) {

			model.addAttribute("customer", dbUser);
		} else {
			model.addAttribute("customer", null);
		}
	}

	@RequestMapping(value = "addCustomer", method = RequestMethod.POST)
	public void addCustomer( @ModelAttribute("customer") Customer customer) throws Exception {

		System.out.println("/customer/addCustomer : POST");

		customerService.addCustomer(customer);
	}

	// ===========================================
	// ===========================================
	@RequestMapping(value = "getCustomer", method = RequestMethod.GET)
	public void getCustomer(@RequestParam("customerTel") String customerTel, Model model) throws Exception {

		System.out.println("/user/getUser : GET");
		// Business Logic
		Customer customer = customerService.getCustomer(customerTel);
		// Model 과 View 연결
		model.addAttribute("customer", customer);

	}

	@RequestMapping(value = "getJsonCustomer/{customerTel}", method = RequestMethod.GET)
	public void getJsonCustomer(@PathVariable String customerTel, HttpSession ssesion, Model model) throws Exception {
		System.out.println("/getJsonCustomer/getUser : GET" + customerTel);
		// Business Logic
		Customer customer = customerService.getCustomer(customerTel);

		System.out.println();
		// Model 과 View 연결
		model.addAttribute("customer", customer);
	}

	// ===========================================
	// ===========================================
/*	@RequestMapping(value = "checkDuplication", method = RequestMethod.POST)
	public void checkDuplication(@RequestParam("customerTel") String customerTel, Model model) throws Exception {

		System.out.println("/customer/checkDuplication : POST");
		// Business Logic
		boolean result = customerService.checkDuplication(customerTel);
		// Model 과 View 연결
		model.addAttribute("result", new Boolean(result));
		model.addAttribute("customer", customerTel);

	}*/

}