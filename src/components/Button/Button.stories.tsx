/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "UIGarden/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    titleText: "Default Button Text",
    disabled: false,
  },
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
    },
  },
};

export const Disabled: Story = {
  args: {
    titleText: "Default Disabled Button",
    disabled: true,
  },
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
    },
  },
};
