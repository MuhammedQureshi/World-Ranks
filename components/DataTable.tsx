import React from 'react'
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



function DataTable({countries}:any) {
  return (
    <div className='w-full p-4 shadow-lg md:rounded-2xl relative top-[-4rem] bg-[#1B1D1F] border-solid border-[1px] border-[#282b30]'>
      <div className='flex flex-1 p-4'>
        <h1 className='text-[#6C727F] flex flex-1 font-medium text-[16px] items-center'>Found {countries.length} countries</h1>
        <SearchInput />
      </div>
      <section>
        <Table className=''>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Flag</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Population</TableHead>
              <TableHead>Area(km^2)</TableHead>
              <TableHead>Region</TableHead>
            </TableRow>
          </TableHeader>
          {countries.map((country: any) => 
            <TableBody key={country.name.common} className=''>
              <TableRow>
                <TableCell className="text-5xl">{country.flag}</TableCell>
                <TableCell>{country.name.common}</TableCell>
                <TableCell>{country.population.toLocaleString()}</TableCell>
                <TableCell>{country.area.toLocaleString()}</TableCell>
                <TableCell>{country.region}</TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>

      </section>
    </div>
  )
}

export default DataTable