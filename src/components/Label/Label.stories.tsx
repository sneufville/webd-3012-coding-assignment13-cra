/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import type { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "UIGarden/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
    },
    foregroundColor: {
      control: { type: "color" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    labelText: "Default Label Text",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    labelText: "Default Disabled Label",
    disabled: true,
  },
};
