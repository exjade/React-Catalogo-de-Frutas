import React from 'react'

export default function Photo(props) {
    return (
        <div class="Foto">
            <figure>
                <img 
                    src={props.img}
                    width="100px"
                    alt={props.img}
                />
            </figure>
        </div>
    )
}

