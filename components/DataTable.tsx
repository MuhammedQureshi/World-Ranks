"use client"
import React, { useState } from 'react';
import SearchInput from '@/components/SearchInput';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import FilterBy from '@/components/FilterBy';

function DataTable({ countries }: any) {
  const [keyword, setKeyword] = useState('');
  const [sortCriteria, setSortCriteria] = useState('name'); // Default sorting by name
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [independent, setIndependent] = useState(true); // Changed to false to show all initially
  const [unMember, setUnMember] = useState(true); // Changed to false to show all initially

  const onCheckChange = (value: string) => {
    if (value === 'independent') {
      setIndependent(!independent);
    } else if (value === 'unMember') {
      setUnMember(!unMember);
    }
  }

  const onInputChange = (e: any) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  }

  const onSortChange = (value: string) => {
    setSortCriteria(value);
  }

  const onSelect = (values: string[]) => {
    setSelectedRegions(values);
  }

  const filteredCountries = countries.filter((country: any) => {
    const matchesKeyword = country.name.common.toLowerCase().includes(keyword) ||
                           country.region.toLowerCase().includes(keyword);
    const matchesRegion = selectedRegions.length === 0 || selectedRegions.includes(country.region.toLowerCase());
    const matchesStatus = (!independent || country.independent) && (!unMember || country.unMember);
    return matchesKeyword && matchesRegion && matchesStatus;
  });

  const sortedCountries = filteredCountries.sort((a: any, b: any) => {
    if (sortCriteria === 'name') {
      return a.name.common.localeCompare(b.name.common);
    }
    if (sortCriteria === 'population') {
      return b.population - a.population;
    }
    if (sortCriteria === 'area') {
      return b.area - a.area;
    }
    if (sortCriteria === 'region') {
      return a.region.localeCompare(b.region);
    }
    return 0;
  });

  return (
    <div className='w-full p-4 shadow-lg md:rounded-2xl relative top-[-4rem] bg-[#1B1D1F] border-solid border-[1px] border-[#282b30]'>
      <div className='flex flex-1 p-4'>
        <h1 className='text-[#6C727F] flex flex-1 font-medium text-[16px] items-center'>
          Found {filteredCountries.length} countries
        </h1>
        <SearchInput onChange={onInputChange} />
      </div>
      <section className='lg:flex mx-6 items-start'>
        <section className='flex flex-col lg:mb-0 lg:w-1/4 pr-6'>
          <FilterBy 
            onValueChange={onSortChange} 
            onSelect={onSelect} 
            onCheckedChange={onCheckChange}
            independentChecked={independent}
            unMemberChecked={unMember}
          />
        </section>
        <section className='md:ml-auto mt-6 lg:w-4/5'>
          <Table className='min-w-[700px] w-full table-fixed text-sm text-left rtl:text-right text-gray-500'>
            <TableHeader className=''>
              <TableRow>
                <TableHead className="w-[100px] text-center">Flag</TableHead>
                <TableHead className='text-center'>Name</TableHead>
                <TableHead className='text-center'>Population</TableHead>
                <TableHead className='text-center'>Area(km^2)</TableHead>
                <TableHead className='text-center'>Region</TableHead>
              </TableRow>
            </TableHeader>
            {sortedCountries.map((country: any) => (
              <TableBody key={country.name.common} className='text-center'>
                <TableRow>
                  <TableCell className=' justify-center items-center flex'>
                    <img src={country.flags.svg} alt={country.name.common} className='w-10 h-7 rounded-sm' />
                  </TableCell>
                  <TableCell className=''>{country.name.common}</TableCell>
                  <TableCell>{country.population.toLocaleString()}</TableCell>
                  <TableCell>{country.area.toLocaleString()}</TableCell>
                  <TableCell>{country.region}</TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </section>
      </section>
    </div>
  )
}

export default DataTable;
