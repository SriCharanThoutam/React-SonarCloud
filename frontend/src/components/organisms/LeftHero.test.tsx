import { render, screen } from "@testing-library/react";
import LeftHero from "./LeftHero";
import theme from "../../theme";
import { describe, it, expect, vi } from "vitest";

vi.mock("../atoms/Logo/Logo", () => ({
  default: () => <div data-testid="mock-logo">Mock Logo</div>
}));

describe("LeftHero Component", () => {
  const mockIllustration = "test-illustration.svg";

  it("renders without crashing", () => {
    render(<LeftHero Illustration={mockIllustration} />);
    expect(screen.getByTestId("mock-logo")).toBeInTheDocument();
  });

  it("renders the illustration with correct alt text", () => {
    render(<LeftHero Illustration={mockIllustration} />);
    const illustrationImg = screen.getByAltText("Illustration") as HTMLImageElement;
    expect(illustrationImg).toBeInTheDocument();
    expect(illustrationImg.tagName).toBe("IMG");
    expect(illustrationImg.src).toBeTruthy();
  });

  it("applies the correct background color from theme", () => {
    const { container } = render(<LeftHero Illustration={mockIllustration} />);
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveStyle(`background-color: ${theme.palette.secondary.main}`);
  });
});