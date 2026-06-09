import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "video",
      values: [{ name: "video", value: "#1a1a2e" }],
    },
  },
  argTypes: {
    iconBg: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Rookie",
    iconBg: "#0000FF",
  },
};

export const TeamPlayer: Story = {
  args: {
    name: "Team Player",
    iconBg: "#1a7f37",
  },
};

export const AnkleBreaker: Story = {
  args: {
    name: "Ankle Breaker",
    iconBg: "#ff4500",
  },
};
