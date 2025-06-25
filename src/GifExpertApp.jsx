
import { useState } from "react";
import { GifGrid, AddCategory } from "./components/index";


export function GifExpertApp() {

  const [categories, setCategories] = useState(['Naruto']);

  const onNewCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>Buscador de Gif</h1>

      <AddCategory onNewCategory={onNewCategory} />
     
     
        {
          categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))
        }
    
    </>
  )
}






