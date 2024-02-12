import React from 'react'
import Item from '../Item/Item'
import '../ItemListContainer/ItemListContainer.css';

const ItemList = ({productos}) => {

 return (
    <>
    {
            productos.map((producto) =>{
                return(
                    <Item producto ={producto}/>
                )
            })
            

    }
    
    
    
    </>
  )
}

export default ItemList