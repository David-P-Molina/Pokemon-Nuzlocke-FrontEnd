function GenerationsReducer(
    state = {
        generations: [],
    }, action 
) {
    switch (action.type) {
        case 'FETCH_GENERATIONS':
            return {
                generations: [...state.generations, action.generation] 
            }
        default: 
            return state
    }
}

export default GenerationsReducer