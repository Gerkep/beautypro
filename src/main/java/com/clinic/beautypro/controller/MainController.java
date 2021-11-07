package com.clinic.beautypro.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/")
    public String home() {
        return "index.html";
    }

    @GetMapping("/pricing")
    public String pricingPage() {
        return "pricing.html";
    }
    @GetMapping("/transformations")
    public String transformationsPage() {
        return "transformations.html";
    }
}
