import React,{useState} from 'react'
import { SlCalender } from 'react-icons/sl';
import { FiFilter } from 'react-icons/fi';
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import { BiDownload } from 'react-icons/bi';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useEffect } from 'react';

export default function OrdersHeaders(props) {

    const [pages, setpages] = useState(0);
    useEffect(()=>{
        props.setpages(pages)
    },[pages])
    
  return (
    <div>

                    <div className='flex gap-20 items-center flex-wrap mt-6'>
                        {
                            ['New','Ready to Ship','Pickups','In Transit','Delivered','RTO','All']
                            .map((singleData,index)=>{
                                  return <div 
                                  onClick={()=>setpages(index)}
                                 
                                  className={` ${index === pages ? 'border-b-2 border-[#2563EB]' : 'border-b-2'} text-[#2563EB] cursor-pointer`}>
                                                    <p>{singleData}</p>
                                         </div>
                                       
                            })
                        }
                    </div>


                    <div className='flex justify-between flex-wrap mt-8'>
                        <div className='gap-20 flex'>
                            <div className='flex gap-3 items-center bg-white px-3 py-2 rounded-l-full rounded-r-full text-[#2563EB]'>
                                <div><SlCalender/></div>
                                <p className='text-sm'>Last 30 days</p>
                                <div ><IoIosArrowDropdown/></div>
                            </div>
                            <div className='flex gap-3 px-3 py-2 rounded-l-full rounded-r-full items-center bg-white text-[#2563EB]'>
                                <div><FiFilter/></div>
                                <p className='text-sm'>More Filters</p>
                            </div>
                        </div>
                        <div className='flex gap-5 flex-wrap'>
                            <div className='flex gap-3 px-3 py-2 rounded-l-full rounded-r-full items-center bg-white text-[#2563EB]'>
                                <div className='text-2xl'><HiOutlineSquare3Stack3D/></div>
                            </div>
                            <div className='flex gap-3 px-3 py-2 rounded-l-full rounded-r-full items-center bg-white text-[#2563EB]'>
                           
                                <div className='text-2xl'><BiDownload/></div>
                                
                               
                            </div>
                            <div className='flex gap-3 px-3 py-2 rounded-l-full rounded-r-full items-center bg-white text-[#2563EB] text-sm'>
                                <select name="bulkaction" id="bulkaction">
                                    <option value="bulkaction">Select Bulk Action</option>
                                </select>
                            </div>
                        </div>
                    </div>


    </div>
  )
}
