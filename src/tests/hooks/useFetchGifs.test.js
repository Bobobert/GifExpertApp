import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('Pruebas en  el hook useFetchGifs', () => {

    const categoryTest = 'halo kitty';

    test('debe de retornar el estado inicial', () => {

        const {result} = renderHook( () => useFetchGifs( categoryTest ) );
        const {data, loading} = result.current;
        //const {data, loading} = useFetchGifs( categoryTest );

        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();

     })

    // This test is failing rn due to the hooks workings.
    // as the hook is tested it generates function and its state, these  wont
    // survive after a component is unmounted or just unavailable, which is the
    // case in here.

     test('debe de retornar un arreglo de imagenes y loading en falso', async() => {
         
         const { result } = renderHook( () => useFetchGifs( categoryTest ) );
         
         await waitFor(() => {
            const { data, loading } = result.current;
            //console.log(data, loading)
            expect( data ).toHaveLength( 10 );
            expect( loading ).toBeFalsy();
            },
            {timeout:1000, interval:200});

     })


 })