import {Given} from "cypress-cucumber-preprocessor/steps";
import {Then} from "cypress-cucumber-preprocessor/steps";
import {When} from "cypress-cucumber-preprocessor/steps";

// Functions
function clickAddColaButton(numClicks){
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
}

// step definitions

// - - - - - - - - - - Cola - - - - - - - - - -
Given('Abrimos la pagina de robobar',()=>{
    cy.visit('http://localhost:3000/#!/')
})

Then('Añadimos una cola', ()=> {
    clickAddColaButton(1);
    totalGetText().should("contain.text","€1.25")
    clickSubmitOrder()
    orderGetText().should("contain.text","Order")
    orderGetText().click()
    cy.get('p').should("contain.text","Coming right up! ~bzzzt~")
})

Given('Abrimos la pagina de robobar',()=>{
    cy.visit('http://localhost:3000/#!/')
})

Then('Añadimos dos colas', ()=> {
    cy.visit('http://localhost:3000/#!/')
    clickAddColaButton(2);
    totalGetText().should("contain.text","€2.50")
    clickSubmitOrder()
    orderGetText().should("contain.text","Order")
    orderGetText().click()
    cy.get('p').should("contain.text","Coming right up! ~bzzzt~")
})

// - - - - - - - - - - Beer - - - - - - - - - -
Given('Abrimos la pagina de robobar',()=>{
    cy.visit('http://localhost:3000/#!/')
})

Then('Añadimos una cerveza', ()=> {
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

Given('Abrimos la pagina de robobar',()=>{
    cy.visit('http://localhost:3000/#!/')
})

Then('Añadimos dos cerveza', ()=> {
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

// - - - - - - - - - - Wine - - - - - - - - - -
Given('Abrimos la pagina de robobar',()=>{
    cy.visit('http://localhost:3000/#!/')
})

Then('Añadimos un vino', ()=> {
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

Given('Abrimos la pagina de robobar',()=>{
    cy.visit('http://localhost:3000/#!/')
})

Then('Añadimos dos vinos', ()=> {
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