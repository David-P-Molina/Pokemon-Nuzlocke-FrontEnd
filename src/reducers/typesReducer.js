function typesReducer(
    state = {
        types: [],
    }, action
    ) {
        switch (action.type) {
            case 'FETCH_TYPES':
                debugger
                return {
                    types: action.types,
                }
            default:
                return state
        }
} 
export default typesReducer