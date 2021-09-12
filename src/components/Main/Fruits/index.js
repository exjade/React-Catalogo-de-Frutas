import React from 'react';
import Description from './Description';
import Photo from './Photo';

function Index(props) {
    return (
        <div>
            {
                props.data.map((e, i) => {
                    return (
                        <div index={i} class="Fruta">
                            <Photo img={e.img}/>
                            <Description fruit={e.fruit} color={e.color} author={e.imgAuthor}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Index
