import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from "./components/ItemListContainer"
import NavBarRB from './components/NavBarRB';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
 console.log('App')


  return (
    <>
      <NavBarRB/>   
     <ItemListContainer saludo="Hola soy una prop" greeting='Bienvenidos a mi Shop!'/>
     <ItemDetailContainer/>
    </>
  )
}

export default App
