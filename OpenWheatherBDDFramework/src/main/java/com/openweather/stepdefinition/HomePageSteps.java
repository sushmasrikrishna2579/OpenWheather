package com.openweather.stepdefinition;

import com.openweather.pages.HomePage;
import com.openweather.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class HomePageSteps extends TestBase {
	
	HomePage homepage;
	
	@Given("^user opens browser$")
	public void user_opens_browser() throws Throwable{
		TestBase.initilization();
	}
	
	@Then("^User already on Home Page$")
	public void user_on_homepage() throws Throwable{
		homepage=new HomePage();
		String title=homepage.title_verify();
		Assert.assertEquals("Сurrent weather and forecast - OpenWeatherMap", title);
	}
	
	@Then("^User enters city \"(.*)\"$")
	public void user_enters_cityname(String city) throws Throwable{
		homepage=new HomePage();
		homepage.enter_city(city);
	}
		
	@Then("^User clicks on search button$")
	public void user_click_search() throws Throwable{
		homepage=new HomePage();
		homepage.click_search();
	}
	
	@Then("^User verifies message display$")
	public void user_verify_message() throws Throwable{
		homepage=new HomePage();
		homepage.verify_message();
	}
	
	@Then("^User verifies error message display$")
	public void user_verify_error_message() throws Throwable{
		homepage=new HomePage();
		homepage.verify_error_message();
	}
	
	@Then("^User verifies the logo display$")
	public void user_verify_logo() throws Throwable{
		homepage=new HomePage();
		homepage.verify_logo();
	}
	
	@Then("^User verifies the sign in link$")
	public void user_verify_signin() throws Throwable{
		homepage=new HomePage();
		homepage.verify_signin();
	}
	
	@Then("^User verifies the sign up link$")
	public void user_verify_signup() throws Throwable{
		homepage=new HomePage();
		homepage.verify_signup();
	}
	
	@Then("^User verifies the primary menu$")
	public void user_verify_primary_menu() throws Throwable{
		homepage=new HomePage();
		homepage.menu_list();
	}
		
	@Then("^User closes the application$")
	public void user_close_app() throws Throwable{
		homepage=new HomePage();
		homepage.close_app();
	}
	
	

}
