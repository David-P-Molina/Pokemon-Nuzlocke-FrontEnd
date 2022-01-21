function GenerationsReducer(
    state = {
        generations: [],
    }, action 
) {
    switch (action.type) {
        case 'FETCH_GENERATIONS':
            debugger
            return {
                generations: [...state.generations, action.generations] 
            }
        default: 
            return state
    }
}

export default GenerationsReducer