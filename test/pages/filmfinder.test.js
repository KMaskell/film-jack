import React from "react";
import { render, screen, waitFor, fireEvent } from "../test-utils";
import FilmFinder from "@pages/filmfinder";

const setup = () => {
  const utils = render(<FilmFinder />)
  const input = utils.getByPlaceholderText("Search a film...")
  return {
    input,
    ...utils,
  }
}

describe("FilmFinder", () => {
  it("should render the header", () => {
    render(<FilmFinder />);
    const heading = screen.getByText(/filmjack/i);

    expect(heading).toBeInTheDocument();
  });

  it('renders a search field and submit button', () => {
    const { getByText, getByPlaceholderText } = render(<FilmFinder/>);

    expect(getByPlaceholderText("Search a film...")).toBeInTheDocument();
    expect(getByText("Find My Film!")).toBeInTheDocument();
  });

  it('should allow search field input and show filmcard result on submit', async () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'django'} })

    expect(input.value).toBe('django')

    // fireEvent.click(screen.getByText(/Find my Film!/i));
    // await waitFor(() => screen.getByRole('button')).toHaveAttribute('')

    // expect(container.firstChild).toMatchInlineSnapshot(<DetailsButton/>);
  });
});