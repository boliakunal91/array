/**

 */

describe("Test to verify user identity verification flow and credit reports page", () => {
    before(() => {
        cy.visit("");
        cy.get('.arr-container').contains('Verify Your Identity').should("be.visible");
    });

    //This hook will verify if the user info. flow
    it("Fill up the user form", () => {
        cy.enterFirstName();
        cy.enterLastName();
        cy.enterAddress();
        cy.enterCity();
        cy.enterState();
        cy.enterZip();
        cy.submitButton();
    });

    //This hook will verify if the additional user info. flow
    it("Fill in the additional information", () => {
        cy.enterDobMonth();
        cy.enterDobDay();
        cy.enterDobYear();
        cy.enterSsnFourDigits();
        cy.submitButton();
    });

    //This hook will verify security questions flow
    it("Answer the security questions", () => {
        cy.selectAnswer(1);
        cy.selectAnswer(2);
        cy.selectAnswer(3);
        cy.submitButton();
    });

    //This hook will confirm the success page
    it("Check if loading page appears", () => {
        cy.get('.heading').contains('Identity Confirmation').should('be.visible')
        cy.submitButton();
    });

    //This hook verifies report page
    it("Check if credit report opens", () => {
        cy.get('.title', {timeout:200000}).contains('Thomas D Devos');
        cy.get('[data-test-id="toggle-bureau-efx-"]').should('have.class', 'active');
    });

    it("Check if user can switch to Experian report ", () => {
        cy.get('.toggle').contains('Experian').click();
        cy.get('[data-test-id="toggle-bureau-exp-"]').should('have.class', 'active');
    });

    it("Check if user can switch to TransUnion report", () => {
        cy.get('.toggle').contains('TransUnion').click();
        cy.get('[data-test-id="toggle-bureau-tui-"]').should('have.class', 'active');
    });
});