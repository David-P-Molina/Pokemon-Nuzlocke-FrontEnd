import React from 'react'

const GamesList = ({games}) => {
    const mapGames = () => games.map((game) => <Game game={game}/>)
    return (
        <div>
            <h1>Pokemon Games</h1>
        </div>
    )
}

export default GamesList
