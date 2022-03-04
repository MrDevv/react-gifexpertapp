
import React from 'react'

export const GrifGridItem = ({id, url, title}) => {
    
    return (     
        <div className='card animate__animated animate__bounceInUp'>
            <img src={url}></img>
            <h2 className='title'>{title}</h2>
        </div>
  )
}
