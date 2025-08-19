import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../Button/Button";

const meta: Meta<typeof Button> = {
  title: "Design System/Atoms/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Click Me",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Click Me",
    color: "secondary",
  },
};
