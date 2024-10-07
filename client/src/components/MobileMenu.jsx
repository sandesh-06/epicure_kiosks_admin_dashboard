import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
function MobileMenu({className, links}) {
   
  return (
    <div className={`${className} w-60 px-2 py-2 bg-[#141414] border border-[#292929] flex flex-col rounded-md shadow-md`}>
        <ul>
        {links.map((link)=>(
            <Link className='my-2 py-3 px-2 flex justify-between items-center rounded-md hover:cursor-pointer'
            to={link.path}
            key={link.label}
            >
               <li className="text-white">{link.label}</li>
               <FaChevronRight color='white' size={15}/>
            </Link>
        ))}
        </ul>
    </div>
  )
}

export default MobileMenu