import React, { Component } from 'react'

class TypesContainer extends Component {
    render() {
        const mapTypes = this.props.types.map((type) => {
            return (
                <>
                <h3 key={type.name}>{type.name}</h3>
                
                    <li>{type.double_damage_from}</li>
                
                </>
                )
        })

        return (
            <div>
                <h1>Pokemon Types</h1>
                {mapTypes}
            </div>
        )
    }
}

export default TypesContainer
