import type { Meta, StoryObj } from "@storybook/react-vite";
import SocialLoginButton from "./SocialLoginButton";
import GoogleSvg from "../../../assets/google.svg"
import StripeSvg from "../../../assets/stripe.svg"
import XeroSvg from "../../../assets/xero.svg"

const meta: Meta<typeof SocialLoginButton> = {
    title: 'Molecules/SocialLoginButton/SocialLoginButton',
    component: SocialLoginButton,
    tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<typeof SocialLoginButton>

export const Google: Story = {
    args: {
        icon: GoogleSvg,
        label: "Google",
        onClick: () => alert("Google login clicked!")
    }
}

export const Stripe: Story = {
    args: {
        icon: StripeSvg,
        label: "Stripe",
        onClick: () => alert("Stripe login clicked!")
    }
}

export const Xero: Story = {
    args: {
        icon: XeroSvg,
        label: "Xero",
        onClick: () => alert("Xero login clicked!")
    }
}
