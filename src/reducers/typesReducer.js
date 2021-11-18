function typesReducer(
    state = {
        types: [],
    }, action
    ) {
        switch (action.type) {
            case 'FETCH_TYPES':
                return {
                    ...state,
                    types: action.types,
                }
            default:
                return state
        }
} 
export default typesReducer