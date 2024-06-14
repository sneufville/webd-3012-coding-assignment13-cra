/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";
import type { StyledTableRowProps, TableRowProps } from "./Table.types";

const StyledTableRow = styled.tr<StyledTableRowProps>`
  border-bottom: solid 1px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 0.5rem;
`;

const TableRow: React.FC<TableRowProps> = ({ disabled, children }) => {
  return <StyledTableRow disabled={disabled}>{children}</StyledTableRow>;
};

export default TableRow;
