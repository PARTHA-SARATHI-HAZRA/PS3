import React from 'react'
import './Hmoe.css'
import {Link} from 'react-router-dom'
import AppsIcon from "@mui/icons-material/Apps"
import { Avatar } from '@mui/material'
import logo from './logo.png'
import Search from './Search'


function Home () {
  return (
    <div className='home'>
      <div className="home_header">
        <div className="header_left">
          {/* Link */}
          <Link to ='/about'>About</Link>
          {/* Link */}
          <Link to ='/store'>Store</Link>
        </div>
        <div className="header_right">
          {/* Link */}
          <Link to ='/gmail'>Gmail</Link>
          {/* Link */}
          <Link to ='/Images'>Images</Link>
          {/* Icon */}
          <AppsIcon/>
          {/* Avatar */}
          <Avatar/>
        </div>
      </div>
      <div className="home_body">
        <img src={logo} alt="logo" />
        <div className="input">
          {/* Search */}
          <Search hideButtons/>
        </div>

      </div>
    </div>
  )
}

export default Home 