import React, { Component } from 'react'
import PokemonList from '../components/Pokemon/PokemonList'
import { connect } from 'react-redux'

export class PokemonContainer extends Component {
    render() {
        return (
            <div>
                <PokemonList pokemon={this.props.pokemon}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    }
}
export default connect(mapStateToProps)(PokemonContainer)\