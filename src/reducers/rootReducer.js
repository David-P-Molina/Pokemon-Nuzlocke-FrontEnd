import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import graveyardReducer from './graveyardReducer'
import nuzlockeReducer from './nuzlockeReducer'
import pokemonReducer from './pokemonReducer'
import rulesReducer from './rulesReducer'
import teamsReducer from './teamsReducer'
import trainersReducer from './trainersReducer'

const rootReducer = combineReducers({
    games: gamesReducer,
    graveyardReducer,
    nuzlockes: nuzlockeReducer,
    pokemon: pokemonReducer,
    rules: rulesReducer,
    teams: teamsReducer,
    trainers: trainersReducer
})

export default rootReducer
