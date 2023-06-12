import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getgifs'
import { GifItem } from './GifItem';

export const GifGrid = ( {category} ) => {

  const [images, setImages, isLoading] = useState ([]);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

   useEffect( () => {
        getImages();
   }, []);

  return (
    <>
        <h3 >{category}</h3>
        {
          isLoading && ( <h2>Cargando...</h2> )
        }

        <div className='card-grid'>
          {
            images.map(image => (
              <GifItem 
                key={image.id}
                //distribuye todas las propiedades de la imagen, asi es mas facil hacer la destructuracion.
                {...image}/>
            ))
          }
        </div>
        
    </>
  )
}
