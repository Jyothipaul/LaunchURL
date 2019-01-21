Feature: Launch Multi URL

  Scenario Outline: Open multi url
    Given Launch chrome Browser
    When I access "<BankWebsite>" Website
    Then I can see "<Bankname>" homepage

    Examples:
    |BankWebsite|Bankname|
    |https://www.hsbc.co.uk/|HSBC|
    |https://www.halifax.co.uk/|Halifax|