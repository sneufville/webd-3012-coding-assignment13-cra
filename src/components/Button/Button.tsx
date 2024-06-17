/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";
import type { ButtonProps, StyledButtonProps } from "./Button.types";

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : props.backgroundColor ?? "#1ea7fd")};
  border-radius: 5px;
  border-color: ${(props) => (props.disabled ? "#999" : props.backgroundColor ?? "#1ea7fd")};
  color: ${(props) => (props.disabled ? "#999" : props.foregroundColor ?? "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 1rem;
  padding: 1rem 0.75rem;
  transition-duration: 200ms;
`;

const Button = ({ backgroundColor, disabled, foregroundColor, titleText }: ButtonProps) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      foregroundColor={foregroundColor}
    >
      {titleText}
    </StyledButton>
  );
};

export default Button;
