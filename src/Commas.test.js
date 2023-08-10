import React from "react";
import Commas from "./Commas";
import { render, fireEvent } from "@testing-library/react";



// describe("#Commas", () => {
// test("it is a function", () => {
// expect(typeof Commas).toBe("function");
// });
// });

it("renders without crashing-Smoke Test", function () {
  render(<Commas />)
});

it("passes a snapshot", function () {
  const { asFragment } = render(<Commas />)
  expect(asFragment()).toMatchSnapshot();
});

// it("should add commas", function () {
  // const { queryByText, getByLabelText } = render(<Commas />)
  // const input = getByLabelText("Change the Number to a string and add commas:");
  // const btn = queryByText("Submit Numbers")
  // expect(queryByText(",")).not.toBeInTheDocument();
// 
  // fireEvent.change(input, { target: { value: '1000' } });
  // fireEvent.click(btn, { target: { value: '1000' } });
  // const { asFragment } = render(<Commas />)
  // expect(asFragment()).toMatchSnapshot();
  // expect(queryByText(",")).toBeInTheDocument();
// })