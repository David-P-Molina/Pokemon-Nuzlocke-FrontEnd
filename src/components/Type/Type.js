import React from 'react'

const Type = ({ type }) => {
    return (
        <div>
            <>
            <h3 key={type.name}>{type.name}</h3>
            
                <li>{type.double_damage_from}</li>
            
            </>
            )
        </div>
    )
}

export default Type
