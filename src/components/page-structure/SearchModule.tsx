import React from 'react'
import { useState } from 'react'
import { useSearch } from '../../hooks/useSearch'

const SearchModule = () => {

  const [query, setQuery] = useState("")
  const {data } =useSearch({query})
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
      {data?.map(film => film.title)}
    </div>
  )
}

export default SearchModule