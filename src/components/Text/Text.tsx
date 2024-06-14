/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";
import type { StyledTextProps, TextProps } from "./Text.types";

const StyledText = styled.span<StyledTextProps>`
  background-color: ${(props) =>
    props.disabled ? "#f5f5f5" : props.backgroundColor ?? "transparent"};
  color: ${(props) => (props.disabled ? "#c0c0c0" : props.foregroundColor ?? "#333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

const Text: React.FC<TextProps> = ({ backgroundColor, content, disabled, foregroundColor }) => {
  return (
    <StyledText
      backgroundColor={backgroundColor}
      disabled={disabled}
      foregroundColor={foregroundColor}
    >
      {content}
    </StyledText>
  );
};

export default Text;
