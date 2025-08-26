import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter email",
    value: "",
    onChange: (val: string) => console.log(val),
  },
};
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    value: "",
    onChange: (val: string) => console.log(val),
  },
};
