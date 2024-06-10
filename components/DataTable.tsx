'use client'
import React, { useState } from 'react'
import SearchInput from '@/components/SearchInput'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table"
import FilterBy from '@/components/FilterBy';



function DataTable({countries}:any) {
  
  const [keyword, setKeyword] = useState('');
  
  const filteredCountries = countries.filter((country:any) => 
    country.name.common.toLowerCase().includes(keyword) ||
    country.region.toLowerCase().includes(keyword)  
  );

  const onInputChange = (e:any) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  }

  return (
    <div className='w-full p-4 shadow-lg md:rounded-2xl relative top-[-4rem] bg-[#1B1D1F] border-solid border-[1px] border-[#282b30]'>
      <div className='flex flex-1 p-4'>
        <h1 className='text-[#6C727F] flex flex-1 font-medium text-[16px] items-center'>Found {countries.length} countries</h1>
        <SearchInput onChange={onInputChange} />
      </div>
      <section className='lg:flex mx-6 items-start'>
        <section className='flex flex-col lg:mb-0 lg:w-[320px] px-2'>
          <FilterBy />
        </section>
        <section className='md:ml-auto mt-6 lg:w-2/3'>
          <Table className='min-w-[600px] w-full table-fixed text-sm text-left rtl:text-right text-gray-500'>
            <TableHeader className=''>
              <TableRow>
                <TableHead className="w-[100px] text-center">Flag</TableHead>
                <TableHead className='text-center'>Name</TableHead>
                <TableHead className='text-center'>Population</TableHead>
                <TableHead className='text-center'>Area(km^2)</TableHead>
                <TableHead className='text-center'>Region</TableHead>
              </TableRow>
            </TableHeader>
            {filteredCountries.map((country: any) => 
              <TableBody key={country.name.common} className='text-center'>
                <TableRow>
                  <TableCell className="text-5xl">{country.flag}</TableCell>
                  <TableCell className=''>{country.name.common}</TableCell>
                  <TableCell>{country.population.toLocaleString()}</TableCell>
                  <TableCell>{country.area.toLocaleString()}</TableCell>
                  <TableCell>{country.region}</TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </section>
      </section>
    </div>
  )
}

export default DataTable