import { URL } from '../../src/globalVariables'
export const fetchGenerations= () => {
    return (dispatch) => {
        fetch(`${URL}/generations`)
        .then((response => {
            if (response.ok) {
                return response.json()
                .then((generations) => {
                    debugger
                    // dispatch two actions, one for fetch generations and for games
                })
            } else {
                return response.json()
                }
            }
        ))
    }
}