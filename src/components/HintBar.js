import React from 'react'
import { connect } from 'react-redux'

import './HintBar.css'

function HintBar ({ user: { name }, query }) {
  const markName = () => {
    const nameLowercase = name.toLowerCase()
    const queryLowercase = query.toLowerCase()
    const queryFirstIdx = nameLowercase.indexOf(queryLowercase)
    const queryLastIdx = queryFirstIdx + query.length

    return (
      <span>
        {name.slice(0, queryFirstIdx)}
        <span className='marked'>{name[queryFirstIdx] + query.slice(1)}</span>
        {name.slice(queryLastIdx)}
      </span>
    )
  }

  return (
    <div className='hint__container'>{markName()}</div>
  )
}

const mapStateToProps = state => {
  return {
    query: state.users.query
  }
}

export default connect(mapStateToProps)(HintBar)
