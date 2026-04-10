import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from "./components/ItemListContainer"
import NavBarRB from './components/NavBarRB';
import ItemCount from './components/ItemCount';
import ComponentFetch from './examples/ComponentFetch';
import { withLogging } from './hocs/withLogging';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
 console.log('App')

//  const ItemListContHOC = withLogging(ItemListContainer)
  return (
    <div>
      <NavBarRB/>
      {/* <ComponentFetch/> */}
      {/* <ItemListContHOC saludo="Hola soy una prop" greeting='Bienvenidos a mi Shop!'/> */}
     <ItemListContainer saludo="Hola soy una prop" greeting='Bienvenidos a mi Shop!'/>
     <ItemDetailContainer/>
      {/* <ItemCount/> */}
    </div>
  )
}

export default App
