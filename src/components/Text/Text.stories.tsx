/**
 * @author  sai
 * created  2024-06-10
 * project  coding-assignment-12-cra
 */
import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "UIGarden/Text",
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

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: "Default Text",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: "Default Disabled Text",
    disabled: true,
  },
};
