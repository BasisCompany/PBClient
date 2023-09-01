describe("template spec", () => {
    it("passes", () => {
        cy.visit("/profile");
        cy.get("[aria-label='Тёмная тема']").click();
        cy.visit("/login");
        cy.get("[name='email']").type("2323");
    });
});
