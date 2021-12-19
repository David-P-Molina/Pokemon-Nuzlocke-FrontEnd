import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTypesAction } from './actions/TypeAction'
import { fetchGenerationsAndGamesAction } from './actions/GenerationAction'
import TypesContainer from './containers/TypesContainer';
import GamesContainer from './containers/GamesContainer'
import GenerationsContainer from './containers/GenerationsContainer'

function App(props) {
  useEffect(() => {

    const fetchInfo = () => {
      props.fetchTypes()
      props.fetchGenerationsAndGames()
    }
    fetchInfo()
  }, [props])
  return (
    <div className="App">
      <TypesContainer types={props.types}/>
      {/* <GenerationsContainer generations={props.generations} /> */}
      {/* <GamesContainer  games={props.games}/> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    types: state.types.types,
    // generations: state.generations.generations,
    //games: state.games.games,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTypes: () => dispatch(fetchTypesAction()),
    fetchGenerationsAndGames: () => dispatch(fetchGenerationsAndGamesAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
