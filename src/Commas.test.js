import React from "react";
import Commas from "./Commas";
import { render, fireEvent } from "@testing-library/react";



describe("#Commas", () => {
  test("it is a function", () => {
    expect(typeof Commas).toBe("function");
  });
});
