import React from 'react'
import Type from './Type'

const TypesList = ({types}) => {
    const mapTypes = () => types.map((type) => <Type type={type} />)
    const renderTypes = () => {
        if (types === []) {
            return <h1>No Types</h1>
        } else {
           return mapTypes()
        }
    }
    return (
        <div>
            {renderTypes()}
        </div>
    )
}

export default TypesList
