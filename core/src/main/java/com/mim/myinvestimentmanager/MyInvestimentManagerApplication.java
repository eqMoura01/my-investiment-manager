package com.mim.myinvestimentmanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
// @ComponentScan(basePackages =  "com.mim.myinvestimentmanager.config")
public class MyInvestimentManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyInvestimentManagerApplication.class, args);
	}

}
