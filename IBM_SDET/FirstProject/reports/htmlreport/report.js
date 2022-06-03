$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Retail.feature");
formatter.feature({
  "name": "Signin feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify retail site Login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User navigated to the Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter Username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated successfully to the  Home page",
  "keyword": "When "
});
formatter.step({
  "name": "Created coupons",
  "keyword": "And "
});
formatter.step({
  "name": "validate the Coupon ,Edit  the coupon",
  "keyword": "Then "
});
formatter.step({
  "name": "Delete Coupon",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ]
    },
    {
      "cells": [
        "admin",
        "",
        "Admin@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify retail site Login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigated to the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionclass.user_navigated_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username \"admin\" and password \"Admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionclass.enter_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated successfully to the  Home page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionclass.user_navigated_to_the_Homepage_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Created coupons",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionclass.couponCreation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the Coupon ,Edit  the coupon",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionclass.couponCreationValidation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete Coupon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionclass.DeleteCoupon()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});