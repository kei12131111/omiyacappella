package com.omiyacappella.app.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	
	@GetMapping("/")
	public String redirectHome() {
		return "redirect:/home";
	}
	
	@GetMapping("home")
	public String home() {
		return "home";
	}

}
