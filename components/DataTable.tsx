import React from 'react'
import SearchInput from '@/components/SearchInput'


function DataTable({countries}:any) {
  return (
    <div className='w-full p-4 shadow-lg sm:rounded-2xl relative top-[-4rem] bg-[#1B1D1F] border-solid border-[1px] border-[#282b30]'>
      <div className='flex flex-1 border p-6'>
        <h1 className='text-[#6C727F] flex flex-1 font-medium text-[16px] items-center'>Found {countries.length} countries</h1>
        <SearchInput />
      </div>
    </div>
  )
}

export default DataTable