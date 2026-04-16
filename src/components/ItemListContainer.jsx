import { useState, useEffect } from "react"
import { getProducts } from "../mock/asyncData"
import ItemList from "./ItemList"
const ItemListContainer = ({greeting, saludo})=> {
    
    const [data, setData]= useState([])

    useEffect(()=>{
       
        getProducts()
        .then((res)=> setData(res))
        .catch((error)=> console.log(error)) 
    }
   
    ,[])
     console.log(data)
    
    console.log('ItemListContainer')
  
    return(
        <div>
            <h1>{greeting}</h1>
          
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer

