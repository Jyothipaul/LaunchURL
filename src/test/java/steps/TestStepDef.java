package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestStepDef {

    WebDriver myDriver;

    @Given("^Launch chrome Browser$")
    public void launch_chrome_url() throws Throwable {

        System.setProperty("webdriver.chrome.driver","C:\\SeleniumSetup\\chromedriver.exe");
        myDriver = new ChromeDriver();
        System.out.println("Chrome browser launched\n");
    }

    @When("^Launch Facebook page$")
    public void facebook_URL_is_provided() throws Throwable {

        myDriver.get("https://www.facebook.com/");
        System.out.println("Facebook page launched in Chrome browser\n");
        System.out.println(myDriver.getTitle() + "\n");
        System.out.println(myDriver.getTitle().contains("Facebook")+ "\n");
        Assert.assertEquals(true,myDriver.getTitle().contains("Facebook"));
    }


    @When("^Launch Google page$")
    public void google_URL_is_provided() throws Throwable {

        myDriver.get("https://www.google.com/");
        System.out.println("Google page launched in Chrome browser\n");
        System.out.println(myDriver.getTitle() + "\n");
        System.out.println(myDriver.getTitle().contains("Google")+ "\n");
        Assert.assertEquals(true,myDriver.getTitle().contains("Google"));
    }

    @When("^Launch Amazon page$")
    public void amazon_URL_is_provided() throws Throwable {

        myDriver.get("https://www.amazon.com/");
        System.out.println("Amazon page launched in Chrome browser\n");
        System.out.println(myDriver.getTitle() + "\n");
        System.out.println(myDriver.getTitle().contains("Amazon")+ "\n");
        Assert.assertEquals(true,myDriver.getTitle().contains("Amazon"));
    }

    @When("^Launch ebay page$")
    public void ebay_URL_is_provided() throws Throwable {

        myDriver.get("https://www.ebay.com/");
        System.out.println("ebay page launched in Chrome browser\n");
        System.out.println(myDriver.getTitle() + "\n");
        System.out.println(myDriver.getTitle().contains("eBay") + "\n");
        Assert.assertEquals(true, myDriver.getTitle().contains("eBay"));
    }

    @When("^Launch git page$")
    public void git_URL_is_provided() throws Throwable {

        myDriver.get("https://github.com/");
        System.out.println("git page launched in Chrome browser\n");
        System.out.println(myDriver.getTitle() + "\n");
        System.out.println(myDriver.getTitle().contains("Git") + "\n");
        Assert.assertEquals(true, myDriver.getTitle().contains("Git"));
    }

    @Then("^Close Chrome Browser$")
    public void close_chrome_browser() throws Throwable {
        myDriver.quit();
        System.out.println("Close the browser\n");

    }

    @When("^I access \"([^\"]*)\" Website$")
    public void step2(String arg){
        myDriver.get(arg);
    }

    @Then("^I can see \"([^\"]*)\" homepage$")
    public void step3(String arg){

        System.out.println(arg+" website launched in Chrome browser\n");
        System.out.println(myDriver.getTitle() + "\n");
        Assert.assertEquals(true, myDriver.getTitle().contains(arg));
        System.out.println(myDriver.getTitle().contains(arg) + "\n");
        myDriver.quit();
        System.out.println("Close the browser\n");
    }
}
