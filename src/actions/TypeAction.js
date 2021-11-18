import { URL } from '../../src/globalVariables'
export const fetchTypes= () => {
    return (dispatch) => {
        fetch(`${URL}/types`)
        .then((response => {
            if (response.ok) {
                return response.json()
                .then((types) => {
                   console.log(types)
                })
            } else {
                return response.json()
                }
            }
        ))
    }
}