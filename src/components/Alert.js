import React from 'react'
import { connect } from 'react-redux'

import './Alert.css'

function Alert ({ error }) {
  return (
    <>
      {
        <div className={`alert__container ${error && 'visible'}`}>{error}</div>
      }  
    </>
  )
}

const mapStateToProps = state => {
  return {
    error: state.users.error
  }
}

export default connect(mapStateToProps)(Alert)
