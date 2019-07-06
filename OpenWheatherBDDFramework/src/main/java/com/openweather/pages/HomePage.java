package com.openweather.pages;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.openweather.util.TestBase;

import junit.framework.Assert;

public class HomePage extends TestBase {
	
	
	//Page Factory OR
	
	@FindBy(xpath = "//div[@class='form-group search-cities__block']//input[@id='q']")
	WebElement CityName;
	
	@FindBy(xpath = "//button[@class='btn btn-orange']")
	WebElement SearchButton;
	
	@FindBy(xpath = "//div[@class='alert alert-warning']")
	WebElement AlertMessage;
	
	@FindBy(xpath = "/html[1]/body[1]/main[1]/div[4]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/b[1]/a[1]")
	WebElement CityDisplay;
	
	@FindBy(xpath = "//img[@class='img-responsive']")
	WebElement Logo;
	
	@FindBy(xpath = "//a[@class='pull-right'][contains(text(),'Sign In')]")
	WebElement SignIn;
	
	@FindBy(xpath = "//a[contains(text(),'Sign Up')]")
	WebElement SignUp;
		
	public HomePage(){
		PageFactory.initElements(driver, this);
	}
	
	//Verify the title 
	public String title_verify(){
		System.out.println(driver.getTitle());
		return driver.getTitle();
	
		
	}
	
	public void enter_city(String City){
		
		System.out.println("Inside the method");
		CityName.sendKeys(City);
			
	}
	
	//Entering value in the city input field
	public void invalid_enter_city(){
		System.out.println("Inside the method");
		CityName.sendKeys("Mum");
			
	}
	
	//Clicking on Search button
	public void click_search(){
		SearchButton.click();
	}
	
	//Verifying the valid city details	
	public void verify_message(){
		String message=CityDisplay.getText();
		String message1=message.substring(0,6);
		System.out.println(message1);
		Assert.assertEquals(message1, "Mumbai");
	}
	
	//closing the application
	public void close_app(){
	driver.quit();
	}
	
	//Entering value in the city input field
	public void invalid_city(){
		CityName.sendKeys("Mum");
				
	}
	
	//Verifying the error message 
	public void verify_error_message(){
		String message=AlertMessage.getText();
		String message1=message.substring(2);
		System.out.println(message1);
		Assert.assertEquals(message1, "Not found");
	}
	
	//Verfying the logo
	public void verify_logo(){
		boolean value=Logo.isDisplayed();
		if(value==true){
			Assert.assertEquals(value, true);
		}
	}
	
	//Verfying the Sign in link display
	public void verify_signin(){
		boolean value=SignIn.isDisplayed();
		Assert.assertTrue(value);;
		
	}
	
	//Verfying the Sign up link display
	public void verify_signup(){
		boolean value=SignUp.isDisplayed();
		Assert.assertTrue(value);
		
	}
	
	//Verify the primary menu
	public void menu_list(){
		List list=new ArrayList();
		list.add("Sign In");
		list.add("Sign up");
		list.add("Weather");
		list.add("Maps");
		list.add("Guide");
		list.add("API");
		list.add("Price");
		list.add("Partners");
		list.add("Stations");
		list.add("Widgets");
		list.add("Blog");
		
		List<WebElement> lst = driver.findElements(By.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/ul[1]/li/a"));
		int sz=lst.size();
		for(int i=2;i<sz;i++){
			String Expval = lst.get(i).getText();
			String Actval=(String) list.get(i);
			System.out.println("Expected Value:" +Expval);
			System.out.println(Actval);
		Assert.assertEquals(Expval, Actval);
	}
}

}