import type { Meta, StoryObj } from "@storybook/react";
import { ActionsPanel } from "./ActionsPanel";

const meta: Meta<typeof ActionsPanel> = {
  title: "Components/ActionsPanel",
  component: ActionsPanel,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "video",
      values: [{ name: "video", value: "#1a1a2e" }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ position: "relative", height: "100vh" }}>
      <ActionsPanel
        reboundCount="Rebound"
        shakeLabel="Shake"
        hootCount="1.2K"
        shareLabel="Share"
      />
    </div>
  ),
};

export const WithCounts: Story = {
  render: () => (
    <div style={{ position: "relative", height: "100vh" }}>
      <ActionsPanel
        reboundCount={48}
        shakeLabel="Shaked"
        hootCount="3.4K"
        shareLabel="Share"
      />
    </div>
  ),
};
