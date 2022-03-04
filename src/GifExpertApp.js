
import { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    

    return (
        <>
            <h2>GifApp</h2>

            <AddCategory setCategories = { setCategories } />
            
            <hr/>

            <ol>
                    {
                        categories.map( category => {
                            // console.log( 'iterando array' )
                            return <GifGrid
                                        key={ category}
                                        category={ category } 
                                    />
                                    
                        } )
                        
                    }
            </ol>
        </>
    )
}

export default GifExpertApp;