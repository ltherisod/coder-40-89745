import "../css/Navbar.css"
// PARA IMAGEWNES EN SRC TENGO QUE IMPORTARLA
import logoReact from '../assets/react.svg'
import CartWidget from "./CartWidget"


const Navbar = ()=>{
    return(
        <nav className='nav-container'>
            <a className="anchor-nav" href="">
                {/* IMAGEN EN PUBLIC (NO MENCIONO PUBLIC) */}
                <img className='logo' alt='logo' src='../logo-shop.png' />
                {/* IMG EN SRC */}
                 {/* <img className='logo' alt='logo' src={logoReact} /> */}
            </a>
            <a className="anchor-nav" href="">Nuevos</a>
            <a className="anchor-nav" href="">Ofertas</a>
            <a className="anchor-nav" href="">Más vendidos</a>
            <CartWidget compras={15}/>
        </nav>
    )
}

export default Navbar