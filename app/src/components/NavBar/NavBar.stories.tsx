import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavBar, type NavTab } from "./NavBar";

const meta: Meta<typeof NavBar> = {
  title: "Components/NavBar",
  component: NavBar,
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
  render: () => {
    const [active, setActive] = useState<NavTab>("court");
    return (
      <div style={{ position: "relative", height: "100vh", background: "#1a1a2e" }}>
        <NavBar active={active} onTabChange={setActive} />
      </div>
    );
  },
};

export const CourtActive: Story = { args: { active: "court" } };
export const CommunityActive: Story = { args: { active: "community" } };
export const AddActive: Story = { args: { active: "add" } };
export const HallActive: Story = { args: { active: "hall" } };
export const ProfileActive: Story = { args: { active: "profile" } };
