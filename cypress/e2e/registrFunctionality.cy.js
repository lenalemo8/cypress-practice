/// <reference types="cypress" />

import { fillValidRegistrationForm } from "../pom/utils/userGenerator";

describe("accessibility of the form", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".hero-descriptor_btn").click();
  });

  it("opens registration form and displays elements", () => {
    cy.contains("Registration").should("be.visible");
    cy.get("#signupName").should("be.visible");
    cy.get("#signupLastName").should("be.visible");
    cy.get("#signupEmail").should("be.visible");
    cy.get("#signupPassword").should("be.visible");
    cy.get("#signupRepeatPassword").should("be.visible");

    cy.contains("Register").should("be.visible").and("be.disabled");
    cy.contains("×").should("be.visible").click();
    cy.contains("Registration").should("not.exist");
  });

  context("Field: Name", () => {
    it("should show error when empty", () => {
      cy.get("#signupName").focus().blur();
      cy.contains("Name required")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should trim input and validate length", () => {
      cy.get("#signupName").type(" H ").blur();
      cy.contains("Name is invalid")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should show error if name is longer than 20 characters", () => {
      cy.get("#signupName").clear().type("TwentyTwentyTwentyOne").blur();
      cy.contains("Name has to be from 2 to 20 characters long")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should show error for invalid data", () => {
      cy.get("#signupName").type("Hї").blur();
      cy.contains("Name is invalid")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should accept valid input", () => {
      cy.get("#signupName").clear().type("Helen").blur();
      cy.get("#signupName")
        .closest(".form-group")
        .find(".invalid-feedback")
        .should("not.exist");
    });
  });

  context("Field: Last name", () => {
    it("should show error when empty", () => {
      cy.get("#signupLastName").focus().blur();
      cy.contains("Last name required")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should trim input and validate length", () => {
      cy.get("#signupLastName").type(" H ").blur();
      cy.contains("Last name is invalid")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should show error if name is longer than 20 characters", () => {
      cy.get("#signupLastName").clear().type("TwentyTwentyTwentyOne").blur();
      cy.contains("Last name has to be from 2 to 20 characters long")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should show error for invalid data", () => {
      cy.get("#signupLastName").type("Hї").blur();
      cy.contains("Last name is invalid")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should accept valid input", () => {
      cy.get("#signupLastName").clear().type("Elkin").blur();
      cy.get("#signupLastName")
        .closest(".form-group")
        .find(".invalid-feedback")
        .should("not.exist");
    });
  });

  context("Field: Email", () => {
    it("should show error when empty", () => {
      cy.get("#signupEmail").focus().blur();
      cy.contains("Email required")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should show error for invalid format", () => {
      cy.get("#signupEmail").type("wrongEmail").blur();
      cy.contains("Email is incorrect")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it('should show error when email is missing "@" symbol', () => {
      cy.get("#signupEmail").clear().type("userexample.com").blur();
      cy.contains("Email is incorrect")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should show error when email is missing domain extension", () => {
      cy.get("#signupEmail").clear().type("user@domain").blur();
      cy.contains("Email is incorrect")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should show error when email contains spaces", () => {
      cy.get("#signupEmail").clear().type("user @example.com").blur();
      cy.contains("Email is incorrect")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should show error when email contains invalid characters", () => {
      cy.get("#signupEmail").clear().type("user@exa!mple.com").blur();
      cy.contains("Email is incorrect")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should accept valid email with subdomain", () => {
      cy.get("#signupEmail").clear().type("user123@mail.example.com").blur();
      cy.contains("Email is incorrect").should("not.exist");
    });

    it("should accept valid input", () => {
      cy.get("#signupEmail").clear().type("helen@elkin.com").blur();
      cy.get("#signupEmail")
        .closest(".form-group")
        .find(".invalid-feedback")
        .should("not.exist");
    });
  });

  context("Field: Password", () => {
    it("should show error when empty", () => {
      cy.get("#signupPassword").focus().blur();
      cy.contains("Password required")
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should validate password strength", () => {
      cy.get("#signupPassword").type("weakpass").blur();
      cy.contains(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      )
        .should("be.visible")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });

    it("should accept strong password", () => {
      cy.get("#signupPassword").clear().type("Strong1Pass").blur();
      cy.contains("Password has to").should("not.exist");
    });

    context("Field: Re-enter password", () => {
      it("should show error when empty", () => {
        cy.get("#signupRepeatPassword").focus().blur();
        cy.contains("Re-enter password required")
          .should("be.visible")
          .and("have.css", "border-color", "rgb(220, 53, 69)");
      });

      it("should show mismatch error", () => {
        cy.get("#signupPassword").type("Strong1Pass");
        cy.get("#signupRepeatPassword").type("Strong2Pass").blur();
        cy.contains("Passwords do not match")
          .should("be.visible")
          .and("have.css", "border-color", "rgb(220, 53, 69)");
      });

      it("should show error for password with no numbers", () => {
        cy.get("#signupPassword").type("StrongPass").blur();
        cy.contains("Password has to")
          .should("be.visible")
          .and("have.css", "border-color", "rgb(220, 53, 69)");
      });

      it("should accept matching passwords", () => {
        cy.get("#signupPassword").clear().type("Strong1Pass");
        cy.get("#signupRepeatPassword").clear().type("Strong1Pass").blur();
        cy.contains("Passwords do not match").should("not.exist");
      });
    });
  });

  describe("Register Button", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get(".hero-descriptor_btn").click();
    });

    it("should be disabled when form is invalid", () => {
      cy.contains("Register").should("be.visible").and("be.disabled");
    });

    it.only("should be enabled when all fields are valid", () => {
      const { firstName, lastName, email, password } = fillValidRegistrationForm();

      cy.get("#signupName").type(firstName);
      cy.get("#signupLastName").type(lastName);
      cy.get("#signupEmail").type(email);
      cy.get("#signupPassword").type(password);
      cy.get("#signupRepeatPassword").type(password);
    });

    it.only("should submit form when clicked and valid", () => {
      const { firstName, lastName, email, password } = fillValidRegistrationForm();

      cy.get("#signupName").type(firstName);
      cy.get("#signupLastName").type(lastName);
      cy.get("#signupEmail").type(email);
      cy.get("#signupPassword").type(password);
      cy.get("#signupRepeatPassword").type(password);
      cy.contains("Register").should("not.be.disabled");
      cy.get(".modal-content").find("button").contains("Register").click();
      cy.url().should("include", "/garage");
    });
  });
});
