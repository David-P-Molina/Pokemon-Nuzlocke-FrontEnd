import React, { useState } from 'react'

const Game = ({ game }) => {
    const [owned, favorited] = useState(false)

    const isOwned = () => this.state.owned ? true : false
    const isFavorited = () => this.state.favorited ? true : false

    const renderOwned = () => owned === true ? <h1>Owned</h1> : <h1>Not Owned</h1>
    const renderFavorite = () => favortied === true ? <h5>★</h5> : <h5>☆</h5>
    return (
        <div>
            <aside>
                <h3>Owned</h3>
                <button onClick={isOwned()}></button>
                {renderOwned}
                <h3>Favorite</h3>
                <button onClick={isFavorited()}><3</button>
                {renderFavorite}
            </aside>
            <h1>{game.name} <em>{game.release_date}</em>></h1> 
            <p>{game.description}</p>
        </div>
    )
}

export default Game
