package com.model2.mvc.web.customer;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;


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


import com.model2.mvc.service.border.BorderService;
import com.model2.mvc.service.cart.CartService;
import com.model2.mvc.service.domain.Border;
import com.model2.mvc.service.domain.Cart;
import com.model2.mvc.service.domain.Customer;



//==> Customer관리 Controller
@Controller
@RequestMapping("/border/*")
public class BorderContorller {
	/// Field
	@Autowired
	@Qualifier("borderServiceImpl")
	private BorderService borderService;

	@Autowired
	@Qualifier("cartServiceImpl")
	private CartService cartService;
	
	
	public BorderContorller() {
		System.out.println(this.getClass());
	}

	@RequestMapping(value = "addBorder/{customerNo}", method = RequestMethod.GET)
	public void addBorder(@PathVariable int customerNo, Model model, HttpSession session) throws Exception {

		System.out.println("/border/addBorder : POST");
		//Customer customer = (Customer) session.getAttribute("customer");
		//int customerNo = customer.getCustomerNo();
		Map<String, Object> map = cartService.getCartList(customerNo);
		
		
		//request.setAttribute("list", map.get("cartlist"));
		List<Cart> list = (List<Cart>)map.get("cartlist");          //request.getAttribute("list");
		Border border[] = new Border[list.size()];
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd", Locale.KOREA);
		Date currentTime = new Date();
		String dTime = formatter.format(currentTime);
		
		DateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date odate = sdFormat.parse(dTime);
	
		for (int i = 0; i < list.size(); i++) {
			    border[i] = new Border();
			
				border[i].setBreadNo(list.get(i).getBreadNo());
				border[i].setOqty(list.get(i).getBuyQty());
				//border[i].setCustomerNo(customerNo);
				//border[i].setOno(i+1);
				border[i].setCustomerNo(customerNo);
				border[i].setOdate(odate);
				border[i].setOtran("주문완료");
				border[i].setOr_chk("no");
			    //border[i].setName(list.get(i).getBreadDesc().getName());
			   // border[i].setImg(list.get(i).getBreadDesc().getImg());
			    //border[i].setPrice(list.get(i).getBreadDesc().getPrice());
			   // border[i].setCustomerTel(customer.getCustomerTel());
			   // border[i].setCustomerTel("testCtel");
			}
			
			for (int j = 0; j < list.size(); j++) {
			System.out.println("비오더"+border[j]);
				borderService.addBorder(border[j]);
			model.addAttribute("border["+j+"]", border[j]);
		}
   
			
	
	}

	// ===========================================
	// ===========================================
	@RequestMapping(value = "getBorder/{ono}", method = RequestMethod.GET)
	public void getBorder(@RequestParam("ono") int ono, Model model) throws Exception {

		System.out.println("/border/getBorder : GET");
		// Business Logic
		Border border = borderService.getBorder(ono);
		// Model 과 View 연결
		model.addAttribute("border", border);

	}

	@RequestMapping(value = "listBorder/{customerNo}", method = RequestMethod.GET)
	public void listBorder(@PathVariable int customerNo, @RequestParam("requestDate") String date, Model model) throws Exception {
 
		System.out.println("/border/listBorder : GET");
		
		// 캘린더에 찍히는 날짜
		System.out.println("date: "+ date);
		
        DateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date odate = sdFormat.parse(date);

		Border border = new Border();
	    border.setCustomerNo(customerNo);  
        border.setOdate(odate);
	
		Map<String, Object> map = borderService.getBorderList(border);
        
        // Model 과 View 연결
		model.addAttribute("map", map);
	}

	@RequestMapping(value = "listBorderDay/{customerNo}", method = RequestMethod.GET)
	public void listBorderDay(@PathVariable int customerNo, Model model) throws Exception {
 
		System.out.println("/border/listBorder : GET");
		
		// 캘린더에 찍히는 날짜
		
		Map<String, Object> map = borderService.getBorderDayList(customerNo);
        
        // Model 과 View 연결
		model.addAttribute("map", map);
	}
	
	@RequestMapping(value = "listFinalBorder/{customerNo}", method = RequestMethod.GET)
	public void listFinalBorder(@PathVariable int customerNo, Model model) throws Exception {
 
		System.out.println("/border/listFinalBorder : GET / POST");
      
		Map<String, Object> map = cartService.getCartList(customerNo);
        System.out.println("가는중 FinalBorder?"+map.get("cartlist"));
		
        // Model 과 View 연결
		model.addAttribute("map", map);
		cartService.deleteCart(customerNo);
	}
	
	
}