import React, { useState } from 'react'

const Game = ({ game }) => {
    const [owned, favorited] = useState(false)

    const isOwned = () => this.state.owned ? true : false
    const isFavorited = () => this.state.favorited ? true : false
    
    const isFavorited = 
    return (
        <div>
            <aside>
                <h3>Owned</h3>
                <button onClick={isOwned}></button>
                <h3>Favorite</h3>
                <button onClick={isFavorited}><3</button>
            </aside>
            <h1>{game.name} <em>{game.release_date}</em>></h1> 
            <p>{game.description}</p>
        </div>
    )
}

export default Game
