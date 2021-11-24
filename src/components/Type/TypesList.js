import React from 'react'
import Type from './Type'

const TypesList = () => {
    const mapTypes = this.props.types.map((type) => <Type type={type} />)
    return (
        <div>
            {mapTypes}
        </div>
    )
}

export default TypesList
