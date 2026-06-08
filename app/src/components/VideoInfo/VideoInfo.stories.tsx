import type { Meta, StoryObj } from "@storybook/react";
import { VideoInfo } from "./VideoInfo";

const meta: Meta<typeof VideoInfo> = {
  title: "Components/VideoInfo",
  component: VideoInfo,
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
  args: {
    nickname: "@kyrieirving",
    comment: "What a dunk! #dunk #beastmode fnsfs onsdfod",
    trackName: "Knife Talk",
    artistName: "Drake ft. 21 Savage",
  },
};

export const WithMedia: Story = {
  args: {
    nickname: "@lebronjames",
    comment: "That crossover tho 🔥 #basketball #skills",
    trackName: "Rich Flex",
    artistName: "Drake & 21 Savage",
    userpic: "https://i.pravatar.cc/40?img=3",
    coverUrl: "https://picsum.photos/32/32?random=5",
  },
};
