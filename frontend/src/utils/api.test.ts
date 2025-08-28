import { describe, it, expect, vi } from "vitest";
import axios from "axios";
import api from "./api";

// Mock axios.create
vi.mock("axios", () => {
  return {
    default: {
      create: vi.fn(() => ({
        get: vi.fn(),
        post: vi.fn(),
        put: vi.fn(),
        delete: vi.fn(),
      })),
    },
  };
});

describe("api instance", () => {
  it("should call axios.create with the correct baseURL", () => {
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: "http://localhost:5000",
    });
  });

  it("should have HTTP methods defined", () => {
    expect(api).toHaveProperty("get");
    expect(api).toHaveProperty("post");
    expect(api).toHaveProperty("put");
    expect(api).toHaveProperty("delete");
  });
});
