import React from 'react'


function DataTable({countries}:any) {
  return (
    <div className='w-full p-4 shadow-lg sm:rounded-2xl relative top-[-4rem] bg-[#1B1D1F] border-solid border-[1px] border-[#282b30]'>
      <div className='flex border'>
        <h1>Found {countries.length} countries</h1>
      </div>
    </div>
  )
}

export default DataTable