/**
 * This contains list of all the custom commands 
 * fixtures/testData.js file had all the data related to test
 */

import * as TestData from "../fixtures/testData";

const COMMAND_DELAY = 700;


for (const command of ['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains']) {
    Cypress.Commands.overwrite(command, (originalFn, ...args) => {
        const origVal = originalFn(...args);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(origVal);
            }, COMMAND_DELAY);
        });
    });
} 

Cypress.Commands.add('submitButton', () => {
    cy.get('.btn').find('[data-test-id="button-"]').click();
});

Cypress.Commands.add('enterFirstName', () => {
    cy.get('.firstname').find('.input-container').type(TestData.userInfo["firstName"]);
});

Cypress.Commands.add('enterLastName', () => {
    cy.get('.lastname').find('.input-container').type(TestData.userInfo["lastName"]);
});

Cypress.Commands.add('enterAddress', () => {
    cy.get('.address').find('.input-container').type(TestData.userInfo["address"]);
});

Cypress.Commands.add('enterCity', () => {
    cy.get('.city').find('.input-container').type(TestData.userInfo["city"]);
});

Cypress.Commands.add('enterState', () => {
    cy.get('.state').find('[data-test-id="select-state"]').select(TestData.userInfo["state"]);
});

Cypress.Commands.add('enterZip', () => {
    cy.get('.zip').find('.input-container').type(TestData.userInfo["zip"]);
});

Cypress.Commands.add('enterDobMonth', () => {
    cy.get('.dob').find('[data-test-id="select-null"]').eq(0).select(TestData.userInfo["dobMonth"]);
});

Cypress.Commands.add('enterDobDay', () => {
    cy.get('.dob').find('[data-test-id="select-null"]').eq(1).select(TestData.userInfo["dobDay"]);
});

Cypress.Commands.add('enterDobYear', () => {
    cy.get('.dob').find('[data-test-id="select-null"]').eq(2).select(TestData.userInfo["dobYear"]);
});

Cypress.Commands.add('enterSsnFourDigits', () => {
    cy.get('[data-test-id="input-ssn-enroll"]').type(TestData.userInfo["ssnFourDigits"]);
});

Cypress.Commands.add('selectAnswer', (questionNumber) => {
    let answerSelectionIsMade = 0;
    cy.get(".question-wrapper").eq(questionNumber - 1).find('.label').each(($rb, index, $list) => {
        cy.get($rb).invoke('text').then((text) => {

            let optionValue = text.trim().toLowerCase();

            if (TestData.questionTestData.includes(optionValue)) {
                cy.get($rb).scrollIntoView({ duration: 250 }).click('center');
                answerSelectionIsMade = 1;
            } else if (optionValue == "none of the above" && answerSelectionIsMade == 0) {
                cy.get($rb).scrollIntoView({ duration: 250 }).click('center');
            }
        });
        cy.get('.error-message').should('not.exist');
    });
})