/**
 * @author  sai
 * created  2024-06-12
 * project  coding-assignment-12-cra
 */
import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta: Meta<typeof Image> = {
  component: Image,
  title: "UIGarden/Image(img)",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    altText: "test-image",
    src: "eat-sleep-code-repeat.jpg",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    altText: "disabled image",
    src: "eat-sleep-code-repeat.jpg",
    disabled: true,
  },
};
