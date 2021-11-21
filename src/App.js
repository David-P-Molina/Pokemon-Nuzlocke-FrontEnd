import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux'

function App() {
  useEffect(() => {
    fetchInfo()
  })
  const fetchInfo = () => {

  }
  return (
    <div className="App">

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTypes: () => dispatch(fetchTypes())
  }
}

export default connect(null, mapDispatchToProps)(App)
