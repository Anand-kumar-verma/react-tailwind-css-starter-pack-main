import React,{useState} from "react";
import ReactApexChart from 'react-apexcharts';
import { SlCalender } from 'react-icons/sl';
import search from '../Images/graphimage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons'
import img2 from '../Images/graphimage.png';
import { faCircle } from "@fortawesome/free-solid-svg-icons";


const Order = () =>{
    const [data,setData] =useState({
        series: [ 60,30, 10],
    options: {
    chart: {
    type: "donut",
    },
    responsive: [
    {
    breakpoint: 480,
    options: {
    chart: {
    width: 200,
    },
    legend: {
    position: "bottom",
    },
    },
    },
    ],
    },
      })




      const[contriesData,setcontriesData] = useState({
        state : {
          
            series: [{
              data: ['100%' , '70%' , '50%' , '30%']
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: ['Lucknow' , 'Delhi' , 'Pune' , 'Ahmedabad'],
                  
                
              }
            }
          
      }
    })
    
    return(
        <>
            <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-2 overflow-scroll lg:fixed z-10 w-[80%] bg-[#F5F5F5] ">
                
                <div className="flex bg-white text-blue-500 justify-between  rounded-xl p-2"><p>May 31,2023-jun 29,2023</p>

                <SlCalender/></div>
                

                
                <div className="flex bg-white text-blue-500 justify-between  rounded-xl p-2"><p>Zone</p>

                <SlCalender/></div>
            

                
                <div className="flex bg-white text-blue-500 justify-between  rounded-xl p-2"><p>Courier</p>

                <SlCalender/></div>
                

            
                <div className="flex bg-white text-blue-500  justify-between  rounded-xl p-2"><p>Payment Mode</p>
                <SlCalender/></div>
            
                <div className="flex bg-white text-blue-500 justify-between   rounded-xl p-2"><p>Shipment Mode</p>
                <SlCalender/></div>
                
            </div>


            <div className="bg-[#F3E8FF] mt-20 p-5">
                <div className="text-emerald-800"><p><b>Orders Count</b></p></div>
            </div>
            <div className="grid lg:grid-cols-12 sm:grid-cols-1 md:grid-cols-2 gap text-center text-blue-600 bg-gradient-to-b from-white to-[#ecddfc] py-2 rounded-lg ">
                    <div className=""><p>Date</p></div>
                    <div className=""><p>Total Orders</p></div>
                    <div className=" col-span-2"><p>Pickup Unscheduled</p></div>
                    <div className=" col-span-2"><p>Pickup scheduled</p></div>
                    <div className=""><p>In-Transit</p></div>
                    <div className=""><p>Delivered</p></div>
                    <div className=""><p>Undelivered</p></div>
                    <div className=""><p>RTO</p></div>
                    <div className=" "><p>Last/Damaged</p></div>
                    <div className=""><p>Cancelled</p></div>
            </div>
            <div className="bg-[#F3E8FF] grid grid-cols-5 p-24">
                <div></div>
                <div></div>
                <div className=" justify-items-center col-span-2" ><img src={search} alt="" /></div>
                <div></div>
            </div>
    
            <div className="flex bg-[#F3E8FF] gap-2 justify-end p-5 ">
                <div className="text-blue-600"> <button type="text" className="border-2 p-2   border-blue-500 rounded-lg" ><FontAwesomeIcon icon={faAnglesLeft} />   previous </button></div>
                <div className="bg-blue-700 rounded-lg border-2 border-blue-500 text-white"><button type="text" className=" p-2  " >   Next   <FontAwesomeIcon icon={faAnglesRight} /></button></div>
            </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-56  pt-8 ">
            <div className="bg-white p-6  rounded-xl">
                <div className="flex justify-between"><p>Prepaid vs. COD Orders</p><span className="opacity-20">Last 30 Days</span></div>
                <div className="flex justify-center mt-10">
                    <div className='opacity-50'>
                            <ReactApexChart
                                options={data.options}
                                series={data.series}
                                type="donut"
                                width="100%"
                                />
                    </div>
                </div>
                <div className="grid grid-cols-4 opacity-30">
                    <div></div>
                <div className=""><FontAwesomeIcon icon={faCircle} className="text-sky-300" /> Prepaid</div>
                <div><FontAwesomeIcon icon={faCircle} className="text-slate-300" />COD</div>
                <div></div>
                </div> 
            </div>

            <div className="bg-white p-6   rounded-xl">
                <div className="flex justify-between"><p>Buyer Demographics</p><span className="opacity-20">Last 30 Days</span></div>
                <div className="flex justify-center mt-10"><img src={img2} alt="" /></div>
                
            </div>
        </div>
    <div className="bg-white mt-10 p-5 rounded-lg">
        <div className="flex justify-between">
            <p>Most Popular Orders Location</p> <span className="opacity-25">Last 30 Days</span>
        </div>
        <hr />
        <div className=" mt-5">
           
            <div className="w-full">
            <ReactApexChart options={contriesData.state.options} series={contriesData.state.series} type="bar" height={350} />
            </div>
        </div> 
    </div>
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-56  pt-8 ">
        <div className="bg-white p-6  rounded-xl">
            <div className="flex justify-between"><p>Prepaid vs. COD Orders</p> <span className="opacity-20">Last 30 Days</span></div>
            <div className="flex justify-center mt-10">
            <div className='opacity-50'>
                <ReactApexChart
                      options={data.options}
                      series={data.series}
                      type="donut"
                      width="100%"
                      />
                </div>
            </div>
            <div className="grid grid-cols-4 opacity-30">
                <div></div>
            <div className=""><FontAwesomeIcon icon={faCircle} className="text-sky-300" /> Order Count</div>
            <div><FontAwesomeIcon icon={faCircle} className="text-slate-300" />Revenue</div>
            <div></div>
            </div> 
        </div>

        <div className="bg-white p-6  rounded-xl">
            <div className=" justify-between flex">
                <p>Prepaid vs. COD Orders</p>
                 <span className="opacity-20">Last 30 Days</span>
            </div>

            <div className="flex justify-center mt-10">
            <div className='opacity-50'>
                <ReactApexChart
                      options={data.options}
                      series={data.series}
                      type="donut"
                      width="100%"
                      />
                </div>
            </div>
            <div className="grid grid-cols-4 opacity-30">
                <div></div>
            <div className=""><FontAwesomeIcon icon={faCircle} className="text-sky-300" /> Unit Sold</div>
            <div><FontAwesomeIcon icon={faCircle} className="text-slate-300" />Revenue</div>
            <div></div>
            </div> 
        </div>
    </div>
    <div className="pb-60"></div>
        </>

    )
};
export default Order;
