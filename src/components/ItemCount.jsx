
import {useState} from "react"

const ItemCount = ()=> {
    
    const [count, setCount]=useState(1)
  


    const sumar = ()=>{
        setCount(count + 1)
    }
     const restar = ()=>{
        if(count > 0){
      
            setCount(count - 1)
        }
    }
  
    return(
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
            <button className="btn btn-primary" >Comprar</button>
        </div>
    )
}

export default ItemCount