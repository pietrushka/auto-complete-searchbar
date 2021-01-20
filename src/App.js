import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getUsers } from './redux/users/usersActions';

import './App.css';
import Search from './components/Search';

const App = ({ fetchData }) => {

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Search />
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
