package com.map.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/map")
public class MapController {

	@RequestMapping(value = "/google", method = RequestMethod.GET)
	public String googleMap(ModelMap model) {

		model.addAttribute("message", "googlemap");
		return "googlemap";
	}
}