import { URL } from '../../src/globalVariables'

export const fetchTypesAction= () => {
    return (dispatch) => {
        fetch(`${URL}/types`)
        .then((response => {
            if (response.ok) {
                return response.json()
                .then((types) => {
                   dispatch({ type:'FETCH_TYPES', types })
                })
            } else {
                return response.json()
                .then(errors => console.log(errors))
                }
            }
        ))
    }
}