/// <reference types="cypress" />

describe("Search elements", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("display the site logo", () => {
    cy.get(".header_logo").should("be.visible");
  });

  it('display the "Sign In" button', () => {
    cy.contains("Sign In").should("exist");
  });

  it('display the "Sign Up" button', () => {
    cy.contains("Sign up").should("exist");
  });

  it("display an image in about section", () => {
    cy.get("#aboutSection img").should("exist").and("be.visible");
  });


  it("display all social media icons", () => {
    const socialLinks = [
      "facebook.com",
      "t.me",
      "youtube.com",
      "instagram.com",
      "linkedin.com",
    ];

    socialLinks.forEach((link) => {
      cy.get(`a[href*="${link}"]`).should("exist").and("be.visible");
    });
  });


  it("title (R) of about-block", () => {
    cy.get("#aboutSection.section .row .col-12 .about-block")
      .eq(1)
      .find(".about-block_title")
      .contains("Instructions and manuals");
  });

  it("description (R) of about-block", () => {
    cy.get(".about-block")
      .eq(1)
      .find(".about-block_title + .about-block_descr")
      .should("contain.text", "Watch over 100 instructions and repair your car yourself.");
  });

  it("title (L) of about-block", () => {
    cy.get("#aboutSection.section .row .col-12 .about-block")
      .eq(0)
      .find(".about-block_title")
      .eq(0)
      .should("have.text", "Log fuel expenses");
  });

  it("description (L) of about-block", () => {
    cy.get(".about-block")
      .eq(0)
      .find(".about-block_title + .about-block_descr")
      .should("contain.text", "Keep track of your replacement schedule and plan your vehicle maintenance expenses in advance.");
  });
});

