import React from 'react'

const Generation = ({ generation }) => {
    return (
        <div>
            <h1>{generation.region}</h1>
            <p>{generation.description}</p>
            <h3>History</h3>
            <p>{generation.history}</p>
        </div>
    )
}

export default Generation
