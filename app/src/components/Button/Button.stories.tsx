import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#111111" }],
    },
  },
  argTypes: {
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Follow: Story = {
  args: { label: "Follow" },
};
