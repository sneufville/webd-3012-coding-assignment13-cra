/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */

import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: "UIGarden/Dropdown",
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

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    disabled: false,
    options: [
      {
        label: "Option One",
        value: "opt-1",
      },
      {
        label: "Option Two",
        value: "opt-2",
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      {
        label: "Option One",
        value: "opt-1",
      },
      {
        label: "Option Two",
        value: "opt-2",
      },
    ],
  },
};
