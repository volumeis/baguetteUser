package com.model2.mvc.web.customer;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.model2.mvc.service.bread.BreadService;
import com.model2.mvc.service.domain.Bread;


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
	@RequestMapping( value="getJsonBread/{breadNo}", method=RequestMethod.GET )
	public void getJsonBread(	@PathVariable int breadNo, 
									 			Model model) throws Exception{
		
		System.out.println("/getJsonBread/getBread : GET");
		//Business Logic
		Bread bread = breadService.getBread(breadNo);
		// Model 과 View 연결
		model.addAttribute("bread", bread);
	}
	//===========================================
	//===========================================
	
	@RequestMapping( value="getJsonBreadList/{storeNo}", method=RequestMethod.GET )
	public void getJsonBreadList(	@PathVariable int storeNo, 
									 			Model model) throws Exception{
		
		System.out.println("/getJsonBreadList/getBread : GET");

		//Business Logic
		Map<String, Object> map = breadService.getBreadList(storeNo);
		// Model 과 View 연결
//		String qwe = "바게트";
//		map.put("바게트", qwe);
//		System.out.println(qwe);
//		System.out.println(map);
		model.addAttribute("breadmap", map);
	}
	
	
}