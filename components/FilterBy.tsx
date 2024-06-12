import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup"

import { Checkbox } from "@/components/ui/CheckBox"

function FilterBy({ onValueChange, onSelect, ...rest }: any) {
  return (
    <div className='flex flex-col mt-5'>
      <div>
        <label className='text-sm'>Sort By</label>
        <section className="flex pt-3">
          <Select onValueChange={onValueChange} {...rest}>
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
      <div className='mt-10'>
        <label className='text-sm'>Region</label>
        <section className='flex mt-3'>
          <ToggleGroup onValueChange={onSelect} type="multiple" className='text-md flex justify-start flex-wrap'>
            <ToggleGroupItem value="americas">Americas</ToggleGroupItem>
            <ToggleGroupItem value="antarctic">Antarctic</ToggleGroupItem>
            <ToggleGroupItem value="africa">Africa</ToggleGroupItem>
            <ToggleGroupItem value="asia">Asia</ToggleGroupItem>
            <ToggleGroupItem value="europe">Europe</ToggleGroupItem>
          </ToggleGroup>
        </section>
      </div>
      <div className='mt-10'>
        <label className='text-sm'>Status</label>
        <section className='mt-3'>
          <div className="flex items-center space-x-2">
            <Checkbox id="un-member" />
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Member of the United Nations
            </label>
          </div>
          <div className="flex items-center space-x-2 mt-3">
            <Checkbox id="independent" />
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Independent
            </label>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FilterBy
