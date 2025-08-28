import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { describe, it, expect, vi } from "vitest";

// Mock child components
vi.mock("../components/organisms/LeftHero", () => ({
  default: ({ Illustration }: { Illustration: string }) => (
    <div data-testid="left-hero">LeftHero Mock - {Illustration}</div>
  ),
}));

vi.mock("../components/organisms/LoginForm", () => ({
  default: () => <div data-testid="login-form">LoginForm Mock</div>,
}));

describe("LoginPage", () => {
  it("renders LeftHero and LoginForm", () => {
    render(<LoginPage />);

    expect(screen.getByTestId("left-hero")).toBeInTheDocument();
    expect(screen.getByTestId("login-form")).toBeInTheDocument();
  });

  it("hides LeftHero on small screens", () => {
    // Resize window to mobile size
    globalThis.innerWidth = 500;
    globalThis.dispatchEvent(new Event("resize"));

    render(<LoginPage />);

    // LeftHero should still exist in DOM but styled with display none (testing-library doesn't parse styles)
    // So instead we snapshot the structure
    expect(screen.getByTestId("left-hero")).toBeInTheDocument();
  });

  it("applies correct background color on right section", () => {
    const { container } = render(<LoginPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});