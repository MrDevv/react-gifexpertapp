
import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs(category)
            .then( img => {
                setTimeout(() => {
                    console.log( 'data recibida' );
                    setState({
                        data: img,
                        loading: false
                    })
                }, 3000);

            })

            // console.log( 'dentro del useEffect' );

    }, [])

    // console.log( state );

    // console.log( 'saliendo de la funcion' );
    
    

    return state;
}