import React from 'react';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '../'

afterEach(cleanup)

describe('Photlist is rendering', () => {
    it('renders', () => {
        render(<PhotoList />);
    })

    // eslint-disable-next-line jest/no-identical-title
    it('renders', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot()
    });
});