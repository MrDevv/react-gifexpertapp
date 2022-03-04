
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GrifGridItem } from './GrifGridItem';

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);

  return (
    <>
        <h3 className='title_category'>{category}</h3>

        <p className='loading animate__animated animate__flash'>{loading && 'Cargando...'}</p> 

        <div className='content'>
            {
                data.map( (img) => (
                    <GrifGridItem 
                        key={img.id}
                        { ...img }
                    />
                )
                )
            }
            {
                
            }
        </div>
            
    </>
  )
}
