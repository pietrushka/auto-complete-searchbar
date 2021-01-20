import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getUsers } from './redux/users/usersActions';

import './App.css';

const App = ({ fetchData }) => {

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      123
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(getUsers())
  }
};


export default connect(
  null,
  mapDispatchToProps
)(App);
