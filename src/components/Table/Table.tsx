/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";

import type { StyledTableProps, TableProps } from "./Table.types";

const StyledTable = styled.table.attrs<StyledTableProps>((props) => ({
  "data-testid": props["data-testid"] ?? "ui-garden-table",
}))`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 1rem;
`;

const Table: React.FC<TableProps> = ({ disabled, children, testId }) => {
  return (
    <StyledTable
      disabled={disabled}
      data-testid={testId}
    >
      {children}
    </StyledTable>
  );
};

export default Table;
