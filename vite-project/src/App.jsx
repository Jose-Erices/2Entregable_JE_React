import './App.css'
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import './components/CartWidget/CartWidget.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';







function App() {
 
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos al Castillo de tu Mascota"}/>

    
      </>
 
  )
}

export default App;
