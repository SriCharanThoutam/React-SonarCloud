import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

describe("main.tsx routing", () => {
  const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <LoginPage /> },
        { path: "/signup", element: <SignupPage /> },
      ],
      errorElement: <>404 not found</>,
    },
  ];

  it("renders LoginPage on default route (/)", () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole("heading", { name: /login to seeder/i })
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/enter your email id/i)
    ).toBeInTheDocument();
  });

  it("renders SignupPage on /signup", () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/signup"] });
    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole("heading", { name: /sign up/i })
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/your name/i)
    ).toBeInTheDocument();
  });

  it("renders 404 on unknown route", () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/unknown"] });
    render(<RouterProvider router={router} />);

    expect(screen.getByText("404 not found")).toBeInTheDocument();
  });
});
