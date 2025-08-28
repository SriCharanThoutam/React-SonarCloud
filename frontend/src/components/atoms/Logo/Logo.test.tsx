import { render, screen } from "@testing-library/react";
import Logo from "./Logo";
import { describe, it, expect } from "vitest";

describe("Logo Component", () => {
  it("renders without crashing", () => {
    render(<Logo />);
    expect(screen.getByText(/Seeder/i)).toBeInTheDocument();
  });

  it("renders the logo image with correct alt text", () => {
    render(<Logo />);
    const logoImg = screen.getByAltText("Seeder logo") as HTMLImageElement;
    expect(logoImg).toBeInTheDocument();
    expect(logoImg.tagName).toBe("IMG");
    expect(logoImg.src).toContain("data:image/svg+xml");
  });

  it("renders the company name 'Seeder'", () => {
    render(<Logo />);
    expect(screen.getByText("Seeder")).toBeVisible();
  });
});