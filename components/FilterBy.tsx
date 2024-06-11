import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"

function FilterBy() {
  return (
        <div className='flex flex-col mt-5'>
           <div>
            <label className='text-sm'>Sort By</label>
            <section className="flex pt-3">
                  <Select>
                    <SelectTrigger className="lg:w-[95%] text-md bg-transparent rounded-xl border-solid border-[2px] border-[#282b30]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className=''>
                      <SelectGroup className=''>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="population">Population</SelectItem>
                        <SelectItem value="area">Area</SelectItem>
                        <SelectItem value="region">Region</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
            </section>
           </div>
        </div>
  )
}

export default FilterBy