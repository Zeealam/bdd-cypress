import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import loginpage from "./loginpage";

beforeEach(function()  {
    // runs once before all tests in the block
    cy.fixture('example').then(function(data){
        this.data=data
    })
    
  })

Given('I open the login Page',() =>{
    loginpage.visitLoginPage();
    
});

When("Enter the Email id {string}", (email) =>{
    
    loginpage.enterEmailId(this.data.email);

});

And("Enter the password {string}" ,(password) =>{
    loginpage.enterPassword(this.data.password);
});

Then('And click on submit button',() =>{
    loginpage.enterSubmit();

});
