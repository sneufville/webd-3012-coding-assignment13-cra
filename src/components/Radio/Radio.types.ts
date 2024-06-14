/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import type { DefaultComponentProps } from "../../@types/app";

export type StyledRadioProps = Pick<DefaultComponentProps, "disabled"> & {
  backgroundColor?: string;
};

export type RadioProps = Pick<DefaultComponentProps, "disabled"> & {
  /**
   * The background color for the component
   */
  backgroundColor?: string;
  /**
   * Optionally sets the foreground color the radio button's label
   */
  foregroundColor?: string;
  /**
   * Optional label text to go with the radio button's label
   */
  labelText: string;
  /**
   * Optional event handler for the radio button
   * @param event
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
