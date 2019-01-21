$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Example.feature");
formatter.feature({
  "line": 1,
  "name": "Launch Multi URL",
  "description": "",
  "id": "launch-multi-url",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Open multi url",
  "description": "",
  "id": "launch-multi-url;open-multi-url",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access \"\u003cBankWebsite\u003e\" Website",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"\u003cBankname\u003e\" homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "launch-multi-url;open-multi-url;",
  "rows": [
    {
      "cells": [
        "BankWebsite",
        "Bankname"
      ],
      "line": 9,
      "id": "launch-multi-url;open-multi-url;;1"
    },
    {
      "cells": [
        "https://www.hsbc.co.uk/",
        "HSBC"
      ],
      "line": 10,
      "id": "launch-multi-url;open-multi-url;;2"
    },
    {
      "cells": [
        "https://www.halifax.co.uk/",
        "Halifax"
      ],
      "line": 11,
      "id": "launch-multi-url;open-multi-url;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Open multi url",
  "description": "",
  "id": "launch-multi-url;open-multi-url;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access \"https://www.hsbc.co.uk/\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"HSBC\" homepage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.launch_chrome_url()"
});
formatter.result({
  "duration": 8817031142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.hsbc.co.uk/",
      "offset": 10
    }
  ],
  "location": "TestStepDef.step2(String)"
});
formatter.result({
  "duration": 3692962992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HSBC",
      "offset": 11
    }
  ],
  "location": "TestStepDef.step3(String)"
});
formatter.result({
  "duration": 856773263,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Open multi url",
  "description": "",
  "id": "launch-multi-url;open-multi-url;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access \"https://www.halifax.co.uk/\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"Halifax\" homepage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.launch_chrome_url()"
});
formatter.result({
  "duration": 2632179595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.halifax.co.uk/",
      "offset": 10
    }
  ],
  "location": "TestStepDef.step2(String)"
});
formatter.result({
  "duration": 4066332112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Halifax",
      "offset": 11
    }
  ],
  "location": "TestStepDef.step3(String)"
});
formatter.result({
  "duration": 932748302,
  "status": "passed"
});
formatter.uri("LaunchURL.feature");
formatter.feature({
  "line": 1,
  "name": "Launch Facebook URL",
  "description": "",
  "id": "launch-facebook-url",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Scenario 1 - Test scenario to launch facebook url",
  "description": "",
  "id": "launch-facebook-url;scenario-1---test-scenario-to-launch-facebook-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Launch chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Launch Facebook page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Close Chrome Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.launch_chrome_url()"
});
formatter.result({
  "duration": 2684773751,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.facebook_URL_is_provided()"
});
formatter.result({
  "duration": 2466736648,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.close_chrome_browser()"
});
formatter.result({
  "duration": 711538627,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Scenario 2 - Test scenario to launch google url",
  "description": "",
  "id": "launch-facebook-url;scenario-2---test-scenario-to-launch-google-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Launch chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Launch Google page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Close Chrome Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.launch_chrome_url()"
});
formatter.result({
  "duration": 2333688579,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.google_URL_is_provided()"
});
formatter.result({
  "duration": 1897441129,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.close_chrome_browser()"
});
formatter.result({
  "duration": 732655030,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Scenario 3 - Test scenario to launch amazon url",
  "description": "",
  "id": "launch-facebook-url;scenario-3---test-scenario-to-launch-amazon-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Launch chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Launch ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Close Chrome Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.launch_chrome_url()"
});
formatter.result({
  "duration": 2333962401,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.ebay_URL_is_provided()"
});
formatter.result({
  "duration": 2354914181,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.close_chrome_browser()"
});
formatter.result({
  "duration": 747358962,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Scenario 4 - Test scenario to launch ebay url",
  "description": "",
  "id": "launch-facebook-url;scenario-4---test-scenario-to-launch-ebay-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Launch chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Launch ebay page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Close Chrome Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.launch_chrome_url()"
});
formatter.result({
  "duration": 2333194712,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.ebay_URL_is_provided()"
});
formatter.result({
  "duration": 2543630041,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.close_chrome_browser()"
});
formatter.result({
  "duration": 728017278,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Scenario 5 - Test scenario to launch git url",
  "description": "",
  "id": "launch-facebook-url;scenario-5---test-scenario-to-launch-git-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "Launch chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Launch git page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Close Chrome Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.launch_chrome_url()"
});
formatter.result({
  "duration": 2360294169,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.git_URL_is_provided()"
});
formatter.result({
  "duration": 2973992550,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.close_chrome_browser()"
});
formatter.result({
  "duration": 749025711,
  "status": "passed"
});
});