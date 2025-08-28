import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect } from "vitest";

describe("App", () => {
  it("renders children through Outlet", () => {
    render(
      <MemoryRouter initialEntries={["/test"]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/test" element={<div>Test Page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Test Page")).toBeInTheDocument();
  });
});
