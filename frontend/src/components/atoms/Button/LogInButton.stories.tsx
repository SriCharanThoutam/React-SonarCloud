import type { Meta, StoryObj } from "@storybook/react-vite";
import LogInButton from "./LogInButton";

const meta: Meta<typeof LogInButton> = {
  title: "Atoms/Button/LogInButton",
  component: LogInButton,
};
export default meta;

type Story = StoryObj<typeof LogInButton>;

export const Primary: Story = {
  args: {
    label: "Continue",
    color: "primary",
    onClick: () => alert("Clicked!"),
  },
};

export const Secondary: Story = {
  args: {
    label: "Enter",
    color: "secondary",
    onClick: () => alert("Entered!"),
  },
};
