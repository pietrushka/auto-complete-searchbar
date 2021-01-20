import React from 'react'
import { connect } from 'react-redux'

import SearchBar from './SearchBar'
import HintBar from './HintBar'

import './Search.css'

function Search ({ matchedUsers }) {
  return (
    <div className='search__container'>
      <SearchBar />
      {
                matchedUsers.map(user => <HintBar key={user.id} user={user} />)
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
