Feature: Label verification on Home Page

Scenario: Verification of labels and logo

Given user opens browser
Then User already on Home Page
Then User verifies the logo display
Then User verifies the sign in link
Then User verifies the sign up link
Then User verifies the primary menu
Then User closes the application

Scenario: Verification when valid city is entered

Given user opens browser
Then User already on Home Page
Then User enters city "Mumbai"
Then User clicks on search button
Then User verifies message display
Then User closes the application

Scenario: Verification when invalid city is entered

Given user opens browser
Then User already on Home Page
Then User enters city "Mum"
Then User clicks on search button
Then User verifies error message display
Then User closes the application