package com.model2.mvc.web.customer;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpRequest;
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

	/**
	 * Login 구현 구현내용 : 로그인 후 세션에 아이디와 비밀번호저장 작성자 : 서형섭, 송은영 작성일 : 04.20.16
	 * 
	 * @param customer
	 *            요청받은 로그인정보
	 * @param session
	 *            저장되는 세션
	 * @param model
	 *            전송되는 값.
	 * @throws Exception
	 */
	@RequestMapping(value = "jsonLogin", method = RequestMethod.POST)
	public void jsonLogin(@RequestBody Customer reqCustomer, HttpSession session, Model model) throws Exception {

		System.out.println("/customer/jsonLogin : POST");
		// Business Logic
		System.out.println("::" + reqCustomer);
		Customer customer = customerService.getCustomer(reqCustomer.getCustomerTel());

		if (customer != null && reqCustomer.getPassword().equals(customer.getPassword())) {
			session.setAttribute("customer", customer);
			model.addAttribute("customer", customer);
		} else {
			model.addAttribute("customer", null);
		}
		System.out.println("login [customer] :  : " + customer);
	}

	/**
	 * Login 구현 구현내용 : 세션에 담긴 값을 토대로 로그인여부 확인 작성자 : 유민호 작성일 : 04.20.16
	 * 
	 * @param session
	 *            세션에 저장된 값 확
	 * @param model
	 *            전송되는 값.
	 * @throws Exception
	 */
	@RequestMapping(value = "loginCheck", method = RequestMethod.POST)
	public void jsonLoginCheck(HttpSession session, Model model) throws Exception {
		System.out.println("/customer/loginCheck : POST");
		Customer customer = (Customer) session.getAttribute("customer");
		/**
		 * 페이지에 바로 접근시 디폴트 유저 cNo 1001,010-1234-1234,1234 로 세션정보 저장 민호 04.26.16
		 */
		if (session.getAttribute("customer") == null) {
			Customer testCustomer = customerService.getCustomer("testCtel");

			session.setAttribute("customer", testCustomer);
			model.addAttribute("customer", testCustomer);
			System.out.println("loginCheck [customer] :  : " + testCustomer);
		} else {
			System.out.println("loginCheck [customer] :  : " + customer);
			model.addAttribute("customer", customer);
		}
	}

	// ===========================================
	@RequestMapping(value = "getCode", method = RequestMethod.POST)
	public void addCustomer(@RequestBody Customer reqCustomer, HttpSession session, Model model) throws Exception {
		System.out.println("/customer/getCode : POST");
		String joinPhone = reqCustomer.getCustomerTel().replace("-", "");
		Random random = new Random();
		int joinCode = random.nextInt(10000);

		session.setAttribute("joinPhone", joinPhone);
		session.setAttribute("joinCode", joinCode);
		
		System.out.println("" + joinPhone + " : " + joinCode);
		HttpClient httpClient = new DefaultHttpClient();
		String url = "http://http://java78bit404.iptime.org:30025/joinController/sendSms?phone=" + joinPhone + "&rannum=" + joinCode;
		HttpGet httpGet = new HttpGet(url);
		httpGet.setHeader("Accept", "application/json");
		httpGet.setHeader("Content-Type", "application/json");
		HttpResponse httpResponse = httpClient.execute(httpGet);
		// ==> Response InputStream 
		InputStream is = httpResponse.getEntity().getContent();
		BufferedReader br = new BufferedReader(new InputStreamReader(is, "UTF-8"));

		System.out.println("[ Server Data ] ");
		String serverData = br.readLine();
		System.out.println(serverData);
	}

	@RequestMapping(value = "addCustomer", method = RequestMethod.POST)
	public void addCustomer(@ModelAttribute("customer") Customer customer, Model model) throws Exception {
		System.out.println("/customer/addCustomer : POST");
		customerService.addCustomer(customer);
		System.out.println("addCustomer : " + customer);
		model.addAttribute("customer", customer);
	}

	// ===========================================
	@RequestMapping(value = "getCustomer", method = RequestMethod.GET)
	public void getCustomer(@RequestParam("customerTel") String customerTel, Model model) throws Exception {

		System.out.println("/customer/getCustomer : GET");
		// Business Logic
		Customer customer = customerService.getCustomer(customerTel);
		// Model 과 View 연결
		System.out.println("getCustomer : " + customer);
		model.addAttribute("customer", customer);

	}

	@RequestMapping(value = "logout", method = RequestMethod.GET)
	public void logout( HttpSession session) throws Exception {
         
		System.out.println("/customer/logout : get");
		
		session.removeAttribute("customer");
	   
	    System.out.println("logout [customer] : "+ (Customer)session.getAttribute("customer"));
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
}