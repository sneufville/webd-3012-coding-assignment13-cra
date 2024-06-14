/**
 * @author  sai
 * created  2024-06-12
 * project  coding-assignment-12-cra
 */

import type { DefaultComponentProps, DefaultImageComponentProps } from "../../@types/app";

export type ImageProps = DefaultImageComponentProps & {};
export type StyledImageProps = DefaultComponentProps & { "data-testid"?: string };
