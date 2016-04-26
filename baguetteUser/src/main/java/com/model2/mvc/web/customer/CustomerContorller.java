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

	/** Login 구현
	 * 구현내용 : 로그인 후 세션에 아이디와 비밀번호저장
	 * 작성자 : 서형섭, 송은영
	 * 작성일 : 04.20.16
	 * @param customer 요청받은 로그인정보
	 * @param session 저장되는 세션
	 * @param model 전송되는 값. 
	 * @throws Exception
	 */
	@RequestMapping(value = "jsonLogin", method = RequestMethod.POST)
	public void jsonLogin(@RequestBody Customer reqCustomer, HttpSession session, Model model) throws Exception {

		System.out.println("/customer/jsonLogin : POST");
		// Business Logic
		System.out.println("::" + reqCustomer);
		Customer customer = customerService.getCustomer(reqCustomer.getCustomerTel());
	
		if (customer != null && reqCustomer.getPassword().equals(customer.getPassword())) {
			session.setAttribute("customer",customer );
			model.addAttribute("customer", customer);
		} else {
			model.addAttribute("customer", null);
		}
	}
	
	/** Login 구현
	 * 구현내용 : 세션에 담긴 값을 토대로 로그인여부 확인
	 * 작성자 : 유민호
	 * 작성일 : 04.20.16
	 * @param session	세션에 저장된 값 확
	 * @param model		전송되는 값. 
	 * @throws Exception
	 */
	@RequestMapping(value = "loginCheck", method = RequestMethod.POST)
	public void jsonLoginCheck(HttpSession session, Model model) throws Exception {
		System.out.println("/customer/loginCheck : POST");
		Customer customer = (Customer)session.getAttribute("customer");
		System.out.println("loginCheck" + customer);
		model.addAttribute("customer",customer);
	}
	
	
	@RequestMapping(value = "addCustomer", method = RequestMethod.POST)
	public void addCustomer( @ModelAttribute("customer") Customer customer, Model model) throws Exception {

		System.out.println("/customer/addCustomer : POST");

		customerService.addCustomer(customer);
		
		model.addAttribute("customer", customer);
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

	@RequestMapping( value="logout", method=RequestMethod.GET )
	public void logout(HttpSession session ) throws Exception{
		
		System.out.println("/customer/logout : POST");
		
		session.invalidate();
		
		
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