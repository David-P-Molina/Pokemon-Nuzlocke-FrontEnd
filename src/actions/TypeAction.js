import { URL } from '../../src/globalVariables'

export const fetchTypesAction= () => {
    return (dispatch) => {
        fetch(`${URL}/types`)
        .then((response => {
            if (response.ok) {
                return response.json()
                .then((types) => {
                    const typesArray = []
                    types.data.map((type) => {
                        return typesArray.push(type.attributes)
                    })
                   dispatch({ type:'FETCH_TYPES', types: typesArray })
                })
            } else {
                return response.json()
                .then(errors => console.log(errors))
                }
            }
        ))
    }
}