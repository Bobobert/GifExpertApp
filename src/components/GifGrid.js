import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    //const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );

    // useEffect(() => {
    //     getGifs();
    // }, []); // este snip sirve para bloquear la ejecucion de funciones
    // cuando son ejecutadas/ renderiadas por primera vez, al menos.
    // El problema está en que todo  este componente se ejecuta cuando se realiza
    // un cambio.

    // useEffect( () => {
    //     getGifs( category ).then( setImages );
    // }, [ category ]); // run just once for []
    // // or when category changes [ category ]
    
    return <>
            <h3> { category } </h3>
            { loading && <p className='animate__animated animate__shakeY'>Cargando . . .</p> }
            <div className='card-grid'>
                {images.map( img => 
                    <GifGridItem key={img.id}{...img} />
                    )}
            </div>
        </>
}
