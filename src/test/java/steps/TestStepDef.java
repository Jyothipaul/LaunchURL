package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestStepDef {

    WebDriver Driver;

    @Given("^Launch chrome Browser$")
    public void launch_chrome_url() throws Throwable {

        System.setProperty("webdriver.chrome.driver","C:\\SeleniumSetup\\chromedriver.exe");
        Driver = new ChromeDriver();
        System.out.println("Chrome browser launched\n");

    }

    @When("^Launch Facebook page$")
    public void facebook_URL_is_provided() throws Throwable {

        Driver.get("https://en-gb.facebook.com/");
        System.out.println("Facebook page launched in Chrome browser\n");

    }

    @Then("^Close Chrome Browser$")
    public void facebook_page_is_launched() throws Throwable {

        Driver.quit();
        System.out.println("Close the browser\n");

    }
}
