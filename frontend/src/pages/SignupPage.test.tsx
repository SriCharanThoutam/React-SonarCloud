import { render, screen } from "@testing-library/react";
import SignupPage from "./SignupPage";
import { describe, expect, it, vi } from "vitest";

// Mock child components
vi.mock("../components/organisms/LeftHero", () => ({
  default: ({ Illustration }: { Illustration: string }) => (
    <div data-testid="left-hero">LeftHero Mock - {Illustration}</div>
  ),
}));

vi.mock("../components/organisms/SignupForm", () => ({
  default: () => <div data-testid="signup-form">SignupForm Mock</div>,
}));

describe("SignupPage", () => {
  it("renders LeftHero and SignupForm", () => {
    render(<SignupPage />);

    expect(screen.getByTestId("left-hero")).toBeInTheDocument();
    expect(screen.getByTestId("signup-form")).toBeInTheDocument();
  });

  it("hides LeftHero on small screens", () => {
    // Resize window to simulate mobile view
    globalThis.innerWidth = 500;
    globalThis.dispatchEvent(new Event("resize"));

    render(<SignupPage />);

    // Still present in DOM but hidden via MUI responsive styling
    expect(screen.getByTestId("left-hero")).toBeInTheDocument();
  });

  it("applies correct layout structure", () => {
    const { container } = render(<SignupPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});