/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";
import type { StyledTableHeaderProps, TableHeaderProps } from "./Table.types";

const StyledTableHeader = styled.thead<StyledTableHeaderProps>`
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#1ea7fd")};
  color: #fff;
  font-weight: 600;
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled }) => {
  return <StyledTableHeader disabled={disabled}>{children}</StyledTableHeader>;
};

export default TableHeader;
