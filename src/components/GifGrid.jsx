import React from 'react'
import { getGifs } from '../helpers/getgifs'

export const GifGrid = ( {category} ) => {

   getGifs(category);

  return (
    <>
        <h3 >{category}</h3>
        
    </>
  )
}
