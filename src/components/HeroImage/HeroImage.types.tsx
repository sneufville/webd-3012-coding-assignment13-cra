/**
 * @author  sai
 * created  2024-06-12
 * project  coding-assignment-12-cra
 */
import type { DefaultComponentProps, DefaultImageComponentProps } from "../../@types/app";

export type HeroImageObjectFit = "contain" | "cover" | "scale-down" | "fill" | "none";

export type HeroImageProps = DefaultImageComponentProps & {
  /**
   * Optionally set the object fit property for a hero image
   */
  objectFit?: HeroImageObjectFit;
};

export type StyledHeroImageProps = DefaultComponentProps & {
  "data-testid"?: string;
  objectFit?: HeroImageObjectFit;
};
