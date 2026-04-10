import { useState, useEffect } from "react"
import { getProducts } from "../mock/asyncData"
import ItemList from "./ItemList"
import { withLogging } from "../hocs/withLogging"
const ItemListContainer = ({greeting, saludo})=> {
    //1. Decalra un estado para guardar la data de la promse
    const [data, setData]= useState([])

    useEffect(()=>{
        //pedir datos
        getProducts()
        .then((res)=> setData(res))//tratando la promesa y guardando la data
        .catch((error)=> console.log(error)) //atrapando el error
    }
    //array de dependencias vacio para que se ejecute una vez
    ,[])
     console.log(data)
    
    console.log('ItemListContainer')
    const ItemListHOC = withLogging(ItemList)
    return(
        <div>
            <h1>{greeting}</h1>
            <h2>{saludo}</h2>
            {/* {data.map((prod)=> <p key={prod.id}>{prod.name}</p>)} */}
            <ItemListHOC data={data}/>
        </div>
    )
}

export default ItemListContainer

