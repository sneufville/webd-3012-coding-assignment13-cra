/**
 * @author  sai
 * created  2024-06-12
 * project  coding-assignment-12-cra
 */
import React from "react";
import styled from "styled-components";
import type { HeroImageProps, StyledHeroImageProps } from "./HeroImage.types";

const StyledHeroImage = styled.img.attrs<StyledHeroImageProps>((props) => ({
  "data-testid": props["data-testid"] ?? "ui-garden-hero-image",
}))`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  height: 400px;
  object-fit: ${(props) => props.objectFit ?? "cover"};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  width: 100%;
`;

const HeroImage: React.FC<HeroImageProps> = ({ disabled, objectFit, src, testId, altText }) => {
  return (
    <StyledHeroImage
      disabled={disabled}
      objectFit={objectFit}
      src={src}
      alt={altText}
      data-testid={testId}
    />
  );
};

export default HeroImage;
