import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import graveyardReducer from './graveyardReducer'
import nuzlockeReducer from './nuzlockeReducer'
import pokemonReducer from './pokemonReducer'
import rulesReducer from './rulesReducer'
import teamsReducer from './teamsReducer'
import trainersReducer from './trainersReducer'
import typesReducer from './typesReducer'
import generationsReducer from './generationsReducer'

const rootReducer = combineReducers({
    games: gamesReducer,
    generations: generationsReducer,
    graveyards: graveyardReducer,
    nuzlockes: nuzlockeReducer,
    pokemon: pokemonReducer,
    rules: rulesReducer,
    teams: teamsReducer,
    trainers: trainersReducer,
    types: typesReducer
})

export default rootReducer
