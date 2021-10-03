import React, { Component } from 'react'

class GameForm extends Component {
    state = {
        name: '',
        releaseDate: '',
        generation: '',//id
        description: '',
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()

        this.setState({
            name: '',
            releaseDate: '',
            generation: '',//id
            description: '',
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default GameForm
