import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <nav>
<h1><Link className="Logo" to ="/">EL Castillo de tu Mascota</Link></h1>
<ul>
<li><Link className="listado" to="/">Inicio</Link></li>
<li><Link className="listado" to="/Acerca">Quienes Somos</Link></li>
<li><Link className="listado" to="/categoria/Perro">Perro</Link></li>
<li><Link className="listado" to="/categoria/Gato">Gato</Link></li>
<li><Link className="listado" to="/Contacto">Contacto</Link></li>
</ul>
<CartWidget/>
</nav>
    </>
  )
}

export default NavBar;
