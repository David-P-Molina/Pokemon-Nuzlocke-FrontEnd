import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTypesAction } from './actions/TypeAction'
import TypesContainer from './containers/TypesContainer';

function App(props) {
  useEffect(() => {
    fetchInfo()
    //currently fetches every few seconds, figure out how to update initially
  })
  const fetchInfo = () => {
    props.fetchTypes()
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
    fetchTypes: () => dispatch(fetchTypesAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
