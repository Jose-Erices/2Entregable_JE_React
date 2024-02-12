import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <>
      <nav>
        <link rel="stylesheet" href="
        " />
        <h1>EL Castillo de tu Mascota</h1>
        <ul>
          <li>Inicio</li>
          <li>Quienes Somos</li>
          <li>Perro</li>
          <li>Gato</li>
          <li>Contacto</li>
        </ul>
        <CartWidget/>
      </nav>
      
    </>
  )
}

export default NavBar;
