import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState( defaultCategories );

    // const handleAdd = () => {
    //     //setCategories(categories.concat(['algo']));
    //     setCategories( ['Algo', ...categories] ); // con el uso del spread
    // }

    // return <>
    //   <h2>GifExpertApp</h2>
    //   <AddCategory setCategories={ setCategories }/>
    //   <hr/>

    //     <button> Agregar </button>

    //   <ol>
    //       {
    //           categories.map( category => {
    //               return <li key={category}> {category} </li>
    //           })
    //       }
    //   </ol>
    // </>;

    return <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr/>

        {/* <button> Agregar </button> */}

      <ol>
          {
              categories.map( category => 
                (<GifGrid 
                        key={ category }
                        category={category} 
                />))
          }
      </ol>
    </>;
  };