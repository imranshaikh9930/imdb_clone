import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div className="header">
        <div className="header_left">
            <NavLink to="/"><img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="logo" /></NavLink>
            <NavLink to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span> </NavLink>
            <NavLink to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span> </NavLink>
            <NavLink to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span> </NavLink>
        </div>
    </div>
  )
}

export default Header