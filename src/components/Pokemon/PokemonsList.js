import React from 'react'
import Pokemon from './Pokemon'
import LoadingSpinner from '../LoadingSpinner.js'

const PokemonsList = ({Pokemons}) => {
    const mapPokemons = () => Pokemons.map((Pokemon) => <Pokemon Pokemon={Pokemon} />)
    const renderPokemons = () => {
        if (Pokemons === []) {
            return <LoadingSpinner content="Co"/>
        } else {
           return mapPokemons()
        }
    }
    return (
        <div>
            {renderPokemons()}
        </div>
    )
}

export default PokemonsList
