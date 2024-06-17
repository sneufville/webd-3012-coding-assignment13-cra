/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

describe("Card", () => {
  // visibility test
  it("is visible", () => {
    const cardTitle = "Sample Card";
    const cardContent = "The sample card is visible";
    render(
      <Card
        cardTitle={cardTitle}
        cardContent={cardContent}
      />
    );
    expect(screen.getByText(cardTitle)).toBeVisible();
    expect(screen.getByText(cardContent)).toBeVisible();
  });

  // state change test
  it("shows a different background color when disabled", () => {
    render(
      <Card
        cardTitle='Disabled Card'
        cardContent='This card has been disabled'
        disabled
      />
    );
    const cardParent = screen.getByText("Disabled Card").parentNode;
    expect(cardParent).toHaveStyle("background-color: #f4f4f4");
    expect(cardParent).toHaveStyle("cursor: not-allowed");
  });
});
