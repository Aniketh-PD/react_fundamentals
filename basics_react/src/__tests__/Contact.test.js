import Contact from "../components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test cases for Contact Component", () => {
  test("should load Contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should cotain two inputboxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });

  test("should have one button with text submit", () => {
    render(<Contact />);
    const buttonText = screen.getByText("Submit");
    expect(buttonText).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
