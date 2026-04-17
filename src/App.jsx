import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from "./components/ItemListContainer"
import NavBarRB from './components/NavBarRB';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';

function App() {
 console.log('App')


  return (
    <BrowserRouter>
      <NavBarRB/> 
      <Routes>
        <Route path='/' element={<ItemListContainer saludo="Hola soy una prop" greeting='Bienvenidos a mi Shop!'/>}/>
         <Route path='/category/:type' element={<ItemListContainer  greeting='Estas en la categoría '/>}/>
        <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>  
    </BrowserRouter>
  )
}

export default App
