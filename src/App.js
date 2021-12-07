import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTypesAction } from './actions/TypeAction'
import { fetchGenerationsAndGamesAction } from './actions/GenerationAction'
import TypesContainer from './containers/TypesContainer';

function App(props) {
  useEffect(() => {
    fetchInfo()
  }, [])
  const fetchInfo = () => {
    props.fetchTypes()
    props.fetchGenerations()
  }
  return (
    <div className="App">
      <TypesContainer types={props.types}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    types: state.types.types
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTypes: () => dispatch(fetchTypesAction()),
    fetchGenerationsAndGames: () => dispatch(fetchGenerationsAndGamesAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
