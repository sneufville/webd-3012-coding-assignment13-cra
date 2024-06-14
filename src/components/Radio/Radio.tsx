/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";
import type { RadioProps, StyledRadioProps } from "./Radio.types";
import Text from "../Text/Text";

const RadioContainer = styled.div<{
  disabled?: boolean;
  backgroundColor?: string;
  foregroundColor?: string;
}>`
  align-items: center;
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : props.backgroundColor ?? "#fff")};
  border-radius: 5px;
  color: ${(props) => props.foregroundColor ?? "initial"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  padding: 0.25rem;
  width: fit-content;
`;

const StyledRadio = styled.input.attrs<StyledRadioProps>((props) => ({
  backgroundColor: props.disabled ? "#f5f5f5" : props.backgroundColor ?? "#fff",
  disabled: props.disabled,
  role: "radio",
  type: "radio",
}))`
  background-color: ${(props) => props.backgroundColor};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  width: fit-content;
`;

const Radio: React.FC<RadioProps> = ({
  backgroundColor,
  disabled,
  labelText,
  onChange,
  foregroundColor,
}) => {
  return (
    <RadioContainer
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      <StyledRadio
        backgroundColor={backgroundColor}
        disabled={disabled}
        onChange={onChange}
      />
      <Text
        content={labelText}
        disabled={disabled}
        foregroundColor={foregroundColor}
      />
    </RadioContainer>
  );
};

export default Radio;
