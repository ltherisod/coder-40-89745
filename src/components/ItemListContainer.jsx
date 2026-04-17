import { useState, useEffect } from "react"
import { getProducts } from "../mock/asyncData"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
const ItemListContainer = ({greeting, saludo})=> {
    
    const [data, setData]= useState([])
    const {type}= useParams()

    useEffect(()=>{
       
        getProducts()
        .then((res)=> {
            if(type){
                //filtrar
                setData(res.filter((prod)=> prod.category === type))
            }else{
                setData(res)
            }
        })
        .catch((error)=> console.log(error)) 
    }
   
    ,[type])
     console.log(type)
    
    console.log('ItemListContainer')
  
    return(
        <div>
            <h1>{greeting}</h1>
          
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer

