import React from 'react'
import LoadingSpinner from '../LoadingSpinner'
import Game from './Game'

const GamesList = ({games}) => {
    const mapGames = () => games.map((game) => <Game game={game}/>)
    const renderGames = () => {
        if (games === []) {
            return <LoadingSpinner content="Games" />
        } else {
            return mapGames()
        }
    }
    return (
        <div>
            <h1>Pokemon Games</h1>
            {renderGames()}
        </div>
    )
}

export default GamesList
