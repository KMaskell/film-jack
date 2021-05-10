import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../test-utils";
import HomePage from "@pages/index";

describe("HomePage", () => {
	it("should render the heading", () => {
		render(<HomePage />);

		const heading = screen.getByText(
			/Welcome, no-one's signed in at the moment.../i
		);

		expect(heading).toBeInTheDocument();
	});

	it("should render a Login button", () => {
		render(<HomePage />);

		expect(screen.getByText("Login")).toExist;
	});
});
