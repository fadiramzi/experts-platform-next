
import React from 'react'

export default function ExpertsSearch({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <div>
         <input type='text' placeholder='Search experts...' className='mb-4 p-2 rounded'
       value={searchTerm} 
       onChange={(e) => setSearchTerm(e.target.value)} 
       onKeyUp={handleSearch}
       />
    </div>
  )
}
