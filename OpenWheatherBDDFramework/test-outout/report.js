$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/OpenWheather/OpenWheatherBDDFramework/src/main/java/com/openweather/feature/verifyhomepage.feature");
formatter.feature({
  "line": 1,
  "name": "Label verification on Home Page",
  "description": "",
  "id": "label-verification-on-home-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verification of labels and logo",
  "description": "",
  "id": "label-verification-on-home-page;verification-of-labels-and-logo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User already on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User verifies the logo display",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User verifies the sign in link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User verifies the sign up link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User verifies the primary menu",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User closes the application",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 46905616998,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_on_homepage()"
});
formatter.result({
  "duration": 59575381,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_verify_logo()"
});
formatter.result({
  "duration": 64086332,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_verify_signin()"
});
formatter.result({
  "duration": 64235100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_verify_signup()"
});
formatter.result({
  "duration": 154589697,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_verify_primary_menu()"
});
formatter.result({
  "duration": 295854206,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_close_app()"
});
formatter.result({
  "duration": 982840862,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verification when valid city is entered",
  "description": "",
  "id": "label-verification-on-home-page;verification-when-valid-city-is-entered",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User already on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters city \"Mumbai\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User clicks on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User verifies message display",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User closes the application",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 31646020700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_on_homepage()"
});
formatter.result({
  "duration": 57696541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 18
    }
  ],
  "location": "HomePageSteps.user_enters_cityname(String)"
});
formatter.result({
  "duration": 127883439,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_click_search()"
});
formatter.result({
  "duration": 3467499206,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_verify_message()"
});
formatter.result({
  "duration": 52294876,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_close_app()"
});
formatter.result({
  "duration": 901015427,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verification when invalid city is entered",
  "description": "",
  "id": "label-verification-on-home-page;verification-when-invalid-city-is-entered",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User already on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User enters city \"Mum\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User clicks on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User verifies error message display",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User closes the application",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 33849461741,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_on_homepage()"
});
formatter.result({
  "duration": 77346576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mum",
      "offset": 18
    }
  ],
  "location": "HomePageSteps.user_enters_cityname(String)"
});
formatter.result({
  "duration": 182109639,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_click_search()"
});
formatter.result({
  "duration": 4160313437,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_verify_error_message()"
});
formatter.result({
  "duration": 115797848,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_close_app()"
});
formatter.result({
  "duration": 932559243,
  "status": "passed"
});
});