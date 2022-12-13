import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders title "Sweepstake Generator"', () => {
    render(<App />);
    const linkElement = screen.getByText(/sweepstake generator/i);
    expect(linkElement).toBeInTheDocument();
});
