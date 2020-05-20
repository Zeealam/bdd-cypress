/// <reference types="Cypress" />

const Email='input[type=email]';
const Password= 'input[type=password]';
const Submit= 'input[type=submit]';

class Login{

static visitLoginPage(){
    cy.visit(url)
}

static enterEmailId(email){
   const field= cy.xpath(Email).clear()
   field.type(email)
}

static enterPassword(password){
    const field=cy.xpath(Password).clear()
    field.type(password)
}

static enterSubmit(){
    const submit=cy.xpath(Submit)
    submit.click()
}

}

export default LoginPage