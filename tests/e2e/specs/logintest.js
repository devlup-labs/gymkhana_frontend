describe("Test on login view", () => {
  it("Visits the ./login", () => {
    cy.visit("/login");
    cy.contains("p", "Login");
  });
  it("contains the google sign in button", () => {
    cy.visit("/login");
    cy.get("img").should("have.class", "gsign-responsive");
  });
});
