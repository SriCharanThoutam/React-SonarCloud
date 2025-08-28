import { render, screen, fireEvent } from "@testing-library/react";
import SocialLoginButton from "./SocialLoginButton";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("SocialLoginButton Component", () => {
  const mockOnClick = vi.fn();
  const mockIcon = "test-icon.svg";
  const mockLabel = "Continue with Google";

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it("renders without crashing", () => {
    render(<SocialLoginButton icon={mockIcon} label={mockLabel} onClick={mockOnClick} />);
    expect(screen.getByText(mockLabel)).toBeInTheDocument();
  });

  it("renders the icon with correct alt text", () => {
    render(<SocialLoginButton icon={mockIcon} label={mockLabel} onClick={mockOnClick} />);
    const iconImg = screen.getByAltText(mockLabel) as HTMLImageElement;
    expect(iconImg).toBeInTheDocument();
    expect(iconImg.tagName).toBe("IMG");
    expect(iconImg.src).toContain("test-icon.svg");
  });

  it("calls onClick when button is clicked", () => {
    render(<SocialLoginButton icon={mockIcon} label={mockLabel} onClick={mockOnClick} />);
    const button = screen.getByRole("button", { name: /continue with google/i });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});