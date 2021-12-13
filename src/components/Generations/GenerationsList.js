import React from 'react'
import Generation from './Generation'
import LoadingSpinner from '../LoadingSpinner'

const GenerationsList = ({ generations }) => {
    const mapGenerations = () => generations.map((gen) => <Generation generation={gen}/>)
    return (
        <div>
            
        </div>
    )
}

export default GenerationsList
