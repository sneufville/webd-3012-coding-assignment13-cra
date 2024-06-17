/**
 * @author  sai
 * created  2024-06-12
 * project  coding-assignment-12-cra
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { HeroImage } from "./index";

describe("UIGarden/HeroImage", () => {
  it("should be visible", () => {
    render(
      <HeroImage
        altText='image showing code'
        src='code-hero-img.jpg'
        testId='hero'
      />
    );
    expect(screen.getByTestId("hero")).toBeVisible();
  });

  it("should change when disabled", () => {
    render(
      <HeroImage
        altText='image showing code'
        disabled
        src='code-hero-img.jpg'
        testId='hero-disabled'
      />
    );
    const element = screen.getByTestId("hero-disabled");
    expect(element).toBeVisible();
    expect(element).toHaveStyle("cursor: not-allowed");
    expect(element).toHaveStyle("opacity: 0.5");
  });
});
