import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas sobre el <GifExpertApp />', () => {

    test('debe mostrarse de manera correcta', () => {
        const {container} = render(<GifExpertApp defaultCategories={['Hallo']} />);
        expect( container ).toMatchSnapshot();
    })

    test('debe mostrar categorias correctamente', async() => {

        const categories = ['master chief', 'halo kitty'];

        render(<GifExpertApp defaultCategories={categories} />);

        // screen.findAllByTestId('GifGrid').then( recieved => {
        //     expect( recieved.length ).toBe( categories.length )
        // });

        expect( await screen.findAllByTestId('GifGrid') )
            .toHaveLength( categories.length );
    })

})