import React from "react";
import { render, screen } from "@testing-library/react";
import { Form } from "./form";

test("renders correctly", () => {
  render(<Form />);
  const nameElement = screen.getByRole("textbox",{
    name:'Name'
  });
  expect(nameElement).toBeInTheDocument();
  const bioElement = screen.getByRole("textbox",{
    name:'Bio'
  });
  expect(bioElement).toBeInTheDocument();

  const jobLocationElement = screen.getByRole("combobox");
  expect(jobLocationElement).toBeInTheDocument();

  const termsElement = screen.getByRole("checkbox");
  expect(termsElement).toBeInTheDocument();

  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});
