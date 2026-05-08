import  {  useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'



const CheckoutRF = () => {
  
  const [loading, setLoading]=useState(false)
  const [orderId, setOrderId]= useState('')
  const {cart, total, totalConImp, clear}= useContext(CartContext)
  const {register, handleSubmit, formState:{errors}, getValues}=useForm()
  

console.log('errores', errors)
const terminarCompra = (data)=> {
   const {name, lastname, address, email}=data
        setLoading(true)
        let order ={
        comprador:{name, lastname, address, email},
        carrito:cart,
        total:total(),
        totalImp:totalConImp(),
        fecha: serverTimestamp()
        }

    const orderCollection = collection(db, "orders")
    //agregar el doc
    addDoc(orderCollection, order)
    .then((res)=>{
        setOrderId(res.id)
        clear()
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
    
    

}

if(!cart.length && !orderId){
    return <EmptyCart/>
}
  return (
    <>
     {
        orderId 
        ?<div>
            <h2>Muchas gracias por tu compra! 🥳</h2>
            <h3>Su orden es: {orderId}</h3>
            <Link className='btn btn-dark' to='/'>Volver a Home</Link>
        </div>
        :<div>
        <h1>Complete con sus datos</h1>
      
        <form className='p-4 border rounded shadow-sm bg-light' onSubmit={handleSubmit(terminarCompra)} >
            <input className='form-control' name='name' type='text' placeholder='Ingresa tu nombre' {...register("name", {required:true, minLength:3})}/>
           {errors?.name?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
            {errors?.name?.type === "minLength" && <small style={{color:'red'}}>El nombre es muy corto</small>}
            <input className='form-control' name='lastname' type='text' placeholder='Ingresa tu apellido' {...register("lastname", {required:true, minLength:2})} />
            {errors?.lastname?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
            {errors?.lastname?.type === "minLength" && <small style={{color:'red'}}>El apellido es muy corto</small>}
            <input className='form-control' name='address' type='text' placeholder='Ingresa su direccion' {...register("address", {required:true, minLength:10, maxLength:35})}/>
             {errors?.address?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
            {errors?.address?.type === "minLength" && <small style={{color:'red'}}>Coloque la dirección completa</small>}
            {errors?.address?.type === "maxLength" && <small style={{color:'red'}}>La direccion sobrepasa los 35 caracteres </small>}
            <input className='form-control' name='mail' type='email' placeholder='Ingresa tu correo' {...register("email", {required:true})}/>
             {errors?.email?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
            <input className='form-control' name='secondmail' type='email' placeholder='Repetí tu correo' {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})} />
            {errors?.secondemail?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
             {errors?.secondemail?.type === "equalsMails" && <small style={{color:'red'}}>Los correos no coinciden</small>}
            <button type='submit' className='btn btn-success' disabled={loading}>{loading ? 'Procesando Compra...' :  'Completar Compra'}</button>
        </form>
    </div>
     }
    
    </>
  )
}

export default CheckoutRF