function GenerationsReducer(
    state = {
        generations: [],
    }, action 
) {
    switch (action.type) {
        case 'FETCH_GENERATIONS':
            return {
                ...state,
                generations: [...state.generations, action.generation] 
            }
        default: 
            return state
    }
}

export default GenerationsReducer