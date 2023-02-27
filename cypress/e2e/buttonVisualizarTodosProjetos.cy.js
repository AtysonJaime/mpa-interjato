describe("Testa botão para visualizar todos os produtos", () => {
  it("Acessou a página de listagem de produtos", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000);
    cy.contains("Visualizar demais produtos").click();
    cy.url().should("include", "/produtos");
  });
});
