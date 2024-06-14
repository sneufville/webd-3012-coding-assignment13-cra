/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text", () => {
  it("should be visible", () => {
    render(<Text content='This is some text' />);
    expect(screen.getByText("This is some text")).toBeVisible();
  });

  it("should change state when disabled", () => {
    render(
      <Text
        content='Some Text'
        disabled
      />
    );
    expect(screen.getByText("Some Text")).toHaveStyle("color: #c0c0c0");
    expect(screen.getByText("Some Text")).toHaveStyle("cursor: not-allowed");
  });
});
