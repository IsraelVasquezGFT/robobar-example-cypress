// hola.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import './cartPage';

import {clickAddColaButton,paramsBeerButton,paramsWineButton,totalGetText,clickSubmitOrder,orderGetText} from "./cartPage";

// Functions
/*function clickAddColaButton(numClicks){
    for(var x=0; x<numClicks;x++) {
        cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
    }
}

function paramsBeerButton(numClicks){
    for(var x=0; x<numClicks;x++) {
        cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
    }
}

function paramsWineButton(numClicks){
    for(var x=0; x<numClicks;x++) {
        cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
    }
}

function totalGetText(){
    return cy.get(':nth-child(4) > .ng-binding');
}

function clickSubmitOrder(){
    return cy.get('.col-12 > .btn').click()
}

function orderGetText(){
    return cy.get('.btn-success')
}*/

// Cypress
describe('Hello Cypress', () => {

    // - - - - - - - - - - Hello - - - - - - - - - -
    it('Says hello', () => {
      expect(true).to.equal(true)
    })

    // - - - - - - - - - - Cola - - - - - - - - - -
    it('Order a Cola', () => {
        cy.visit('http://localhost:3000/#!/')
        clickAddColaButton(1);
        totalGetText().should("contain.text","€1.25")
        clickSubmitOrder()
        orderGetText().should("contain.text","Order")
        orderGetText().click()
        cy.get('p').should("contain.text","Coming right up! ~bzzzt~")
    })

    it('Order Two Colas', () => {
        cy.visit('http://localhost:3000/#!/')
        clickAddColaButton(2);
        totalGetText().should("contain.text","€2.50")
        clickSubmitOrder()
        orderGetText().should("contain.text","Order")
        orderGetText().click()
        cy.get('p').should("contain.text","Coming right up! ~bzzzt~")
    })

    // - - - - - - - - - - Beer - - - - - - - - - -
    it('Order One Beer', () => {
        cy.visit('http://localhost:3000/#!/')
        paramsBeerButton(1)
        totalGetText().should("contain.text","€2.00")
        cy.get('.col-12 > .btn').click()
        cy.get('.col-2').should("contain.text","Age")
        cy.get('.btn-success').should('be.disabled')
        cy.get('#ageInput').type("17")
        cy.get('.btn-success').should('be.enabled')
        cy.get('.btn-success').click()
        cy.get('.alert > .ng-binding').should("contain.text","Only adults can buy alcohol!")
        cy.get('#ageInput').clear()
        cy.get('#ageInput').type("19")
        cy.get('.btn-success').should('be.enabled')
        cy.get('.btn-success').click()
    })
    it('Order Two Beer', () => {
        cy.visit('http://localhost:3000/#!/')
        paramsBeerButton(2)
        totalGetText().should("contain.text","€4.00")
        cy.get('.col-12 > .btn').click()
        cy.get('.col-2').should("contain.text","Age")
        cy.get('.btn-success').should('be.disabled')
        cy.get('#ageInput').type("17")
        cy.get('.btn-success').should('be.enabled')
        cy.get('.btn-success').click()
        cy.get('.alert > .ng-binding').should("contain.text","Only adults can buy alcohol!")
        cy.get('#ageInput').clear()
        cy.get('#ageInput').type("19")
        cy.get('.btn-success').should('be.enabled')
        cy.get('.btn-success').click()
    })

    // - - - - - - - - - - Wine - - - - - - - - - -
    it('Order One Wine', () => {
        cy.visit('http://localhost:3000/#!/')
        paramsWineButton(1)
        totalGetText().should("contain.text","€3.00")
        cy.get('.col-12 > .btn').click()
        cy.get('.col-2').should("contain.text","Age")
        cy.get('.btn-success').should('be.disabled')
        cy.get('#ageInput').type("17")
        cy.get('.btn-success').should('be.enabled')
        cy.get('.btn-success').click()
        cy.get('.alert > .ng-binding').should("contain.text","Only adults can buy alcohol!")
        cy.get('#ageInput').clear()
        cy.get('#ageInput').type("19")
        cy.get('.btn-success').should('be.enabled')
        cy.get('.btn-success').click()
    })
    it('Order Two Wine', () => {
        cy.visit('http://localhost:3000/#!/')
        paramsWineButton(2)
        totalGetText().should("contain.text","€6.00")
        cy.get('.col-12 > .btn').click()
        cy.get('.col-2').should("contain.text","Age")
        cy.get('.btn-success').should('be.disabled')
        cy.get('#ageInput').type("17")
        cy.get('.btn-success').should('be.enabled')
        cy.get('.btn-success').click()
        cy.get('.alert > .ng-binding').should("contain.text","Only adults can buy alcohol!")
        cy.get('#ageInput').clear()
        cy.get('#ageInput').type("19")
        cy.get('.btn-success').should('be.enabled')
        cy.get('.btn-success').click()
    })
})