import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTypesAction } from './actions/TypeAction'


function App(props) {
  useEffect(() => {
    fetchInfo()
  })
  const fetchInfo = () => {
    props.fetchTypes()
  }
  return (
    <div className="App">

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTypes: () => dispatch(fetchTypesAction())
  }
}

export default connect(null, mapDispatchToProps)(App)
