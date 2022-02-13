/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe("Contact component", () => {
    it('renders', () => {
        render(<Contact />)
    });

    it('matches snapshot', () => {
        const {asFragment} = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
    });
});

describe("Contact me is visible", () => {
    it("Inserts text into h1", () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
    });
});

describe("Submit button is visible", () => {
    it("Submit inserted into button", () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId("submit")).toHaveTextContent("Submit");
    });
});

