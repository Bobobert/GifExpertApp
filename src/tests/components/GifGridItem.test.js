import { getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import {GifGridItem} from "../../components/GifGridItem";

describe('Tests for the GifGridItem component', () => {

    let container = null;
    const idTest = 'A1D0';
    const titleTest = 'Test title';
    const urlTest = 'https://localhost/something.jpg';

    beforeEach(() => {
        const {container: temp} = render(<GifGridItem id={idTest} title={titleTest} url={urlTest}/>);
        container = temp; // didn't found an easier way to unpack this
    })

    afterEach(() => {
        // cleanup is already automatic.
    })

    test('simple snapshot', () => {
        expect( container ).toMatchSnapshot();
    })

    test('debe tener la imagen igual al url y alt de las propiedades', () => {
        expect( screen.getByRole('img') ).toContainHTML( titleTest );
    })

    test('debe tener la clase animate__fadeInDown', () => {

        // two ways of doing it

        expect( screen.getByTestId('GifGridItem'))
            .toHaveClass('animate__animated animate__fadeInDown');
        expect( container.firstChild )
            .toHaveClass('animate__animated animate__fadeInDown');


    }) //enzyme test things so different to the RTL, which tries to be
    // more like just an user, interacting with the DOM by Queries.

})