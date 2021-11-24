import React from 'react'

const Type = ({ type }) => {
    return (
        <div>
            <h3 key={type.name}>{type.name}</h3>    
                <li><strong>Double Damage From </strong>: {type.double_damage_from}</li>
                <li><strong>Double Damage To </strong>: {type.double_damage_to}</li>
                <li><strong>Half Damage From </strong>: {type.half_damage_from}</li>
                <li><strong>Half Damage To </strong>: {type.half_damage_to}</li>
                <li><strong>No Damage From</strong>: {type.no_damage_from}</li>
                <li><strong>No Damage To </strong>: {type.no_damage_to}</li>
        </div>
    )
}

export default Type
