/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import type { DefaultComponentProps } from "../../@types/app";

export type StyledTextProps = Pick<DefaultComponentProps, "disabled"> & {
  backgroundColor?: string;
  foregroundColor?: string;
};

export type TextProps = Pick<DefaultComponentProps, "disabled"> & {
  /**
   * Optional background color for the text component
   */
  backgroundColor?: string;
  /**
   * What is shown as content
   */
  content: string;
  /**
   * Optionally set the foreground color for the text component
   */
  foregroundColor?: string;
};
