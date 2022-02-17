// Functions
function clickAddColaButton(numClicks){
    for(var x=0; x<numClicks;x++) {
        cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
    }
}

function paramsBeerButton(numClicks){
    for(var i=0; i<numClicks;i++) {
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

exports.clickAddColaButton = clickAddColaButton;
exports.paramsBeerButton = paramsBeerButton;
exports.paramsWineButton = paramsWineButton;
exports.totalGetText = totalGetText;
exports.clickSubmitOrder = clickSubmitOrder;
exports.orderGetText = orderGetText;