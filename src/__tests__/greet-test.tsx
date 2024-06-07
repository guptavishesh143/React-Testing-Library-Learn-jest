import { render, screen } from "@testing-library/react";
import { Greet } from '../component/greet/greet';

describe("Greet", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    it("renders a name", () => {
      render(<Greet name="Greet" />);
      const textElement = screen.getByText("Hello Greet");
      expect(textElement).toBeInTheDocument();
    });
  });
});
