import React from 'react'
import LoadingSpinner from '../LoadingSpinner'
import Game from './Game'

const GamesList = ({games}) => {
    const gamesArray = games.games
    const mapGames = () => gamesArray.map((game) => <Game game={game}/>)
    const renderGames = () => {
        if (gamesArray === []) {
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
