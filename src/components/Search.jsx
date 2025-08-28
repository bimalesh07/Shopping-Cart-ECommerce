import React from 'react'
import { useParams } from 'react-router-dom'
const Search = () => {
  const{term} = useParams();
  console.log(term)
  return (
    <div>

    </div>
  )
}

export default Search
