import React, { Component } from 'react'
import TypesList from '../components/Type/TypesList'

class TypesContainer extends Component {
    render() {
        return (
            <div>
                <h1>Pokemon Types</h1>
                <TypesList types={this.props.types}/>
            </div>
        )
    }
}

export default TypesContainer
