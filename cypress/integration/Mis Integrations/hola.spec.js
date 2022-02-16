// hola.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// functions

function colaButton(){
    return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn');
}

function totalGetText(){
    return cy.get(':nth-child(4) > .ng-binding');
}

/*function paramsColaButton(numClicks){
    for(var x=0; x<numClicks;x++) {
        cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
    }
}*/

// Cypress

describe('Hello Cypress', () => {
    it('Says hello', () => {
      expect(true).to.equal(true)
    })
    it('Order a Cola', () => {
        cy.visit('http://localhost:3000/#!/')
        colaButton().click();
        totalGetText().should("contain.text","€1.25")
    })
    it('Order Two Colas', () => {
        cy.visit('http://localhost:3000/#!/')
        colaButton().click().click()
        totalGetText().should("contain.text","€2.50")
    })
    /*it('Order Two Colas Params', () => {
        cy.visit('http://localhost:3000/#!/')
        paramsColaButton(3)
        totalGetText().should("contain.text","€3.75")
    })*/
})