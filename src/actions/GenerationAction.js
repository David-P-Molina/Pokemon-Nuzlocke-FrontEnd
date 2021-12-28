import { URL } from '../../src/globalVariables'

export const fetchGenerationsAndGamesAction= () => {
    return (dispatch) => {
        fetch(`${URL}/generations`)
        .then((response => {
            if (response.ok) {
                return response.json()
                .then((generations) => {
                    debugger
                    generations.forEach((gen) => {
                        dispatch({type: 'FETCH_GENERATIONS', generations: gen})
                        let gamesArray = []
                        gen.games.forEach((game) => {
                            gamesArray.push(game)
                        })
                        dispatch({ type: 'FETCH_GAMES', games: gamesArray})
                    })
                })
            } else {
                return response.json()
                }
            }
        ))
    }
}