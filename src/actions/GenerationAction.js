import { URL } from '../../src/globalVariables'

export const fetchGenerationsAndGamesAction= () => {
    return (dispatch) => {
        fetch(`${URL}/generations`)
        .then((response => {
            if (response.ok) {
                return response.json()
                .then((generations) => {
                    generations.data.forEach(({attributes}) => {
                        dispatch({type: 'FETCH_GENERATIONS', generations: attributes})
                        let gamesArray = []
                        attributes.games.forEach((game) => {
                            gamesArray.push(game)
                            debugger
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