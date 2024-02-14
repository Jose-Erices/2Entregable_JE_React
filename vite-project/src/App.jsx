import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import './components/CartWidget/CartWidget.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
 <Router>
 <div>
 <NavBar />
 <Routes>
 <Route path="/" element={<ItemListContainer greeting={"Bienvenidos al Castillo de tu Mascota"} />} />
 <Route path="/Acerca" element={<div>Acerca de la página</div>} />
 <Route path="/Perro" element={<div>Página de Perros</div>} />
 <Route path="/Gato" element={<div>Página de gato</div>} />
 <Route path="/Contacto" element={<div>Página de Contacto</div>} />
 </Routes>
 </div>
 </Router>
  );
 }
 export default App;