package com.model2.mvc.web.customer;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
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

import com.model2.mvc.common.Page;
import com.model2.mvc.common.Search;
import com.model2.mvc.service.border.BorderService;
import com.model2.mvc.service.domain.Border;
import com.model2.mvc.service.domain.Customer;



//==> Customer관리 Controller
@Controller
@RequestMapping("/border/*")
public class BorderContorller {
	/// Field
	@Autowired
	@Qualifier("borderServiceImpl")
	private BorderService borderService;

	public BorderContorller() {
		System.out.println(this.getClass());
	}

	@RequestMapping(value = "addBorder", method = RequestMethod.POST)
	public void addBorder(@ModelAttribute("border") Border border, Model model) throws Exception {

		System.out.println("/border/addBorder : POST");

		borderService.addBorder(border);

		model.addAttribute("border", border);
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

	@RequestMapping(value = "listBorder/{customerNo}")
	public void listBorder(@RequestParam("customerNo") int customerNo, Model model) throws Exception {

		System.out.println("/border/listBorder : GET / POST");

		// Business logic 수행
		Map<String, Object> map = borderService.getBorderList(customerNo);

		// Model 과 View 연결
		model.addAttribute("list", map.get("list"));

	}

}