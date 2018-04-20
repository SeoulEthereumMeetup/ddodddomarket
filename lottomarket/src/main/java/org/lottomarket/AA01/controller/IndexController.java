package org.lottomarket.AA01.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping("/product.do")
    public String index() {
        System.out.println("index");
        return "client_product_detail";
    }

    @GetMapping("/products.do")
    public String products() {
        return "client_product_list";
    }

}
