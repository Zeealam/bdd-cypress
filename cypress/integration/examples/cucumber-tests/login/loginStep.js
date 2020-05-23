import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginpage from "./loginpage";

var input;

before(function () {
  cy.fixture("example").then(function (data) {
    input = data;
  });
});

Given("I open the login Page", () => {
  loginpage.visitLoginPage();
});

When("Enter the Email id {string}", (email) => {
  loginpage.enterEmailId(input.email);
});

And("Enter the password {string}", (password) => {
  loginpage.enterPassword(input.password);
});

Then("And click on submit button", () => {
  loginpage.enterSubmit();
});
