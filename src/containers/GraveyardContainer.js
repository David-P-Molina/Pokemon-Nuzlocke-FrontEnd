import React, { Component } from 'react'
import Graveyard from '../components/Gravesyard/Graveyard'

export class GraveyardContainer extends Component {
    render() {
        return (
            <div>
                <h1>Username's Graveyard</h1>
                <Graveyard />
            </div>
        )
    }
}

export default GraveyardContainer
