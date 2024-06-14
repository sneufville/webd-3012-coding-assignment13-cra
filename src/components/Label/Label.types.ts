/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */
import type { ReactNode } from "react";
import type { DefaultComponentProps } from "../../@types/app";

export type StyledLabelProps = DefaultComponentProps & {
  backgroundColor?: string;
  foregroundColor?: string;
};

export type LabelProps = Pick<DefaultComponentProps, "disabled"> & {
  /**
   * Optionally sets the background color for the label
   */
  backgroundColor?: string;
  /**
   * Optionally sets the foreground color the label
   */
  foregroundColor?: string;
  /**
   * Optionally sets the icon for the label
   * @type ReactNode
   */
  iconElement?: ReactNode;
  /**
   * Sets what is shown on the label
   */
  labelText: string;
};
