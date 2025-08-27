import type { Meta, StoryObj } from "@storybook/react-vite";
import DividerWithText from "./DividerWithText";

const meta: Meta<typeof DividerWithText> = {
    title: 'Molecules/DividerWithText/DividerWithText',
    component: DividerWithText
}

export default meta;

type Story = StoryObj<typeof DividerWithText>

export const Default: Story = {
    args: {
        text: 'Or',
    },
};

export const Option: Story = {
    args: {
        text: 'Choose',
    },
};