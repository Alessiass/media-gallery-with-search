import React from 'react'
import { useState } from 'react'
import { useSearch } from '../../hooks/useSearch'
import MediaFrame from '../MediaFrame'

const SearchModule = () => {

  const [query, setQuery] = useState("")
  const {data} =useSearch({query})
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
      {data?.map(movie => <MediaFrame key={movie.id} itemData={movie}/>)}
    </div>
  )
}

export default SearchModule