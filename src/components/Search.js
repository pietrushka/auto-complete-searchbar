import React from 'react'
import { connect } from 'react-redux'

import SearchBar from './SearchBar'
import HintBox from './HintBox'

import './Search.css'

function Search ({ matchedUsers }) {
  return (
    <div className='search__container'>
      <SearchBar />
      {
        matchedUsers.length > 0 && (
          <HintBox matchedUsers={matchedUsers}/>
        )
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    matchedUsers: state.users.matchedUsers
  }
}

export default connect(mapStateToProps)(Search)