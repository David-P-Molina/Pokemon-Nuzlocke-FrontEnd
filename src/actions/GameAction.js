import { URL } from '../../src/globalVariables'
export const fetchGames= () => {
    return (dispatch) => {
        fetch(`${URL}/games`)
        .then((response => {
            if (response.ok) {
                return response.json()
                .then((games) => {
                    debugger
                })
            } else {
                return response.json()
                }
            }
        ))
    }
}