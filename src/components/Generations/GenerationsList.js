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
            {renderGenerations()}
        </div>
    )
}

export default GenerationsList
