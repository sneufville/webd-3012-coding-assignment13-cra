/**
 * @author  sai
 * created  2024-06-12
 * project  coding-assignment-12-cra
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Image } from "./index";

describe("UIGarden/Image(img)", () => {
  it("should be visible", () => {
    render(
      <Image
        altText='eat sleep code repeat'
        src='eat-sleep-code-repeat.jpg'
        testId='image'
      />
    );
    expect(screen.getByTestId("image")).toBeVisible();
  });

  it("should change state when disabled", () => {
    render(
      <Image
        altText='eat sleep code repeat'
        disabled
        src='eat-sleep-code-repeat.jpg'
        testId='image-disabled'
      />
    );
    const element = screen.getByTestId("image-disabled");
    expect(element).toBeVisible();
    expect(element).toHaveStyle("cursor: not-allowed");
    expect(element).toHaveStyle("opacity: 0.5");
  });
});
