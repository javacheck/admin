package cn.self.mvc.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	
	@RequestMapping("")
	public String index(){
		System.out.println("进来了index");
		return "index";
	}
}
