package com.model2.mvc.web.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.model2.mvc.service.cart.CartService;
import com.model2.mvc.service.domain.Cart;


//==> Customer관리 Controller
@Controller
@RequestMapping("/cart/*")
public class CartContorller {
	
	///Field
	@Autowired
	@Qualifier("cartServiceImpl")
	private CartService cartService;

	public CartContorller(){
		System.out.println(this.getClass());
	}
	
	
	//===========================================
	
	@RequestMapping( value="addJsonCart/{breadNo}", method=RequestMethod.GET)
	public void addJsonCart( @ModelAttribute("cart") Cart cart,
											@PathVariable int breadNo,
												Model model) throws Exception{
		System.out.println("/addJsonCart/addCart : GET");
		cart.setBreadNo(breadNo);
		// 세션을 통해서 customerNo Cart VO에 저장해야 한다.
		cartService.addCart(cart);
	}
	//===========================================
	@RequestMapping( value="getJsonCart/{customerNo}", method=RequestMethod.GET )
	public void getJsonCart(	@PathVariable int customerNo, 
									 			Model model) throws Exception{
		
		System.out.println("/getJsonCart/getCart : GET");
		//Business Logic
		Cart cart = cartService.getCart(customerNo);
		// Model 과 View 연결
		model.addAttribute("cart", cart);
	}
	//===========================================
	//===========================================
		
	
}