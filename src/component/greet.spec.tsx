import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("renders a name", () => {
      render(<Greet name="Greet" />);
      const textElement = screen.getByText("Hello Greet");
      expect(textElement).toBeInTheDocument();
    });
  });
});
