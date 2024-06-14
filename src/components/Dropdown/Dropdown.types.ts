/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import type { DefaultComponentProps } from "../../@types/app";

export type DropdownProps = Pick<DefaultComponentProps, "disabled"> & {
  /**
   * Optionally sets the background color of the dropdown
   */
  backgroundColor?: string;
  /**
   * Optionally sets the foreground color of the dropdown
   */
  foregroundColor?: string;
  /**
   * Optionally sets the event handler for the dropdown
   * @param {React.ChangeEvent} event
   * @returns void
   */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  /**
   * Sets the options that will be shown in the dropdown
   * @type {Array<{label: string; value: string}>}
   */
  options: {
    label: string;
    value: string;
  }[];
};

export type StyledDropdownProps = Pick<DefaultComponentProps, "disabled"> & {
  backgroundColor?: string;
  foregroundColor?: string;
};
