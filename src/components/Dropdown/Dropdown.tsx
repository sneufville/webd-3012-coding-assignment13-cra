/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";
import type { DropdownProps, StyledDropdownProps } from "./Dropdown.types";

const StyledDropdown = styled.select<StyledDropdownProps>`
  border-radius: 5px;
  border-width: 1px;
  border-color: ${(props) => (props.disabled ? "#c0c0c0" : "#333")};
  background-color: ${(props) =>
    props.disabled ? "#f4f4f4" : props.backgroundColor ?? "transparent"};
  color: ${(props) => (props.disabled ? "#c0c0c0" : props.foregroundColor ?? "#333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 0.5rem;
`;

const Dropdown: React.FC<DropdownProps> = ({
  backgroundColor,
  disabled,
  foregroundColor,
  options,
  onChange,
}) => {
  return (
    <StyledDropdown
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      disabled={disabled}
      onChange={onChange}
    >
      {options.map((opt, index) => (
        <option
          key={`${index}-${opt.value}`}
          value={opt.value}
        >
          {opt.label}
        </option>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
