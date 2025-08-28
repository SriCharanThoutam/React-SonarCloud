import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LogInButton from "./LogInButton";

describe("LogInButton", () => {
  it("renders with default label", () => {
    render(<LogInButton onClick={() => {}} />);
    expect(screen.getByRole("button", { name: /continue/i })).toBeInTheDocument();
  });

  it("renders with custom label", () => {
    render(<LogInButton label="Log In" onClick={() => {}} />);
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<LogInButton label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button", { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled state", () => {
    const handleClick = vi.fn();
    render(<LogInButton label="Disabled" onClick={handleClick} disabled />);
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies correct color (primary)", () => {
    render(<LogInButton label="Primary Btn" color="primary" onClick={() => {}} />);
    const button = screen.getByRole("button", { name: /primary btn/i });
    expect(button).toHaveClass("MuiButton-containedPrimary");
  });

  it("applies correct color (secondary)", () => {
    render(<LogInButton label="Secondary Btn" color="secondary" onClick={() => {}} />);
    const button = screen.getByRole("button", { name: /secondary btn/i });
    expect(button).toHaveClass("MuiButton-containedSecondary");
  });
});
