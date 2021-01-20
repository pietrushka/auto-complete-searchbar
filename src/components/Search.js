import React, { useState } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

import './Search.css'

function Search ({users}) {
    const [query, setQuery] = useState('')

    const getQuery = (text) => setQuery(text)

    return (
        <div className='search__container'>
            <SearchBar getQuery={getQuery} />
        </div>
    )
}

const mapStateToProps = state => {
    const {users} = state
    return {
      users
    }
  };
  

export default connect(
  mapStateToProps,
)(Search);
  
