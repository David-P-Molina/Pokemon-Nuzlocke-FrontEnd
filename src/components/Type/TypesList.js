import React from 'react'
import Type from './Type'
import LoadingSpinner from '../LoadingSpinner.js'

const TypesList = ({types}) => {
    const mapTypes = () => types.map((type) => <Type type={type} />)
    const renderTypes = () => {
        if (types === []) {
            return <LoadingSpinner content="Co"/>
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
