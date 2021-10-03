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
            <div className='game-form'>
                <form onSubmit={this.handleOnSubmit}>
                    <button type='submit'>Add Game</button>
                </form>
            </div>
        )
    }
}

export default GameForm
