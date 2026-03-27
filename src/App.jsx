import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"
import NavBarRB from './components/NavBarRB';
import ItemCount from './components/ItemCount';
import DinamicComponent from './examples/DinamicComponent';
import ComponentWithChildren from './examples/ComponentWithChildren';
function App() {
 console.log('App')
  return (
    <div>
      <NavBarRB/>
     <ItemListContainer saludo="Hola soy una prop" greeting='Bienvenidos a mi Shop!'/>
      <ItemCount/>
     {/* <DinamicComponent
     title='Amsiedad'
     description='srasa sarasa sarasa'
     button='Shop!'
     image="https://i.postimg.cc/B6DXgwsc/whatdoyoumeme-Deco1.png"
     />
     <DinamicComponent
     title='This is fine'
     description='srasa sarasa sarasa'
     button='Go'
     image="https://i.postimg.cc/9MqqkQP9/whatdoyoumeme-Deco3.png"
     />
    
     <ComponentWithChildren>
      holis
     </ComponentWithChildren>
     <ComponentWithChildren>
     <p>Hola soy una children</p>
     <p>Yo tambien!</p>
     </ComponentWithChildren>
     <ComponentWithChildren>
    <DinamicComponent
     title='Miren que linda children'
     description='srasa sarasa sarasa'
     button='Go'
     image="https://i.postimg.cc/Y2JPJ0TM/success.png"
     />
     </ComponentWithChildren> */}
    </div>
  )
}

export default App
