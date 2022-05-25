import React from 'react'

export default function BookCard({title, author, img, price}) {
    return (
        <div>
            
            <img src={img} alt={title} />
            
            <h3>{title}</h3>
            
            <h5>{author}</h5>

            <h4>{price}</h4>            

        </div>
    )
}
