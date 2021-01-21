import React from 'react'
import { connect } from 'react-redux'

import HintBar from './HintBar'

import './HintBox.css'

function HintBox ({ matchedUsers }) {
  return (
    <>
        {
            matchedUsers.length > 0 && (
                <div className='hint-box__container'>
                    {
                    matchedUsers.map(user => <HintBar key={user.id} user={user} />)
                    }
                </div>
            )
        }
    </>
  )
}

const mapStateToProps = state => {
  return {
    matchedUsers: state.users.matchedUsers
  }
}

export default connect(mapStateToProps)(HintBox)
