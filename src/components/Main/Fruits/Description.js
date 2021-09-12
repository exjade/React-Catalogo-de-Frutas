import React from 'react'

export default function Description(props) {  
    return (
        <div class="Descripcion"> 
            <h1>{props.fruit}</h1>
                <p class="Color"> Color: {props.color} </p>
            <p class="Author">
                Autor: {props.author}
            </p>
        </div>
    )
}

