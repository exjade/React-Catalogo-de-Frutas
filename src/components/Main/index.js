import React, { useState, useEffect } from 'react';
import Fruits from './Fruits';
import SearchBox from './SearchBox';


export default function Main() {

    //Paso 1
    const [data, setData] = useState([])
        // Contiene la lista de las frutas que coincidan en la busqueda del usuario
    const [filteredData, setFilteredData] = useState([])

    const fetchData = async(path) => {  
        const res = await(fetch(path)) // await hace la llamada de Fetch, lo guarda en "res"
        // Convierte la respuesta en un formato JSON
        const json = await res.json() // se hace la ejecución de "res.json()" se hace una espera, se guarda en json (se asigna la variable) 
        setData(json) // Y finalmente se ejecuta setData
    }

    const lookForAFruit = (text) => {
        return setFilteredData(text)
    }

    useEffect( () => {
        fetchData('./Fruits.json')
    } ,[filteredData]) 

    return (
        <>  {/* Paso 2 (crear 2 divs)*/}
            <div id="Contenido">
                <div>
                    <SearchBox 
                        data={data} 
                        filterAction={lookForAFruit}
                    />
                </div>
                <div id="Frutas">
                    <Fruits 
                        data={filteredData.length !== 0 ? filteredData : data} 
                    />
                </div>

            </div>
        </>
    )
}


