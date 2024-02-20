import React from 'react'
import { SearchIcon } from '../../icon/Icon'

const Search = () => {
  return (
    <div>
      <div className="flex items-center space-x-4 p-3 m-3 bg-gray-dark rounded-full focus-within:ring-1 text-white focus-within:ring-primary-base focus-within:text-primary-base">
        <div className="w-5 h-5">
          <SearchIcon />
        </div>
        <input
          placeholder="Search"
          className="bg-transparent text-white outline-none w-full"
        />
      </div>
    </div>
  )
}

export default Search
