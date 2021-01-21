import React from 'react'

import SearchBar from './SearchBar'
import HintBox from './HintBox'

import './Search.css'

function Search () {
  return (
    <div className='search__container'>
      <SearchBar />
      <HintBox />
    </div>
  )
}


export default Search