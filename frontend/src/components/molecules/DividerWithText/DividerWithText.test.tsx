import { render, screen } from "@testing-library/react";
import DividerWithText from "./DividerWithText";
import { describe, it, expect } from "vitest";

describe("DividerWithText Component", () => {
  it("renders without crashing", () => {
    render(<DividerWithText text="or continue with" />);
    expect(screen.getByText("or continue with")).toBeInTheDocument();
  });

  it("renders the text passed as prop", () => {
    const customText = "Sign in with Google";
    render(<DividerWithText text={customText} />);
    expect(screen.getByText(customText)).toBeVisible();
  });

  it("renders two dividers (before and after text)", () => {
    render(<DividerWithText text="Divider text" />);
    const dividers = screen.getAllByRole("separator");
    expect(dividers).toHaveLength(2);
  });
});