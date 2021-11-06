import React, { Component } from 'react'
import GameForm from '../components/Game/GameForm'
import GamesList from '../components/Game/GamesList'
import { connect } from 'react-redux'

export class GamesContainer extends Component {
    render() {
        return (
            <div>
                <GameForm />
                <GamesList games={this.props.games} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(GamesContainer)
