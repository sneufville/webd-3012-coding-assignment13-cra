/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import type { DefaultComponentProps } from "../../@types/app";

export type StyledCardProps = Pick<DefaultComponentProps, "disabled"> & {
  backgroundColor?: string;
  foregroundColor?: string;
};

export type CardProps = Pick<DefaultComponentProps, "disabled"> & {
  /**
   * Optionally sets the background color of the card component
   */
  backgroundColor?: string;
  /**
   * What's shown as the title for the card
   */
  cardTitle: string;
  /**
   * Optionally sets the content for the card. Can be any react node
   * @type React.ReactNode
   */
  cardContent?: React.ReactNode;
  /**
   * Optionally sets actions (buttons or other controls) for the card
   * @type React.ReactNode
   */
  cardActions?: React.ReactNode;
  /**
   * Optionally sets the foreground color of the card component
   */
  foregroundColor?: string;
};
