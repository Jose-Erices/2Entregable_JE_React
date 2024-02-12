import React from 'react'
import '../Item/Item.css'
import ItemCount from '../itemCount/itemCount'


const Item = ({producto}) => {
  return (
    <div key={producto.id} className='product-card'>
   <img className='imagenes' src={producto.img} alt={producto.nombre} />
    <h2 >{producto.nombre}</h2>
    <h2>{producto.precio}</h2>
    <h2>{producto.stock}</h2>
    <p>{producto.description}</p>
    <ItemCount className="contador"/>
     </div>
  )
}

export default Item


