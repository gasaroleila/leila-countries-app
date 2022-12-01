import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";

const Selector = () => {
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

  const [filters, setFilters] = useState(['Africa', 'America', 'Asia', 'Europe', 'Oceania'])
  const dispatch = useDispatch()

  
  return (
    <div className="w-72 font-medium h-12 rounded-[3px] z-10 cursor-pointer text-hi shadow-sm">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 h-full shadown-sm flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
       <span className="pl-4"> {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Filter By Region"}</span>
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>  
      <ul
        className={`bg-white mt-2  overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        
        {filters?.map((filter,i) => (
          <li
            key={i}
            className={`p-2 text-sm hover:bg-bg hover:text-black
            ${
              filter?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            `}
            onClick={() => {
              if (filter.toLowerCase() !== selected.toLowerCase()) {
                setSelected(filter);
                dispatch({type: '', payload: selected})
                setOpen(false);
              }
            }}
          >
            <span className="pl-4">{filter}</span> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;