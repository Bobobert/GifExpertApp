import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Pruebas para el <GifGrid />', () => {

    const categoryTest = 'not-a-single-gif-in-this-dasdas';

    test('debe tener un comportamiento nominal(matchSnapshot)', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const {container} = render(<GifGrid category={categoryTest} />);
        //screen.debug();
        //console.log( screen.queryByText(/cargando/i), 'erste' );
        expect( container ).toMatchSnapshot();

    })

    test('debe mostrar items cuando se cargan imagenes de useFetchGifs', () => {

        const gifs = [{
            id: 'TEST-ID0',
            url: 'https://localhost/any/any.jpg',
            title: 'Any Test Title',
        },
        {
            id: 'TEST-ID1',
            url: 'https://localhost/any/anything.jpg',
            title: 'Any Test Title but larger',
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const {container} = render(<GifGrid category={categoryTest} />);
        //expect( container ).toMatchSnapshot();
        expect( screen.queryByText(/cargando/i) ).toBeNull();
        screen.findAllByTestId('GifGridItem').then( recieved => {
            expect( recieved.length ).toBe( gifs.length )
        });


    })

})