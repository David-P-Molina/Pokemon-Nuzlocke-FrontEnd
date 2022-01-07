import React, { useState } from 'react'

const Game = ({ game }) => {
    const clicked = useState(false)
    return (
        <div>
            <aside>
                <h3>Owned</h3>
                <h3>Favorite</h3>
            </aside>
            <h1>{game.name} <em>{game.release_date}</em>></h1> 
            <p>{game.description}</p>
        </div>
    )
}

export default Game
