import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders search button", () => {
	render(<App />);
	const searchBtn = screen.getByText(/search/i);
	expect(searchBtn).toBeInTheDocument();
});
