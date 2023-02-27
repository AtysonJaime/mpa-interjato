describe("Testa para visualizar página de produto específico", () => {
  it("Acessou a página de visualização do produto", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000);
    cy.get(".link-produto").contains("Colheitadeira Multifuncional").click();
    cy.wait(1000);
    cy.get(".chakra-breadcrumb__list-item").should("have.length", "3");
  });
});
