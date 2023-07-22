import React from 'react'
import graphImage from '../Images/graphimage.png'
import { AiOutlineCalendar } from 'react-icons/ai';

export default function Courier() {
  return (
    <div className='w-full relative'>
            <div className='h-10 w-full flex items-center bg-[#F5F5F5]'>
            <div className='w-full fixed z-10 bg-[#F5F5F5] flex gap-4'>
                    <div className='w-64 text-sm p-3 rounded-l-full rounded-r-full bg-white  flex justify-between items-center gap-8 text-blue-800'>
                                <p>31-may,2020 - 21-may,2021 </p>
                                <div><AiOutlineCalendar/></div>
                    </div>
                    <div className='w-64 text-sm p-3 rounded-l-full rounded-r-full bg-white  flex justify-between items-center gap-8 text-blue-800'>
                                <p>Zone </p>
                                <div><AiOutlineCalendar/></div>
                    </div>
                    <div className='w-64 text-sm p-3 rounded-l-full rounded-r-full bg-white  flex justify-between items-center gap-8 text-blue-800'>
                                <p>Payment Mode</p>
                                <div><AiOutlineCalendar/></div>
                    </div>
                </div>
            </div>
   

            <div className='w-full mt-8'>
            <div className=' bg-[#F3E8FF] py-8 rounded-xl w-full flex justify-center items-center'>
                
                <div>
                    <img src={graphImage} alt="" />
                </div>

            </div>

            </div>
   
 

        <div className='h-64 w-full'>
        </div>
    
 </div>
  )
}
