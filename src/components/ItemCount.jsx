//1. Importar el hook de react
import {useState, useEffect} from "react"

const ItemCount = ()=> {
    
    //2. declaramos el hook
    //const [variableDeEstado, FuncionModificadora]= useState(valorInicial)
    const [count, setCount]=useState(1)
    const [compra, setCompra]= useState(false)



    const sumar = ()=>{
        setCount(count + 1)
    }
     const restar = ()=>{
        if(count > 0){
        //puedo hacer condiciona la modificacion (NO la declaracion)
            setCount(count - 1)
        }
    }
    const purchase = ()=>[
        setCompra(!compra)
    ]
    console.log('itemCount')


    // useEffect(()=>{
    //     //CODIGO
    //     //FETCH
    //     //TIMER
    //     //CAMBIAR UN ESTADO
    // },[array de dependencias])



    //  SIN ARRAY DE DEPENDENCIAS
    //SE EJECUTA SIEMPRE
    //USO: CASI NUNCA/NUNCA

        useEffect(()=>{
            console.log('ME EJECUTO SIEMPRE')
        })



        //CON ARRAY DE DEPENDENCIAS VACIO
        //SE EJECUTA CUANDO EL COMPONENTE SE MONTA (SE MUESTRA)
        //SE EJECUTA UNA SOLA VEZ
        //USO: CASI SIEMPRE //LLAMADOS A APIS// CARGAR INFO INICIAL
        useEffect(()=>{
            console.log('ME EJECUTO CUANDO MONTA EL COMPONENTE, UNA SOLA VEZ')
        },[])

        //CON EL ARRAY DE DEPENDENCIAS CON DATOS
        //SE EJECUTA CUANDO SE MONTA EL COMPONENTE Y VA A ESTAR A LA ESCUCHA DEL CAMBIO PARA VOLVER A EJECUTARSE
        //USO: CASI SIEMPRE //FILTROS //VALIDACIONES //LOG IN //VOLVER A PEDIR DATOS 
           useEffect(()=>{
            console.log('ME EJECUTO CUANDO MONTA EL COMPONENTE Y SIEMPRE QUE COMPRA CAMBIE', `EL VALOR DE COMPRA ES: ${compra}`)
        },[compra])

    return(
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
            <button className="btn btn-primary" onClick={purchase}>Comprar</button>
        </div>
    )
}

export default ItemCount