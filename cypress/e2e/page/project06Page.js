class Project06Page {
 //Locators  
getHeading() {
 return cy.get('.is-size-3')
}

getTableHeading() {
  return cy.get('.DynamicTables_tableHeaders__k53h5 >th')
}
getTableRow() {
  return cy.get('#product_table  td')
}

getTotalText() {
  return cy.get('#total_amount')
 }

getModalHeading() {
  return cy.get('.modal-card-head')
}
getLabel() {
  return cy.get(' .field >label')
}
 
getInputBox(){
  return cy.get('#name_form > div .control .input')
}

getButton(button) {
  switch (button) {
    case 'ADD PRODUCT':
      return cy.get('#add_product_btn')
    case 'X':
      return cy.get('.delete')
    case 'SUBMIT':
      return cy.get('#submit')
   default:
      throw new Error('Invalid button provided')
  }
}

getNotSeeModela(){
  return cy.get('.modal-card-body')
}
//Methods
}


export default Project06Page;