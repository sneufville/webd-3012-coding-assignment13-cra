/**
 * @author  sai
 * created  2024-06-12
 * project  coding-assignment-12-cra
 */
import type { Meta, StoryObj } from "@storybook/react";
import { HeroImage } from "./index";

const meta: Meta<typeof HeroImage> = {
  component: HeroImage,
  tags: ["autodocs"],
  title: "UIGarden/HeroImage",
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    altText: "Image showing code",
    disabled: false,
    src: "code-hero-img.jpg",
  },
};

export const Disabled: Story = {
  args: {
    altText: "Image showing code (disabled)",
    disabled: true,
    src: "code-hero-img.jpg",
  },
};
