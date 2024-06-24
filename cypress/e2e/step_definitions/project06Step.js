import Project06Page from "../page/project06Page";
const {Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

const project06Page = new Project06Page;


Given(/^the user is on "([^"]*)"$/, (url) => {
cy.visit(url);
});

Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	project06Page.getHeading().should('have.text', heading)
});


Then(/^the user should see the table with the headers below$/, (dataTable) => {
const arr = dataTable.rawTable.flat()

project06Page.getTableHeading().each(($el, index) => {
    cy.wrap($el).should('contain', arr[index])
  })
arr.forEach((input) => {
    cy.log(input)
  })
});


Then(/^the user should see the table with the rows below$/, (dataTable) => {

  const arr = dataTable.rawTable.flat()

project06Page.getTableRow().each(($el, index) => {
    cy.wrap($el).should('contain', arr[index])
  })
arr.forEach((input) => {
    cy.log(input)
  })
});

Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
project06Page.getButton(button).should('be.enabled');
});


Then(/^the user should see the "([^"]*)" text displayed$/, (text) => {
project06Page.getTotalText().should('have.text',text)
});



When(/^the user clicks on the "([^"]*)" button$/, (button) => {
project06Page.getButton(button).click()
})

Then(/^the user should see the "([^"]*)" modal with its heading$/, (modalHeading) => {
	project06Page.getModalHeading().should('be.visible',modalHeading)
  .and('have.text','Add New Product')

});


Then(/^the user should see the "([^"]*)" label$/, () => {
	project06Page.getLabel().should('be.visible')
});


Then(/^the user should see the "([^"]*)" input box is enabled$/, () => {
  project06Page.getInputBox().should('be.enabled')
  });



  Then(/^the user should not see the "([^"]*)" modal$/, () => {
project06Page.getNotSeeModela().should('not.exist')
  });
  