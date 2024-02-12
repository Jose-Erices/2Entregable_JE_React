import React, {useState} from 'react'

const ItemCount = () => {

    const [contador,setContador] = useState(1);

    const decrementar = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const incrementar = () => {
        if(contador < 10){
            setContador(contador+1)
        }
    }

    const agregarCarrito = () => {
        alert("AGREGASTE ESTA CANTIDAD DE PRODUCTOS "+contador)
    }

  return (
    <div className='count'>

       <p>Productos:{contador}</p>

        <button onClick={decrementar}>-</button>

        <button onClick={agregarCarrito}>Agregar al carrito</button>

        <button onClick={incrementar}>+</button>

    </div>
  )
}

export default ItemCount;