import { describe, expect, it } from "vitest";
import ".";

describe("HelloWorld", () => {
  it("should show name props", async () => {
    // Setup
    document.body.innerHTML = "<hello-world name='Test'></hello-world>";
    await customElements.whenDefined("hello-world");

    // Action
    const helloWorldElement = document.body.querySelector("hello-world");
    const actual = helloWorldElement?.shadowRoot?.querySelector("p")?.textContent;

    // Assert
    expect(actual).toBe("Hello, Test!");
  });
});