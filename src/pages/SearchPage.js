import React from 'react'
import { useStateValue } from '../StateProvider'
import './SearchPage.css'
import useGoogleSearch from './useGoogleSearch';

function SearchPage() {
    const [{term}, dispatch] =useStateValue();
    const { data } = useGoogleSearch(term)
    
    
    console.log(data)
  return (
      <div className='search'>
          <div className="search_page">
              <h1>{term}</h1>
          </div>
          <div className="search_result">
              
          </div>
    </div>
  )
}

export default SearchPage