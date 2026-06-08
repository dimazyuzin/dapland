import type { Meta, StoryObj } from "@storybook/react";
import { Icon, type IconName } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#111111" }],
    },
  },
  argTypes: {
    name: {
      control: "select",
      options: [
        "ball",
        "discover",
        "hall",
        "profile",
        "share",
        "hoot",
        "flash",
        "rebound",
        "location",
      "add",
      ] satisfies IconName[],
    },
    size: { control: { type: "range", min: 16, max: 64, step: 4 } },
    color: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "ball",
    size: 24,
    color: "#ffffff",
  },
};

export const AllIcons: Story = {
  render: () => {
    const icons: IconName[] = [
      "ball",
      "discover",
      "hall",
      "profile",
      "share",
      "hoot",
      "flash",
      "rebound",
      "location",
      "add",
    ];
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          padding: "32px",
          background: "#111111",
          borderRadius: "12px",
        }}
      >
        {icons.map((name) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Icon name={name} size={28} color="#ffffff" />
            <span style={{ color: "#666", fontSize: "11px", fontFamily: "monospace" }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        padding: "24px",
        background: "#111111",
        borderRadius: "12px",
      }}
    >
      {[16, 20, 24, 32, 40, 48].map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <Icon name="ball" size={size} color="#ffffff" />
          <span style={{ color: "#666", fontSize: "11px", fontFamily: "monospace" }}>{size}</span>
        </div>
      ))}
    </div>
  ),
};
