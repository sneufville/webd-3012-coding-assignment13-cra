/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import React from "react";
import type { DefaultComponentProps } from "../../@types/app";

export type StyledTableCellProps = DefaultComponentProps;
export type StyledTableRowProps = DefaultComponentProps;
export type StyledTableHeaderProps = DefaultComponentProps;
export type StyledTableBodyProps = DefaultComponentProps;
export type StyledTableFooterProps = DefaultComponentProps;
export type StyledTableProps = DefaultComponentProps & { "data-testid"?: string };

export type TableCellProps = Pick<DefaultComponentProps, "disabled"> & {
  /**
   * Sets what is contained within a table cell
   */
  children: React.ReactNode;
  /**
   * Optionally sets the number of columns a cell should span
   */
  colSpan?: number;
};

export type TableRowProps = Pick<DefaultComponentProps, "disabled"> & {
  /**
   * Optionally sets the content of a table's row. typically this will be columns
   */
  children?: React.ReactNode;
};

export type TableHeaderProps = Pick<DefaultComponentProps, "disabled"> & {
  /**
   * Optionally sets the content of the table's header
   */
  children?: React.ReactNode;
};

export type TableBodyProps = Pick<DefaultComponentProps, "disabled"> & {
  /**
   * Optionally sets the content of the table's body
   */
  children?: React.ReactNode;
};

export type TableFooterProps = Pick<DefaultComponentProps, "disabled"> & {
  /**
   * Optionally sets the content of the table's footer. The footer is shown at the
   * bottom of the table
   */
  children?: React.ReactNode;
};

export type TableProps = Pick<DefaultComponentProps, "disabled"> & {
  /**
   * Optionally sets content of the whole table where a table is typically
   * composed of an optional TableHeader, a TableBody and an optional TableFooter
   */
  children?: React.ReactNode;
  /**
   * Optionally sets the test id (data-testid) for a table component
   */
  testId?: string;
};
