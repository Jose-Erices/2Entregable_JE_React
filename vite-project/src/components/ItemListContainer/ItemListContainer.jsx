import React,{useState,useEffect} from 'react'
import ItemList from '../itemList/itemList';
import {useParams}from 'react-router-dom';




const ItemListContainer = ({greeting}) => {

    const [productos,setProductos] = useState([]);

    const categoryId = useParams().categoryId;

    useEffect(()=>{
        
        const fetchData = async () => {
            try {
                const response = await fetch("./productos.json");
                const data = await response.json()
                setProductos(data)
                
                if(categoryId){
                    const filteredProducts = data.filter((p) => p.categoria == categoryId)
                    setProductos(filteredProducts)
                }else{
                    setProductos(data)
                }
            }catch(error){
                console.log("Error en el fetch "+error)
            }
        }

        fetchData()

    },[categoryId])   
    

  return (
    <div>

      <p id="bienvenidos">{greeting}</p> 

        {productos.length == 0 
        ? 
        <h1>CARGANDO..</h1> 

        : 
        
          <ItemList productos={productos}/>
        
        }


    </div>
  )
}

export default ItemListContainer