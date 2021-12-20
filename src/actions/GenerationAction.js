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
                        dispatch({type: 'FETCH_GENERATIONS', generation: gen})
                    })
                    // dispatch two actions, one for fetch generations and for games
                })
            } else {
                return response.json()
                }
            }
        ))
    }
}