
import {useState} from "react"

const ItemCount = ({stock})=> {
    
    const [count, setCount]=useState(1)
  


    const sumar = ()=>{
        if(count < stock){

            setCount(count + 1)
        }
    }
     const restar = ()=>{
        if(count > 0){
      
            setCount(count - 1)
        }
    }
  
    return(
         <div className="counter-container">
            <div className="counter-controls">

            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="counter-value">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
            </div>
            <button  className="btn btn-primary buy-btn" >Comprar</button>
        </div>
    )
}

export default ItemCount