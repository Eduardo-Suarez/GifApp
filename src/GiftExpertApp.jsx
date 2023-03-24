import { useState } from "react"
import {AddCategory} from './components/AddCategory'
import { GifGrid } from "./components/GifGrid";


export const GiftExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }
  

  return (
    <>
      {/*TITULO */}
      <h1>GiftExpertApp</h1>

      {/*INPUT */}
      <AddCategory 
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory (value)}
      />
    

      {/*LISTADO DE GIFTS */}
      
       {
        categories.map((category) => {
          return  (
            <GifGrid 
            key={category} 
            category={category}/>
          )
        })
       }
       
      
    </>
  )
}
