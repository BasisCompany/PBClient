describe("SupportPage", () => {
    
    describe("Список вопросов", () => {
        it("passes", () => {
            cy.visit("/support/questions");
            cy.get("[href='/support/questions/monetization']").click();
            cy.get("h1").contains("Монетизация");
            cy.url().should("include", "/support/questions/monetization");
        });
    });
});
