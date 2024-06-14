/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";
import type { StyledTableFooterProps, TableFooterProps } from "./Table.types";

const StyledTableFooter = styled.tfoot<StyledTableFooterProps>`
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#f2f2f2")};
  color: #fff;
  font-weight: 600;
`;

const TableFooter: React.FC<TableFooterProps> = ({ children, disabled }) => {
  return <StyledTableFooter disabled={disabled}>{children}</StyledTableFooter>;
};

export default TableFooter;
