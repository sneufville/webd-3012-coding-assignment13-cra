/**
 * @author  sai
 * created  2024-06-12
 * project  coding-assignment-12-cra
 */

import React from "react";
import styled from "styled-components";
import type { ImageProps, StyledImageProps } from "./Image.types";

const StyledImage = styled.img.attrs<StyledImageProps>((props) => ({
  "data-testid": props["data-testid"] ?? "ui-garden-image",
}))`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "")};
  filter: brightness(${(props) => (props.disabled ? 80 : 100)}%);
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition-duration: 300ms;
`;

const Image: React.FC<ImageProps> = ({ altText, disabled, src, testId }) => {
  return (
    <StyledImage
      alt={altText}
      data-testid={testId}
      disabled={disabled}
      src={src}
    />
  );
};

export default Image;
