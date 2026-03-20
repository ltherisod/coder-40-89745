//1. Importar el hook de react
import {useState} from "react"

const ItemCount = ()=> {
    //2. declaramos el hook
    //const [variableDeEstado, FuncionModificadora]= useState(valorInicial)
    const [count, setCount]=useState(1)


    console.log('contador')
    const sumar = ()=>{
        setCount(count + 1)
    }
     const restar = ()=>{
        if(count > 0){
        //puedo hacer condiciona la modificacion (NO la declaracion)
            setCount(count - 1)
        }
    }
    return(
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount