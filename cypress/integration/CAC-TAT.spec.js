/// <reference types="Cypress" />

//O bloco describe define a suíte de testes, e o bloco it, define um caso de teste.

describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {
        cy.visit('./src/index.html')
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  
    })
  })