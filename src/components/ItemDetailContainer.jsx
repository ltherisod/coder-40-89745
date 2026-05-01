import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detail, setDetail]= useState({})
    const [loading, setLoading] = useState(true)
    const [invalid, setInvalid] = useState(null)
// const param= useParams()
// console.log(param, 'Param')
const {id}= useParams()

//FIREBASE

    useEffect(()=>{
        const docRef = doc(db, "items", id) //referencia
        getDoc(docRef)//traer el doc
        .then((res)=>{
            //validar si existe en firebase
            if(res.data()){
                setDetail({id:res.id, ...res.data()})
            }else{
                setInvalid(true)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[id])

//PROMISE/MOCK
    // useEffect(()=>{
    //     getOneProduct(id)
    //     .then((res)=> setDetail(res))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // },[id])
    if(invalid){
        return(
            <div>
                El producto no existe
            </div>
        )
    }
  return (
    <>
        {loading ? <Loader text='Cargando detalle...'/>:<ItemDetail detail={detail}/>}
    </>
  )
}

export default ItemDetailContainer