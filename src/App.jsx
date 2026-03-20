import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"
import NavBarRB from './components/NavBarRB';
import ItemCount from './components/ItemCount';
function App() {
 console.log('App')
  return (
    <div>
      <NavBarRB/>
     <ItemListContainer saludo="Hola soy una prop" greeting='Bienvenidos a mi Shop!'/>
     <ItemCount/>
    </div>
  )
}

export default App
