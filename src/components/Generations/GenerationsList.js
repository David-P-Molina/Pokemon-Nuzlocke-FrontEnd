import React from 'react'
import Generation from './Generation'
import LoadingSpinner from '../LoadingSpinner'

const GenerationsList = ({ generations }) => {
    const mapGenerations = () => generations.map((gen) => <Generation generation={gen}/>)
    const renderGenerations = () => {
        if (generations === []) {
            return <LoadingSpinner content="Generation Info" />
        } else {
            return mapGenerations()
        }
    }
    return (
        <div>
            <h1>Generations</h1>
            {renderGenerations()}
        </div>
    )
}

export default GenerationsList
