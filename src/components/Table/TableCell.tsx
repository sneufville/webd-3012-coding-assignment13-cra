/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";
import type { StyledTableCellProps, TableCellProps } from "./Table.types";

const StyledTableCell = styled.td<StyledTableCellProps>`
  background-color: ${(props) => (props.disabled ? "#f4f4f4" : "transparent")};
  color: ${(props) => (props.disabled ? "#999" : "#333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 0.55rem;
`;

/**
 * @function TableCell
 * @param children
 * @param disabled
 * @param colSpan
 * @constructor
 * @description Renders a table cell (<td>) that should be used with a table
 */
const TableCell: React.FC<TableCellProps> = ({ children, disabled, colSpan }) => {
  return (
    <StyledTableCell
      colSpan={colSpan}
      disabled={disabled}
    >
      {children}
    </StyledTableCell>
  );
};

export default TableCell;
