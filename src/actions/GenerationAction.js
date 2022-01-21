import { URL } from '../../src/globalVariables'
import { addGamesToState } from './GameAction'

export const fetchGenerationsAndGamesAction= () => {
    return (dispatch) => {
        fetch(`${URL}/generations`)
        .then((response => {
            if (response.ok) {
                return response.json()
                .then((generations) => {
                    generations.data.forEach(({attributes}) => {
                        dispatch({type: 'FETCH_GENERATIONS', generations: attributes})
                        debugger
                        let gamesArray = []
                        attributes.games.forEach((game) => {
                            gamesArray.push(game)
                        })
                        dispatch(addGamesToState(gamesArray))
                    })
                })
            } else {
                return response.json()
                }
            }
        ))
    }
}