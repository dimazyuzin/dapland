import type { Meta, StoryObj } from "@storybook/react";
import { ActionButton } from "./ActionButton";

const meta: Meta<typeof ActionButton> = {
  title: "Components/ActionButton",
  component: ActionButton,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#111111" }],
    },
  },
  argTypes: {
    icon: {
      control: "select",
      options: ["hoot", "rebound", "share", "location", "flash"],
    },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Hoot: Story = {
  args: { icon: "hoot", label: "1.2K" },
};

export const Rebound: Story = {
  args: { icon: "rebound", label: "48" },
};

export const Share: Story = {
  args: { icon: "share" },
};

export const ShareNoLabel: Story = {
  args: { icon: "share" },
};

export const ShakeState: Story = {
  args: { icon: "hoot", label: "Shake" },
};

export const ShakedState: Story = {
  args: { icon: "hoot", label: "Shaked" },
};

export const AllWithLabels: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", padding: "24px", background: "#111" }}>
      <ActionButton icon="hoot" label="1.2K" />
      <ActionButton icon="rebound" label="48" />
      <ActionButton icon="hoot" label="Shake" />
      <ActionButton icon="hoot" label="Shaked" />
    </div>
  ),
};

export const AllIconOnly: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", padding: "24px", background: "#111" }}>
      <ActionButton icon="hoot" />
      <ActionButton icon="rebound" />
      <ActionButton icon="share" />
      <ActionButton icon="location" />
    </div>
  ),
};
