/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label", () => {
  it("should be visible", () => {
    render(<Label labelText='Test Label' />);
    expect(screen.getByText("Test Label")).toBeVisible();
  });

  it("should change state when disabled", () => {
    render(
      <Label
        disabled
        labelText='Test Label'
      />
    );
    expect(screen.getByText("Test Label")).toHaveStyle("color: #999");
    expect(screen.getByText("Test Label")).toHaveStyle("cursor: not-allowed");
  });
});
