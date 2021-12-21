function GamesReducer(
    state = {
        games: [],
    }, action 
) {
    switch (action.type) {
        case 'FETCH_GAMES':
            return {
                ...state,
                Games: [...state.games, action.games] 
            }
        default: 
            return state
    }
}

export default GamesReducer