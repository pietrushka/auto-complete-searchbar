import React from 'react'
import { connect } from 'react-redux'

import './HintBar.css'

function HintBar ({ displayUser, isFocused, user, query }) {
  

  const markName = () => {
    const {name} = user
    const nameLowercase = name.toLowerCase()
    const queryLowercase = query.toLowerCase()
    const queryFirstIdx = nameLowercase.indexOf(queryLowercase)
    const queryLastIdx = queryFirstIdx + query.length

    return (
      <span className='hintbar__text'>
        {name.slice(0, queryFirstIdx)}
        <span className='hintbar__text--marked'>{name[queryFirstIdx] + query.slice(1)}</span>
        {name.slice(queryLastIdx)}
      </span>
    )
  }



  return (
    <div 
      className={`hint__container ${isFocused && 'focused'}`} 
      onClick={displayUser}
    >
      {markName()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    query: state.users.query
  }
}

export default connect(mapStateToProps)(HintBar)
