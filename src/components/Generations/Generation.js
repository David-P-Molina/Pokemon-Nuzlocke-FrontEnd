import React from 'react'
import Game from './../Game/Game'
const Generation = ({ generation }) => {
    const renderGames = (gen) => {
        return gen.games.map((gen) => (
            <li>
                <Game info={gen}/>)
            </li>
        )
    }
    return (
        <div>
            <h1>{generation.region}</h1>
            <p>{generation.description}</p>
            <h3>History</h3>
            <p>{generation.history}</p>
            <h3>Geography</h3>
            <p>{generation.geography}</p>
            <ul>
                {renderGames(generation)}
            </ul>
        </div>
    )
}

export default Generation
