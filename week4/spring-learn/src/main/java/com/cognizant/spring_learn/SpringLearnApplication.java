package com.cognizant.spring_learn;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@SpringBootApplication
public class SpringLearnApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringLearnApplication.class, args);
		displayDate();
		displayCountry();
		displayCountries();
	}

	public static void displayDate() {
		ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
		SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
		Date now = new Date();  // Get current date and time
		System.out.println("Current Date & Time: " + format.format(now));
	}


	public static void displayCountry() {
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = context.getBean("country", Country.class);
		System.out.println("Country loaded from XML: " + country);
	}

	public static void displayCountries() {
		ApplicationContext context = new ClassPathXmlApplicationContext("country-list.xml");

		List<Country> countryList = context.getBean("countryList", List.class);

		for (Country country : countryList) {
			System.out.println("Code: " + country.getCode() + ", Name: " + country.getName());
		}
	}

}
