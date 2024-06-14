/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */
import React from "react";
import styled from "styled-components";
import type { LabelProps, StyledLabelProps } from "./Label.types";

/**
 * @function Label
 * @param labelText
 * @constructor
 */
const StyledLabel = styled.label<StyledLabelProps>`
  align-items: center;
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : props.backgroundColor ?? "#1ea7fd")};
  border-color: #1ea7fd;
  border-radius: 5px;
  border-width: 1px;
  color: ${(props) => (props.disabled ? "#999" : props.foregroundColor ?? "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  transition-duration: 200ms;
  width: fit-content;
`;

const Label: React.FC<LabelProps> = ({
  backgroundColor,
  disabled,
  foregroundColor,
  labelText,
  iconElement,
}) => {
  return (
    <StyledLabel
      backgroundColor={backgroundColor}
      disabled={disabled}
      foregroundColor={foregroundColor}
    >
      {iconElement}
      {labelText}
    </StyledLabel>
  );
};

export default Label;
