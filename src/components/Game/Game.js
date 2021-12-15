import React from 'react'

const Game = ({ game }) => {
    return (
        <div>
            <h1>{game.name} <em>{game.release_date}</em>></h1> 
            <p>{game.description}</p>
        </div>
    )
}

export default Game
