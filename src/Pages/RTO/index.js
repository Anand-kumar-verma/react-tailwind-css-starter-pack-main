import React,{useState} from 'react'
import { AiOutlineCalendar } from 'react-icons/ai';
import ReactApexChart from 'react-apexcharts';

export default function RTO() {

    
   const [rtoCount, setrtoCount] = useState(
    {
        state : {
          
            series: [{
                name: "Count in K",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'RTO Count',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['', '', '', '', '', '', '', '', ''],
              }
            }
    }
})

  return (
<div className='w-full relative'>
    <div className='h-10 w-full flex items-center bg-[#F5F5F5] '>
       <div className='fixed w-full z-10 bg-[#F5F5F5] flex gap-14 lg:flex-row flex-col'>
             <div className='text-sm p-2 py-3 rounded-l-full rounded-r-full bg-white  flex justify-between items-center gap-8 text-blue-800'>
                         <p>31-may,2020 - 21-may,2021 </p>
                         <div><AiOutlineCalendar/></div>
             </div>
             <div className='text-sm p-2 py-3 rounded-l-full rounded-r-full bg-white  flex justify-between items-center gap-20 text-blue-800'>
                         <p className='px-2'>Zone</p>
                         <div><AiOutlineCalendar/></div>
             </div>
             <div className='text-sm p-2 py-3 rounded-l-full rounded-r-full bg-white  flex justify-between items-center gap-20 text-blue-800'>
                         <p className='px-2'>Courier</p>
                         <div><AiOutlineCalendar/></div>
             </div>
             <div className='text-sm p-2 py-3 rounded-l-full rounded-r-full bg-white  flex justify-between items-center gap-20 text-blue-800'>
                         <p className='px-2'>Payment Mode</p>
                         <div><AiOutlineCalendar/></div>
             </div>
             <div className='text-sm p-2 py-3 rounded-l-full rounded-r-full bg-white  flex justify-between items-center gap-20 text-blue-800'>
                         <p className='px-2'>Shipment Mode</p>
                         <div><AiOutlineCalendar/></div>
             </div>
             
             
       </div>
      
             
    </div>
    <div className='w-full flex lg:flex-row lg:justify-between mt-10 bg-[#F3E8FF] flex-col item-center'>
      {
         [
             {
                 title:'Total RTO',
                 cnt:0,
                
             },
             {
                 title:'RTO Percentage',
                 cnt:0,
                 
             },
             {
                 title:'RTO Initiated',
                 cnt:'0%',
                
             },
             {
                 title:'RTO Undelivered',
                 cnt:0,
                
             },
             {
                 title:'RTO Delivered',
                 cnt:0,
             
             },
         ].map((singleData,index)=>{
                     return <div className={`
                                     mt-10 mb-6 mx-5
                                     px-5 py-3 flex flex-col gap-3 text-[#000000]  rounded-lg
                                      w-80  bg-gradient-to-b from-white to-[#ebdcfc]
                                `}>
                             <div className='font-bold'>{singleData.title}</div>
                             <div className='flex justify-between gap-32'>
                                 <div className='font-bold text-3xl'>{singleData.cnt}</div>
                                 
                             </div>
                     </div>
                 })
      }
    </div>

    <div className='w-full mt-20'>
            <ReactApexChart options={rtoCount.state.options} series={rtoCount.state.series} type="line" height={350} />
    </div>

   
 

    <div className='h-64 w-full'>
    </div>
 
</div>

  )
}
