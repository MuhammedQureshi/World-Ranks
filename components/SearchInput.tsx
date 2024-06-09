import { Search } from 'lucide-react'
import React from 'react'

function SearchInput({ ...rest }) {
  return (
    <div className='relative flex flex-0 sm:w-[24rem] items-center justify-center bg-modal px-3 rounded-2xl outline-sky-600 transition-[outline] focus-within:outline'>
      <Search color='#6C727F' className='w-8 ' />
      <input {...rest} className='bg-transparent w-full px-3 py-3 focus:outline-none placeholder:text-primary' placeholder='Search by Name, Region, Subregion' />
    </div>
  )
}

export default SearchInput