import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import { AddCategory } from "../../components/AddCategory";
import userEvent from "@testing-library/user-event";

describe('Pruebas en <AddCategory />', () => {

    const setCategoriesTest = jest.fn(); 
    // este es como una simple funcion vacia () => {} pero mejor
    let container = null;

    beforeEach(() => {
        const {container: temp} = render(<AddCategory setCategories={setCategoriesTest}/>);
        container = temp;
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('debe mostrarse correctamente', () => {

        expect(container).toMatchSnapshot();

    })

    test('debe capturar correctamente el input', () => {

        const inputTest = 'Hallo world'
        const input = screen.getByRole('textbox');
        //userEvent.type(input, inputTest); // direct way to do it
        userEvent.keyboard(inputTest); 
        // textbox not selected? input not recorded
        // added autoFocus to the input!

        expect( input ).toHaveValue( inputTest );
    })

    test('no debe de postear la forma', () => {

        userEvent.keyboard('{enter}'); // it works! :o
        expect( setCategoriesTest ).not.toHaveBeenCalled();

    })

    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        
        userEvent.keyboard('Super test{enter}');
        // expect( setCategoriesTest ).toHaveBeenCalled();
        expect( setCategoriesTest ).toHaveBeenCalledTimes( 1 );
        expect( screen.getByRole('textbox') ).toHaveValue('');

    })
})