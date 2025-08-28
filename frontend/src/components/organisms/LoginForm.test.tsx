import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "./LoginForm";
import { LOGIN_TEXTS } from "../../utils/constants";
import api from "../../utils/api";

vi.mock("../../utils/api", () => ({
  default: {
    get: vi.fn(),
  },
}));

const mockAlert = vi.fn();
window.alert = mockAlert;

const renderWithRouter = () =>
  render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
  );

describe("LoginForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders titles and subtitles", () => {
    renderWithRouter();
    expect(screen.getByText(LOGIN_TEXTS.title)).toBeInTheDocument();
    expect(screen.getByText(LOGIN_TEXTS.subtitle)).toBeInTheDocument();
  });

  it("updates input values when typing", () => {
    renderWithRouter();
    const emailInput = screen.getByPlaceholderText(
      "Enter your email id"
    ) as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(
      "Enter your password"
    ) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  it("disables login button if email or password is empty", () => {
    renderWithRouter();
    const loginButton = screen.getByRole("button", {
      name: LOGIN_TEXTS.continueButton,
    });
    expect(loginButton).toBeDisabled();
  });

  it("calls API and shows welcome alert on valid credentials", async () => {
    (api.get as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      data: [{ name: "John Doe" }],
    });

    renderWithRouter();

    fireEvent.change(screen.getByPlaceholderText("Enter your email id"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "secret" },
    });

    const loginButton = screen.getByRole("button", {
      name: LOGIN_TEXTS.continueButton,
    });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith("Welcome John Doe!");
    });
  });

  it("shows error when credentials are invalid", async () => {
    (api.get as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      data: [],
    });

    renderWithRouter();

    fireEvent.change(screen.getByPlaceholderText("Enter your email id"), {
      target: { value: "wrong@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "wrongpass" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: LOGIN_TEXTS.continueButton })
    );

    await waitFor(() => {
      expect(
        screen.getByText("Invalid email or password")
      ).toBeInTheDocument();
    });
  });

  it("shows error when API call fails", async () => {
    (api.get as unknown as ReturnType<typeof vi.fn>).mockRejectedValueOnce(
      new Error("Network error")
    );

    renderWithRouter();

    fireEvent.change(screen.getByPlaceholderText("Enter your email id"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "password123" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: LOGIN_TEXTS.continueButton })
    );

    await waitFor(() => {
      expect(
        screen.getByText("Something went wrong. Please try again.")
      ).toBeInTheDocument();
    });
  });

  it("renders social login buttons", () => {
    renderWithRouter();
    expect(
      screen.getByRole("button", { name: /google/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /stripe/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /xero/i })).toBeInTheDocument();
  });

  it("renders sign up link", () => {
    renderWithRouter();
    expect(
      screen.getByRole("link", { name: LOGIN_TEXTS.signUp })
    ).toBeInTheDocument();
  });
});
