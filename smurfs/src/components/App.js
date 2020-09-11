import React, { useEffect } from "react";
import "./App.css";
import Smurfs from './Smurfs'
import {connect} from 'react-redux';
import {fetchSmurfs} from '../store/actions'


function App ({fetchSmurfs, loadingSmurfs, errorMessage}) {
  useEffect(() =>{
    fetchSmurfs();
  }, [fetchSmurfs])
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        {!loadingSmurfs ? <Smurfs /> : <div>... Loading Smurfs</div>}
        {errorMessage !== "" ? <div> {errorMessage} </div> : null}
      </div>
    );
}


function mapStateToProps(state) {
  return{
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
