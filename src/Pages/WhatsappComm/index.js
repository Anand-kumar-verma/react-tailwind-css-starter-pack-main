import React,{useState} from 'react'
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdArrowUpward } from 'react-icons/md';
import { MdArrowDownward } from 'react-icons/md';
import ReactApexChart from 'react-apexcharts';
import graphImage from '../Images/graphimage.png'


export default function WhatsappComm() {

    const [status, setstatus] = useState(
        {
            state : {
          
                series: [44, 55, 13, 43, 22],
                options: {
                  chart: {
                    width: 380,
                    type: 'pie',
                  },
                  labels: ['Status 1', 'Status 1', 'Status 1', 'Status 1', 'Status 1'],
                  responsive: [{
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200
                      },
                      legend: {
                        position: 'bottom'
                      }
                    }
                  }]
                },
              
        }
     }
    )

  return (
    <div className='w-full relative'>
       <div className='h-10 w-full flex items-center bg-[#F5F5F5]'>
          <div className='w-full fixed z-10 bg-[#F5F5F5]'>
                <div className='w-80 text-sm p-2 py-3 rounded-l-full rounded-r-full bg-white  flex justify-between items-center gap-8 text-blue-800'>
                            <p>31-may,2020 - 21-may,2021 </p>
                            <div><AiOutlineCalendar/></div>
                        </div>
                </div>
       </div>
       <div className='w-full flex justify-between mt-10 '>
         {
            [
                {
                    title:'Total Orders',
                    cnt:0,
                    cntpercnt:+11.01
                },
                {
                    title:'Total Message Sent',
                    cnt:0,
                    cntpercnt:+10.01
                },
                {
                    title:'Message Read Rate',
                    cnt:0,
                    cntpercnt:-1.01
                },
                {
                    title:'Quiries Resolved',
                    cnt:0,
                    cntpercnt:-1.01
                },
            ].map((singleData,index)=>{
                        return <div className={`
                                        ${index === 0 && 'bg-gradient-to-b from-[#C9FBE5] to-[#77ECAA]'} 
                                        ${index === 1 && 'bg-gradient-to-b from-[#FFC9CE] to-[#FD8294]'} 
                                        ${index === 2 && 'bg-gradient-to-b from-[#C0EAFF] to-[#97B6FB]'} 
                                        ${index === 3 && 'bg-gradient-to-b from-[#FFE0FF] to-[#C598FF]'} 
                                        px-5 py-5 flex flex-col gap-3 text-[#000000]  rounded-lg
                                   `}>
                                    <div className='font-bold'>{singleData.title}</div>
                                <div className='flex justify-between gap-32'>
                                    <div className='font-bold text-3xl'>{singleData.cnt}{" "}%</div>
                                    <div className='text-black text-sm flex gap-1 items-center'>
                                        <div><span>{singleData.cntpercnt > 0 && '+'}</span>{singleData.cntpercnt}</div>
                                        <div className='text-black'>
                                            {
                                                (singleData.cntpercnt) >= 0 ? (<MdArrowUpward/>):(<MdArrowDownward/>)
                                            }
                                        </div>
                                    </div>
                                </div>
                        </div>
                    })
         }
       </div>

       <div className='w-full  flex mt-8 gap-8'>
        <div className='flex flex-col gap-10 overflow-hidden bg-white py-8 rounded-xl w-1/2 items-center'>
             <div className='font-bold w-full ml-12'>
             <p>Top 5 Most Viewed Status</p>
             <div className='w-full mt-2 h-[1px] bg-slate-300'></div>
             </div>
             
             <ReactApexChart 
             options={status.state.options} 
             series={status.state.series} 
             type="pie" width={380} 
             
             />

        </div>
        <div className='flex flex-col gap-10 overflow-hidden bg-white py-8 rounded-xl w-1/2 items-center'>
             <div className='font-bold w-full ml-12'>
             <p>Messages Sent Over Time</p>
             <div className='w-full mt-2 h-[1px] bg-slate-300'></div>
             </div>
             
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
