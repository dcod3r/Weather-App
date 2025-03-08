import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'

const Weather = () => {
  return (
    <div className='weather'>
     <div className='search-bar'>
        <input type="text" name="search" id="search" placeholder='Search' />
        <img src={search_icon} alt={search_icon} />
     </div>
    </div>
  )
}

export default Weather
