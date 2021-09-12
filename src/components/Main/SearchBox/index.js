import React from 'react'

export default function index(props) { 

    const handleOnSubmit = (event) => {
         event.preventDefault()
        const result = props.data.filter( (e) => {
            const fruit = e.fruit.toUpperCase()
            const searchingFruit = event.target.value.toUpperCase()
            return fruit === searchingFruit
        })
        return props.filterAction(result)
    }

    return (
        <div class="SearchBox">
            <form>
                <input 
                    onChange={ e => handleOnSubmit(e) }
                    placeholder="Escribe tu fruta"    
                />
            </form>
        </div>
    )
}

