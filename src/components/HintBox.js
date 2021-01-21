import React, {useState, useEffect, useRef} from 'react'

import HintBar from './HintBar'

import './HintBox.css'

function HintBox ({matchedUsers}) {
  const [focusedIdx, setFocusedIdx] = useState(null)
  const focusedIdxRef = useRef()
  const hintBoxRef = useRef()

  useEffect(() => {
    updateStateAndRef(0)

    hintBoxRef.current.addEventListener('mouseenter', clearFocused)
    window.addEventListener('keydown', handleKeyNavigation)


    return () => {
      hintBoxRef.current.removeEventListener('mouseenter', clearFocused)
      window.removeEventListener('keydown', handleKeyNavigation)
    }
  }, [matchedUsers])

  
  const clearFocused = () => {
    updateStateAndRef(null)
  } 

  const handleKeyNavigation = ({keyCode}) => {
    switch (keyCode) {
      //arrow up
      case 38:
        if(focusedIdxRef.current === null) return updateStateAndRef(matchedUsers.length - 1)
        if(focusedIdxRef.current === 0) return updateStateAndRef(matchedUsers.length - 1)
        return updateStateAndRef(focusedIdxRef.current - 1)

      // arrow down
      case 40:
        if(focusedIdxRef.current === null) return updateStateAndRef(0)
        if(focusedIdxRef.current === matchedUsers.length - 1) return updateStateAndRef(0)
        return updateStateAndRef(focusedIdxRef.current + 1)
        
      //enter
      case 13:
        if(focusedIdxRef.current === null) return
        displayUser(matchedUsers[focusedIdxRef.current])
        break 

      default:
        break
    }
  }
  
  const displayUser = (user) => {
    const {name, username, email} = user
    window.alert(`Name: ${name} \nUsername: ${username} \nEmail: ${email}`)
  }

  const updateStateAndRef = (value) => {
    focusedIdxRef.current = value
    setFocusedIdx(value)
  }
  

  return (
    <>
        <div 
          className='hint-box__container'
          ref={hintBoxRef}
        >
          {
            matchedUsers.map((user, idx) => (
              <HintBar 
                key={user.id} 
                user={user} 
                displayUser={displayUser}  
                isFocused={focusedIdx === idx && true}
              />
            ))
          }
        </div>
    </>
  )
}

export default HintBox
