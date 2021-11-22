import React, { Component } from 'react'

class TypesContainer extends Component {
    render() {
        const mapTypes = () => {
            this.props.types.map((type) => {
                <h1>{type.name}</h1>
            })
        }
        return (
            <div>
            {mapTypes()}
            </div>
        )
    }
}

export default TypesContainer
