describe("Testa para visualizar se o item foi adicionado e removido do carrinho", () => {
  it("Adicionou o item no carrinho", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000);
    cy.get(".link-produto").contains("Colheitadeira Multifuncional").click();
    cy.wait(1000);
    cy.get(".chakra-breadcrumb__list-item").should("have.length", "3");
    cy.get(".card-datalhes__footer button").click();
    cy.wait(200);
    cy.get(".header-carrinho button .badge-carrinho").should("contain", "1");
    cy.get(".header-carrinho .button-carrinho").click();
    cy.get(".header-carrinho .card-itemcarrinho").should("have.length", "1");
  });
  it("Removeu o item do carrinho", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000);
    cy.get(".link-produto").contains("Colheitadeira Multifuncional").click();
    cy.wait(1000);
    cy.get(".chakra-breadcrumb__list-item").should("have.length", "3");
    cy.get(".card-datalhes__footer button").click();
    cy.wait(200);
    cy.get(".header-carrinho button .badge-carrinho").should("contain", "1");
    cy.get(".header-carrinho .button-carrinho").click();
    cy.get(".header-carrinho .card-itemcarrinho").should("have.length", "1");
    cy.get(".header-carrinho .card-itemcarrinho button").click();
    cy.get(".header-carrinho .listagem-produtos__no-item")
      .should("be.visible")
      .and("contain", "Nenhum item adicionado ao carrinho");
  });
});
