import React,{useEffect,useContext,useState} from 'react'
import { AppContext } from '../../AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { RxCross2 } from 'react-icons/rx';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import search from '../../Pages/Images/graphimage.png';
import {IoMdArrowDropdown} from 'react-icons/io'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import ReactApexChart from 'react-apexcharts';

export default function CashcollectionList() {

    const {loding,setloding,baseUrl,endPoints} = useContext(AppContext);
    const [cashCollection, setcashCollection] = useState([]);
    const [orderId, setorderId] = useState(16885665972661);
    const [orderList, setorderList] = useState({});
    const [modalIsOpen, setmodalIsOpen] = useState(false);

    function clickHandler(orderId){
        setmodalIsOpen(true);
        setorderId(orderId)
    }

   async function getCashCollection(){
        setloding(true);
        try{
            const res = await axios.get(
            `${baseUrl}${endPoints.endcashcollection}`,
            {
              headers: {
                Authorization:localStorage.getItem('token'),
                "Content-Type": "application/json",
              },
            }
            )
            console.log(res)
            setcashCollection(res.data.data);
           
        }catch(e){
            if(cashCollection){

            }else
            
            toast.warn("Something went wrong !")
        }
        setloding(false)
    }

   async function getOrderList(){
        setloding(true);
        try{
            const res = await axios.get(
            `${baseUrl}${endPoints.endorderlistbyid}${orderId}`,
            {
              headers: {
                Authorization:localStorage.getItem('token'),
                "Content-Type": "application/json",
              },
            }
            )
            setorderList(res.data)
            console.log(res.data)
            // console.log(orderList)
        //   console.log(res.data)
           
        }catch(e){
            toast.warn("Something went wrong !")
        }
        setloding(false)
    }

    useEffect(() => {
        getCashCollection();
    }, []);

    useEffect(() => {
        getOrderList();
    }, [orderId]);

    // console.log(cashCollection)

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
                  text: 'Cash Collection Overview',
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
    <div className='w-  flex justify-center flex-col '>
                   
            <div className="bg-[#F3E8FF] mt-8 p-5 rounded-t-xl flex justify-between">
                <div className=""><p><b><span className="font-bold text-purple-800">Number of Orders:</span>{" "}<span>{cashCollection.length}</span>  </b></p></div>
                <div className="text-white "> 
                    {/* <button type="text" className="border-2 p-2 bg-blue-500   border-white rounded-lg" 
                    onClick={handleClick}
                    >
                        <FontAwesomeIcon  />   
                        Order Assign
                    </button> */}
                </div>
                
            </div>


            <div className=" h-auto overflow-y-scroll">
              {
                cashCollection.length === 0 ? <div className="bg-[#F3E8FF] grid grid-cols-5 px-24 py-6">
                            <div></div>
                            <div></div>
                            <div className=" justify-items-center col-span-2" ><img src={search} alt="" /></div>
                            <div></div>
                      </div> :(
                        <div className="ha-auto overflow-y-scroll max-h-72">
                              <table class="table-auto w-full capitalize  p-2 bg-[#F3E8FF] pb-3">
                                  <thead className="py-3">
                                    <tr className="text-center mt-3 border-b-2 text-[#8F38F1]">
                                      <th>Order Id</th>
                                      <th>Collection Date</th>
                                      <th>Name</th>
                                      <th>Charges</th>
                                      <th>Amount Collected</th>
                                      <th>Collected By</th>
                                      <th>Net Bal</th>
                                      
                                    </tr>
                                  </thead>
                                  <tbody className="mt-2">
                                    {cashCollection.map((singleData, index) => {
                                      return (
                                        <tr
                                          key={index}
                                          className={` text-center border-b-2 text-[#8F38F1] opacity-80 text-xs`}
                                        >
                                          <td className=" cursor-pointer p-2 text-blue-800 font-bold hover:text-blue-900 hover:font-bold hover:ease-out hover:duration-300 hover:scale-125" 
                                            onClick={()=>clickHandler(singleData.order_id)} 
                                          >{singleData?.order_id}
                                          </td>
                                          <td>{singleData?.cash_collection_data?.collection_date}</td>
                                          <td>{singleData?.name}</td>
                                          <td>{singleData?.charges}</td>
                                          <td>{singleData?.cash_collection_data?.amount_collected}</td>
                                          <td>{singleData?.cash_collection_data?.collected_by}</td>
                                          <td>{singleData?.cash_collection_data?.net_balance}</td>
                                        
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                              </table>  
                        </div>
                    
                      )
                      
              }
           </div>
           <div className="flex bg-[#F3E8FF] gap-2 justify-between px-5 pb-6 rounded-b-xl">
               <div className="flex gap-8 mt-5">
                        
                        <div className=" flex px-2  rounded-lg border-2 items-center gap-3 border-white text-[#2563EB]">
                            <button type="text" className=" p-2  " >   Items per pages   <FontAwesomeIcon /></button>
                            <button type="text" className=" p-2 bg-[#2563EB] flex items-center gap-2 text-white" >   <p>15 </p>  <IoMdArrowDropdown /></button>
                            <p>0 of 0</p>
                            <div><MdKeyboardArrowLeft/></div>
                            <div><MdKeyboardArrowRight/></div>
                            
                        </div>
               </div>
               <div className="flex gap-8 mt-5">
                        <div className="text-blue-600"> <button type="text" className="border-2 p-2   border-blue-500 rounded-lg" ><FontAwesomeIcon  />   Sync Website Order </button></div>
                        <div className="bg-blue-700 rounded-lg border-2 border-blue-500 text-white">
                        {/* <button type="text" className=" p-2 bg-[#2563EB] " 
                        onClick={()=>setcreateUserDialogbox(true)}
                        >   Add Order   <FontAwesomeIcon /></button> */}
                        </div>
               </div>
            </div>

            {/* // chart js */}
            <div className='w-full mt-20'>
             <ReactApexChart options={rtoCount.state.options} series={rtoCount.state.series} type="line" height={350} />
           </div>


                          <ReactModal
                           
                           isOpen={modalIsOpen}
                           contentLabel="Example Modal"
                           className='outline-none rounded-2xl 
                           bg-[#FFF] absolute  top-80 mr ml-72
                             flex  items-center justify-center  shadow-xl shadow-gray-400
                              
                             '
                          >
                           <div className='mt-5  px-10 w-full h-1/2 overflow-auto pb-5'>
   
                                   <div className='h-auto  flex justify-start mb-5 '>
                                           <div className='text-white p-2 bg-blue-600 rounded-full cursor-pointer
                                           '
                                            onClick={()=>setmodalIsOpen(false)}
                                           >
   
                                           <RxCross2/>
                                           </div>
                                   </div>
                                   <div>Order Id: {" "}<span className='font-bold'>{orderList?.request_order_id}</span></div>
                                   
                                   <div>Status:{" "}<span className='font-bold'>{orderList?.status}</span></div>
                                    <div>Payment Method: <span className='font-bold'>{orderList.payment?.payment_method}</span></div>
                                    <div className='font-bold'>Pickup Location:</div>
                                    <div className='w-full flex gap-5'>
                                            <div>Name: <span className='font-semibold'>{orderList.pickup_location?.name}</span></div>
                                            <div>City: <span className='font-semibold'>{orderList.pickup_location?.city}</span></div>
                                            <div>Country: <span className='font-semibold'>{orderList.pickup_location?.country}</span></div>
                                            <div>Postal Code: <span className='font-semibold'>{orderList.pickup_location?.postal_code}</span></div>
                                    </div>
                                    <div className='font-bold'>Drop Location:</div>
                                    <div className='w-full flex  gap-5'>
                                            <div>Name: <span className='font-semibold'>{orderList.pickup_location?.name}</span></div>
                                            <div>City: <span className='font-semibold'>{orderList.pickup_location?.city}</span></div>
                                            <div>Country: <span className='font-semibold'>{orderList.pickup_location?.country}</span></div>
                                            <div>Postal Code: <span className='font-semibold'>{orderList.pickup_location?.postal_code}</span></div>
                                    </div>
                                    
                                   
                                   <div className=' flex flex-col gap-8 mt-5'>
                                    
                                       <table class="table-auto gap-9">
                                           <thead>
                                             <tr>
                                               <th>S.No.</th>
                                               <th>Item Name</th>
                                               <th>Height</th>
                                               <th>Length</th>
                                               <th>Width</th>
                                               <th>Price</th>
                                               <th>Weight</th>
                                             </tr>
                                           </thead>
                                           <tbody>

                                           {
                                            
                                             orderList.items?.map((singleItem,index)=>{
                                                 return <tr className={`${index % 2 == 0 && 'bg-gradient-to-l from-white to-blue-200'}  text-center`} key={index}
                                               
                                                 >
                                                 <td>{index+1}</td>
                                                 <td>{singleItem.name}</td>
                                                 <td>{singleItem.height}</td>
                                                 <td>{singleItem.length}</td>
                                                 <td>{singleItem.width}</td>
                                                 <td>{singleItem.price}</td>
                                                 <td>{singleItem.weight}</td>
   
                                       
                                       </tr>
                                               })
                             
                                             }
                                            
                                           </tbody>
                                       </table>
                                   </div>
                           </div>
                          
                          </ReactModal> 

    </div>
  )
}
