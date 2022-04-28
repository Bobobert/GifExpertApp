import "@testing-library/jest-dom";
import {getGifs} from '../../helpers/getGifs';

describe('Pruebas para el helper getGifs', () => {

    test('debe regresar 10 elementos', async() => {

        const gifs = await getGifs('hello');
        expect( gifs.length ).toBe(10);

    })

    test('debe regresar nada a categorias vacias', async() =>  {
        
        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 );
    })
})