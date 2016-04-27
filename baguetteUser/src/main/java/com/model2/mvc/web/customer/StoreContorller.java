package com.model2.mvc.web.customer;

import java.net.URLDecoder;
import java.util.Map;

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
	@RequestMapping( value="getJsonStoreByNo/{storeNo}", method=RequestMethod.GET)
	public void getJsonStore(	@PathVariable int storeNo,	Model model	) throws Exception{
		System.out.println("/getJsonStoreByNo/{storeNo} : GET " + storeNo);
		//Business Logic
		Store store = storeService.getStoreByNo(storeNo);	
		// Model 과 View 연결
		model.addAttribute("store",store);
	}
	@RequestMapping( value="getJsonStoreByName/{storeName}", method=RequestMethod.GET)
	public void getJsonStoreByName(	@PathVariable String storeName,	Model model	) throws Exception{
		System.out.println("/getJsonStoreByName/{storeName} : GET " + storeName);
		//Business Logic
		Store store = storeService.getStoreByName(storeName);	
		// Model 과 View 연결
		model.addAttribute("store",store);
	}
	
	//===========================================
	@RequestMapping( value="getJsonStoreList/{address}", method=RequestMethod.GET)
	public void getJsonStoreList( @PathVariable String address, Model model) throws Exception{
		System.out.println("/getJsonStoreList/{storeNo} : GET " + address);
		//System.out.println(URLDecoder.decode((URLDecoder.decode(address, "8859_1")), "UTF-8"));
		//System.out.println( URLDecoder.decode(address, "UTF-8"));
		//Business Logic
		Map<String, Object> storeMap = storeService.getStoreList(address);
		//System.out.println(storeMap);
		model.addAttribute("storeMap", storeMap);
	}
	//===========================================
	
}