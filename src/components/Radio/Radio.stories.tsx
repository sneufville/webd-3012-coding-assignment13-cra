/**
 * @author  sai
 * created  2024-06-12
 * project  coding-assignment-12-cra
 */

import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "UIGarden/Radio",
  tags: ["autodocs"],
  argTypes: {
    backgroundcolor: {
      control: { type: "color" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    backgroundcolor: "#aac1e4",
    disabled: false,
    labelText: "Default Label",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    labelText: "Disabled Label",
  },
};
