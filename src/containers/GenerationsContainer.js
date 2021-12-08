import React, { Component } from 'react'
import GenerationsList from '../components/Generation/GenerationsList'

class GenerationsContainer extends Component {
    render() {
        return (
            <div>
                <h1>Pokemon Generations</h1>
                <GenerationsList generations={this.props.generations}/>
            </div>
        )
    }
}

export default GenerationsContainer
