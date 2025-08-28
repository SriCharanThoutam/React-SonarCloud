import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SignupForm from "./SignupForm";
import { SIGNUP_TEXTS } from "../../utils/constants";
import api from "../../utils/api";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../utils/api", () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
  },
}));

const mockedApi = api as unknown as {
  get: ReturnType<typeof vi.fn>;
  post: ReturnType<typeof vi.fn>;
};

const mockAlert = vi.fn();
window.alert = mockAlert;

describe("SignupForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders titles and inputs", () => {
    render(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>
    );

    expect(screen.getByText(SIGNUP_TEXTS.title)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  it("disables sign up button when fields are empty", () => {
    render(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: SIGNUP_TEXTS.signUpButton });
    expect(button).toBeDisabled();
  });

  it("shows error if email already exists", async () => {
    mockedApi.get.mockResolvedValueOnce({ data: [{ email: "test@example.com" }] });

    render(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Your Name"), { target: { value: "Test User" } });
    fireEvent.change(screen.getByPlaceholderText("Email Address"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "password123" } });

    fireEvent.click(screen.getByRole("button", { name: SIGNUP_TEXTS.signUpButton }));

    await waitFor(() => {
      expect(screen.getByText("Email already in use.")).toBeInTheDocument();
    });
  });

  it("creates account and navigates on success", async () => {
    mockedApi.get.mockResolvedValueOnce({ data: [] }); // no existing user
    mockedApi.post.mockResolvedValueOnce({}); // success

    render(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Your Name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByPlaceholderText("Email Address"), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "secret123" } });

    fireEvent.click(screen.getByRole("button", { name: SIGNUP_TEXTS.signUpButton }));

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith("Account created successfully! Please login.");
    });
  });

  it("shows error when API fails", async () => {
    mockedApi.get.mockRejectedValueOnce(new Error("Network error"));

    render(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Your Name"), { target: { value: "Test User" } });
    fireEvent.change(screen.getByPlaceholderText("Email Address"), { target: { value: "fail@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "password123" } });

    fireEvent.click(screen.getByRole("button", { name: SIGNUP_TEXTS.signUpButton }));

    await waitFor(() => {
      expect(screen.getByText("Something went wrong. Please try again.")).toBeInTheDocument();
    });
  });

  it("renders social signup buttons", () => {
    render(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: /google/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /stripe/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /xero/i })).toBeInTheDocument();
  });

  it("renders login link", () => {
    render(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: SIGNUP_TEXTS.logIn })).toBeInTheDocument();
  });
});