package com.model2.mvc.web.customer;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.model2.mvc.service.domain.Customer;
import com.model2.mvc.service.domain.Store;
import com.model2.mvc.service.store.StoreService;


//==> Customer관리 Controller
@Controller
@RequestMapping("/store/*")
public class StoreContorller {
	
	///Field
	@Autowired
	@Qualifier("storeServiceImpl")
	private StoreService storeService;

	public StoreContorller(){
		System.out.println(this.getClass());
	}
	
	//===========================================
	//===========================================
	@RequestMapping( value="getJsonStore/{storeNo}", method=RequestMethod.GET)
	public void getJsonStore(	@PathVariable int storeNo,
		HttpSession ssesion,	Model model	) throws Exception{
		System.out.println("/getJsonStore/getStore : GET" + storeNo);
		//Business Logic
		Store store = storeService.getStore(storeNo);
		
		// Model 과 View 연결
		model.addAttribute("store",store);
	}
	//===========================================
	//===========================================
	
}