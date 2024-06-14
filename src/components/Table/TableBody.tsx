/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";
import type { StyledTableBodyProps, TableBodyProps } from "./Table.types";

const StyledTableBody = styled.tbody<StyledTableBodyProps>`
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#f2f2f2")};
  color: #fff;
  font-weight: 600;
`;

const TableBody: React.FC<TableBodyProps> = ({ children, disabled }) => {
  return <StyledTableBody disabled={disabled}>{children}</StyledTableBody>;
};

export default TableBody;
