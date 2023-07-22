import React,{useState} from 'react'
import { AiFillExclamationCircle } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FiRefreshCw } from 'react-icons/fi';
import { IoIosArrowDropdown } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import { FiFilter } from 'react-icons/fi';
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import { BiDownload } from 'react-icons/bi';
import New from '../New';
import OrdersHeaders from './OrdersHeaders';
import OrderAssign from './OrderAssign';
import AutoOrderAssign from './AutoOrderAssing';
import { AppContext } from '../../AppContext';
import { useContext } from 'react';
import ReadyToShip from '../ReadyToShip';
import Pickups from '../Pickups';
import InTransit from '../INtransit';
import Delivered from '../Delivered';
import RTO from '../RTO';
import All from '../All';


export default function Orders() {

    const [pages, setpages] = useState(0);
    const [orderassingfunctionvalue, setorderassingfunctionvalue] = useState("");
    const {cid,setcid} = useContext(AppContext);
    
    // console.log(pages)

    function orderAssign(value){
        setorderassingfunctionvalue(value)
        console.log(value)
    }
   
    
  return (
    <div className=' w-[81%] fixed h-full  ml-8 mt-10'>
          <div className=''>
                   <div className='flex justify-between py-5 flex-wrap bg-red-200 px-2 rounded-xl'>
                        <div className='flex gap-3 flex-wrap items-center'>
                                <div className='text-red-600'>
                                        <AiFillExclamationCircle/>
                                </div>
                                <p className='text-[#AD5EF5]'><span className='text-red-500'>Please Note :</span> KYC verification is mandatory for shipping yours orders. Complete your KYC to start shipping orders seamlessly.</p>
                        </div>
                        <div className='flex flex-wrap gap-1  items-center text-[#AD5EF5] font-bold'>
                            <p className='underline'>Proceed to Verify  KYC</p>
                            <div>
                                <MdOutlineKeyboardArrowRight/>
                            </div>
                        </div>
                    </div>

                        {
                            orderassingfunctionvalue != "autoassing" &&  <div className='flex flex-wrap gap-5 justify-end  mt-6'>
                                                    <div className='flex gap-2 items-center cursor-pointer text-[#AD5EF5] text-sm bg-white p-2 rounded-l-full rounded-r-full px-3'
                                                     onClick={()=>window.location.reload()}
                                                    >
                                                        <p>Sync Orders</p>
                                                        <div className='text-lg'><FiRefreshCw/></div>
                                                    </div>
                                                    <div className='flex gap-2 items-center text-[#AD5EF5] text-sm bg-white p-2 rounded-l-full rounded-r-full px-3'>
                                                        <p>Add Order</p>
                                                        <div className='text-lg'><IoIosAddCircleOutline/></div>
                                                    </div>
                                                    <div className='flex gap-2 items-center text-[#AD5EF5] text-sm bg-white p-2 rounded-l-full rounded-r-full px-3'>
                                                        <p>All Orders</p>
                                                        <div className='text-lg'><IoIosArrowDropdown/></div>
                                                    </div>
                                                </div>

                        }
                   
                     <div>
                         {
                            orderassingfunctionvalue != "autoassing" && (orderassingfunctionvalue != "manuallyassing") && <OrdersHeaders setpages={setpages}/>
                        }
                        
                     </div>
          </div>

            <div className='overflow-scroll h-screen mt-3'>
                  
                    {
                        orderassingfunctionvalue != "autoassing" &&   pages === 0 &&  orderassingfunctionvalue != "manuallyassing" ? <New orderAssign={orderAssign}/> : pages === 0 && orderassingfunctionvalue != "autoassing" && <OrderAssign/>
                        
                    }

                    {
                        orderassingfunctionvalue != "autoassing" &&   pages === 1 &&  orderassingfunctionvalue != "manuallyassing" && <ReadyToShip/> 
                        
                    }
                    {
                        orderassingfunctionvalue != "autoassing" &&   pages === 2 &&  orderassingfunctionvalue != "manuallyassing" && <Pickups/> 
                        
                    }
                    {
                        orderassingfunctionvalue != "autoassing" &&   pages === 3 &&  orderassingfunctionvalue != "manuallyassing" && <InTransit/> 
                        
                    }
                    {
                        orderassingfunctionvalue != "autoassing" &&   pages === 4 &&  orderassingfunctionvalue != "manuallyassing" && <Delivered/> 
                        
                    }
                    {
                        orderassingfunctionvalue != "autoassing" &&   pages === 5 &&  orderassingfunctionvalue != "manuallyassing" && <RTO/> 
                        
                    }
                    {
                        orderassingfunctionvalue != "autoassing" &&   pages === 6 &&  orderassingfunctionvalue != "manuallyassing" && <All/> 
                        
                    }
                   
                    {
                        orderassingfunctionvalue === "autoassing" && <AutoOrderAssign/>
                    }

                  
             <div className='h-64 w-full'></div>
            </div>
    </div>
  )
}
