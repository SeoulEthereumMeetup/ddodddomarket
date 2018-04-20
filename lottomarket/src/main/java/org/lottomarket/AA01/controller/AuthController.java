package org.lottomarket.AA01.controller;

import org.lottomarket.AA01.service.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


@RestController
@RequestMapping(value="/auth/*")
public class AuthController {
	
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	
	@Autowired
	private AuthService AuthService;
	
	@RequestMapping(value = "aa")
	public ModelAndView aa(ModelAndView mav) {
		return mav;
	}
	
}
