import React, { Component } from 'react'

class TypesContainer extends Component {
    render() {
        const mapTypes = () => {
            debugger
            this.props.types.map((type) => {
                return <h1 key={type.name}>{type.name}</h1>
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
