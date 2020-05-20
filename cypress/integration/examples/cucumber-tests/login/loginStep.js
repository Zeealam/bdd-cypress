import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import loginpage from "./loginpage";

Given('I open the login Page',() =>{
    loginpage.visitLoginPage();
    
});

When('Enter the Email id {string}', (email) =>{
    loginpage.enterEmailId();

});

And('Enter the Password {string}' ,(password) =>{
    loginpage.enterPassword(password);
});

Then('And click on submit button',() =>{
    loginpage.enterSubmit();

});

