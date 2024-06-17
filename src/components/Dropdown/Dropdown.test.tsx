/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

// common options
const options: { label: string; value: string }[] = [
  {
    label: "Option 1",
    value: "opt-1",
  },
  {
    label: "Option 2",
    value: "opt-2",
  },
];

describe("Dropdown", () => {
  it("is visible", () => {
    render(<Dropdown options={options} />);
    expect(screen.getByText(options[0].label)).toBeVisible();
  });

  it("shows a different style when disabled", () => {
    render(
      <Dropdown
        options={options}
        disabled
      />
    );
    expect(screen.getByText(options[0].label).parentNode).toHaveStyle("cursor: not-allowed");
  });
});
