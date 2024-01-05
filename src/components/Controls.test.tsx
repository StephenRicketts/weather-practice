import { render, screen } from "@testing-library/react";

test("weather button renders", () => {
  const weatherButton = screen.getByRole("button");
  console.log("this is button", weatherButton);
  expect(weatherButton).toBeInTheDocument();
});
