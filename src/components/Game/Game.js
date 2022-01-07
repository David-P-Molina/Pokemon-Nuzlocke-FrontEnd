import React, { useState } from 'react'

const Game = ({ game }) => {
    const [ owned, favorite ] = useState(false)

    const isOwned = () => this.state.owned ? true : false
    const isFavorite = () => this.state.favorite ? true : false

    const renderOwned = () => owned === true ? <h1>Owned</h1> : <h1>Not Owned</h1>
    const renderFavorite = () => favorite === true ? <h5>★</h5> : <h5>☆</h5>
    return (
        <div>
            <aside>
                <button onClick={isOwned()}>
                    <h3>Owned</h3>
                </button>
                {renderOwned}
                <button onClick={isFavorite()}>
                    <h3>Favorite</h3>
                </button>
                {renderFavorite}
            </aside>
            <h1>{game.name} <em>{game.release_date}</em>></h1> 
            <p>{game.description}</p>
        </div>
    )
}

export default Game
