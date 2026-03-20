import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
const CartWidgetRI = (props)=> {
   console.log('CartWidget')
    return(
        <div>
           <BsCart4 fontSize={'1.5rem'}/>
           <Badge bg="danger">{props.compras}</Badge>
        </div>
    )
}

export default CartWidgetRI