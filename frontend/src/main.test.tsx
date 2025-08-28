import { describe, it, vi, expect, beforeEach } from "vitest";

const mockRender = vi.fn();

vi.mock("react-dom/client", async () => {
  const actual = await vi.importActual<typeof import("react-dom/client")>(
    "react-dom/client"
  );
  return {
    ...actual,
    createRoot: () => ({ render: mockRender }),
  };
});

beforeEach(() => {
  document.body.innerHTML = `<div id="root"></div>`;
  mockRender.mockClear();
});

describe("main.tsx", () => {
  it("should call createRoot and render the app", async () => {
    await import("./main");

    expect(mockRender).toHaveBeenCalledTimes(1);
  });
});
