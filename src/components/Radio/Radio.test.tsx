/**
 * @author  sai
 * created  2024-06-12
 * project  coding-assignment-12-cra
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Radio from "./Radio";

describe("UIGarden/Radio", () => {
  it("should be visible", () => {
    render(<Radio labelText={"Radio Option"} />);
    expect(screen.getByRole("radio")).toBeVisible();
  });

  it("should change state when disabled", () => {
    render(
      <Radio
        disabled
        labelText={"Disabled Radio Option"}
      />
    );
    expect(screen.getByRole("radio")).toHaveStyle("cursor: not-allowed");
  });
});
