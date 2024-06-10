import React from 'react'

function FilterBy() {
  return (
    <div className='flex flex-col w-full mt-5'>
        <div>
            <label className='text-sm'>Sort By</label>
            <section className="flex flex-col pt-3">
                <div className="flex border-[1px] border-modal rounded-xl px-3">
                    <select className="bg-transparent w-full py-3 focus:outline-none placeholder:text-primary">
                    <option value="name">Name</option>
                    <option value="flag">Flag</option>
                    <option value="population">Population</option>
                    <option value="area">Area</option>
                    <option value="region">Region</option>
                    </select>
                </div>
            </section>
        </div>
    </div>
  )
}

export default FilterBy