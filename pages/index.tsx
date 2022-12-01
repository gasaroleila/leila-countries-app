import DashboardLayout from '../layouts/dashboardLayout'
import { useFiltercountriesByRegionQuery, useGetcountriesQuery } from './api/apiSlice'
import {AiOutlineSearch} from 'react-icons/ai'
import { useRouter } from 'next/router'
import Selector from '../components/Selector';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../utils/hooks';
import { RootState } from '../utils/store';
import { BiChevronDown } from "react-icons/bi";


export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState(["none", "africa", "americas", "asia", "europe", "oceania"])
  
  let {
    data,
  } = useGetcountriesQuery();


  const filteredCountries =
    selected === "" || selected === "none"
      ? data
      : data.filter((country: any) => country?.region?.toLowerCase() === selected);

  const countries =
    search === "" 
      ? filteredCountries
      : filteredCountries.filter((country: any) => country?.name?.common?.toLowerCase().includes(search.toLowerCase()));

  
 
  // const selectedFilter = useAppSelector(state => state.country.selectedFilter)
  // console.log("selectedFilter", selectedFilter)


  console.log("countries", countries)

  return (
     <DashboardLayout>
      <div className=''>

        {/* search customization section */}
        <div className='flex justify-between w-[98%]'>

          {/* search input */}
          <div className='bg-background-light dark:bg-element-dark w-4/12 rounded-[3px] h-12 flex items-center shadow-sm'>
             <AiOutlineSearch size={20} className="mx-5 dark:text-white" />
              <input type="text" name="search" id="search" value={search} onChange={(e:any) => setSearch(e.target.value.toLowerCase())} className='bg-background-light dark:bg-element-dark dark:text-text-dark h-full  outline-none placeholder:text-hi text-darkGray  font-semibold placeholder:dark:text-light dark:text-text-dark' placeholder='Search for a country...' />
          </div>

          {/* Filter Box */}
          <div className="w-72 font-medium h-12 rounded-[3px] z-10 cursor-pointer text-hi shadow-sm">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-light dark:bg-element-dark w-full p-2 h-full shadown-sm flex items-center justify-between rounded ${
          !selected && "text-gray-700 dark:text-light"
        }`}
      >
       <span className="pl-4 font-semibold dark:text-light"> {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Filter By Region"}</span>
        <BiChevronDown size={20} className={`${open && "rotate-180"} dark:text-light`} />
      </div>  
      <ul
        className={`bg-white dark:bg-element-dark mt-2  overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        
        {filters?.map((filter,i) => (
          <li
            key={i}
            className={`p-2 text-sm hover:bg-bg hover:dark:bg-background-dark hover:text-black font-semibold
            ${
              filter?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white dark:text-text-dark"
            }
            `}
            onClick={() => {
              if (filter.toLowerCase() !== selected.toLowerCase()) {
                setSelected(filter);
                setOpen(false);
              }
            }}
          >
            <span className="pl-4 dark:text-light">{filter}</span> 
          </li>
        ))}
      </ul>
          </div>
          


        </div>
        

        {/* countries list */}
        <div className='flex flex-wrap mt-10 dark:text-light'>
          {
            countries && countries?.map((country:any, i:number) => (
              <div key={i} className={`bg-white dark:bg-element-dark shadow-sm ${i !== (data.length - 1) ? 'mr-[3.5rem]' : ''} mb-[3.5rem] w-[20%] h-2/5 cursor-pointer rounded-[3px]`} 
              onClick={() => {
                 router.push(`/${country?.name?.common}`);
              }}
              >
                <div className='w-full h-[123px] object-fill'>
                  <img src={country?.flags?.svg} alt="flag" className='w-full h-full' />  
                  </div>
                <div className='flex flex-col mx-5 my-5 mb-8'>
                  <p className='font-bold my-2'>{country?.name?.common}</p>
                  <p className='text-hi mb-2 font-semibold'>Population: <span className='text-darkGray'>{(country?.population).toLocaleString()}</span></p>
                  <p className='text-hi mb-2 font-semibold'>Region: <span className='text-darkGray'>{country?.region}</span></p>
                  <p className='text-hi mb-2 font-semibold'>Capital: <span className='text-darkGray'>{country?.capital}</span></p>

                </div>
               </div>
            ))
           }
        </div>
       </div>
    </DashboardLayout>
  )
}
