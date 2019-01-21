Feature: Launch Facebook URL

  Scenario: Scenario 1 - Test scenario to launch facebook url
    Given Launch chrome Browser
    When Launch Facebook page
    Then Close Chrome Browser

  Scenario: Scenario 2 - Test scenario to launch google url
    Given Launch chrome Browser
    When Launch Google page
    Then Close Chrome Browser

  Scenario: Scenario 3 - Test scenario to launch amazon url
    Given Launch chrome Browser
    When Launch ebay page
    Then Close Chrome Browser

  Scenario: Scenario 4 - Test scenario to launch ebay url
    Given Launch chrome Browser
    When Launch ebay page
    Then Close Chrome Browser

  Scenario: Scenario 5 - Test scenario to launch git url
    Given Launch chrome Browser
    When Launch git page
    Then Close Chrome Browser