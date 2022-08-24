import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search'
import MicIcon from '@mui/icons-material/Mic'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'


function Search({ hideButtons = false }) {
    
    const[{},dispatch]=useStateValue()

    const [input, setInput] =useState('')
    const navigate = useNavigate();


    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term:input
        })

        navigate('search')
    }
  return (
      <form className='search'>
          <div className="input1">
              <SearchIcon className='icon' />
              <input value={input} onChange={e=>setInput(e.target.value)} />
              <MicIcon className='icon'/>
          </div>

          {!hideButtons ? (
              <div className="buttons">
                  <Button type='submit' onClick={search} variant="outlined">Search</Button>
                  <Button type='submit' variant="outlined">I'm Feeling Lucky</Button>
              </div>
          ) : (

              <div className="buttons">
                  <Button className='hidden' type='submit' onClick={search} variant="outlined">Search</Button>
                  <Button className='hidden' type='submit' variant="outlined">I'm Feeling Lucky</Button>
              </div>
          )}
    </form>
  )
}

export default Search