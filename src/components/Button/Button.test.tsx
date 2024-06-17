/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("UIGarden/Button", () => {
  it("is visible", () => {
    render(<Button titleText='My Button' />);
    expect(screen.getByText("My Button")).toBeVisible();
  });

  it("shows a different style when disabled", () => {
    render(
      <Button
        disabled
        titleText='My Button'
      />
    );
    const target = screen.getByText("My Button");
    expect(target).toHaveStyle("background-color: #f5f5f5");
    expect(target).toHaveStyle("cursor: not-allowed");
  });
});
