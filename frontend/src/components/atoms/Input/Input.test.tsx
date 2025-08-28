import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Input from "./Input";

describe("Input", () => {
  it("renders with default props", () => {
    render(<Input value="" onChange={() => {}} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text"); // default type
  });

  it("renders with custom placeholder", () => {
    render(<Input value="" placeholder="Enter email" onChange={() => {}} />);
    expect(screen.getByPlaceholderText(/enter email/i)).toBeInTheDocument();
  });

  it("calls onChange when typing", () => {
    const handleChange = vi.fn();
    render(<Input value="" placeholder="Type here" onChange={handleChange} />);
    const input = screen.getByPlaceholderText(/type here/i);
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalledWith("Hello");
  });

  it("renders with a password type", () => {
    render(
      <Input
        type="password"
        value=""
        placeholder="Enter password"
        onChange={() => {}}
      />
    );
    const input = screen.getByPlaceholderText(/enter password/i);
    expect(input).toHaveAttribute("type", "password");
  });

  it("displays the correct value", () => {
    render(<Input value="Pre-filled" onChange={() => {}} />);
    const input = screen.getByDisplayValue(/pre-filled/i);
    expect(input).toBeInTheDocument();
  });
});
