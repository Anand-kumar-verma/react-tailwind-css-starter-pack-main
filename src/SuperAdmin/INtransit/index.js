import React,{useState,useContext,useEffect} from 'react'
import { AppContext } from '../../AppContext';
import search from '../../Pages/Images/graphimage.png'
import axios from 'axios';
import {toast} from 'react-toastify'
import ReactModal from 'react-modal';
import { RxCross2 } from 'react-icons/rx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function InTransit() {

    const {loding,setloding,cid,setcid,baseUrl,endPoints} = useContext(AppContext);

    const [getallorder, setgetallorder] = useState([]);
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const [itemId, setitemId] = useState(0);

    function clickHandler(id){
        setitemId(id)
        setmodalIsOpen(true)
      }


    async function getAllOrders() {
        // console.log("Function Called !")
        setloding(true);
    
        try {
          const res = await axios.get(
            `${baseUrl}${endPoints.endgetallorderlist}`,
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          );
          // if (res.statusText === "OK") {
          //   // console.log(res.data.msg);
          //   // toast.success(res.data.msg);
          //   setgetallorder(res.data);
          // }
          setgetallorder(res.data);
          // console.log(res.data,'verma')
        } catch (e) {
          toast.warn("Something went wrong !")
          // console.log(e);
        }
    
    
        setloding(false);
      }
    
        // get all orders company wise
        async function getAllOrdersCmpanywise() {
          setloding(true);
      
          try {
            const res = await axios.get(
              `${baseUrl}${endPoints.endgetorderlistcompanywise}${cid}`,
              {
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
              }
            );
    
            setgetallorder(res.data);
    
          } catch (e) {
            toast.warn("Something went wrong !")
            console.log(e);
          }
          setloding(false);
        }
      
      
        useEffect(() => {
          if(cid != null && cid != "selectcompany"){
            getAllOrdersCmpanywise();
          }else{
            getAllOrders();
          }
          
         
        }, []);

    return (
            <div>
                 <div className="bg-[#F3E8FF] mt-8 p-5 rounded-t-xl flex justify-between">
                <div className=""><p><b><span className="font-bold text-purple-800">Number of Orders:</span>{" "}<span>{getallorder.filter((singleItem)=>
                
                (
                    singleItem?.status.toLowerCase() != 'pending' 
                    &&
                    singleItem?.status.toLowerCase() != 'accepted'
                    &&
                    singleItem?.status.toLowerCase() != 'delivered'
                )
                
                ).length}</span>  </b></p></div>
                <div className="text-white "> 
                    {/* <button type="text" className="border-2 p-2 bg-blue-500   border-white rounded-lg" 
                    onClick={handleClick}
                    >
                        <FontAwesomeIcon  />   
                        Order Assign
                    </button> */}
                </div>
                
                  </div>

                    <div className="h-72 overflow-y-scroll pb-4">
                    {
                            getallorder.filter((singleItem)=>singleItem?.status.toLowerCase() != 'pending' &&singleItem?.status.toLowerCase() != 'accepted'&&singleItem?.status.toLowerCase() != 'delivered'
                                
                            ).length === 0 

                            ? <div className="bg-[#F3E8FF] grid grid-cols-5 px-24 py-6">
                                <div></div>
                                <div></div>
                                <div className=" justify-items-center col-span-2" ><img src={search} alt="" /></div>
                                <div></div>
                            </div> :(
                            <div className="h-72 overflow-y-scroll pb-4">
                                    <table class="table-auto w-full capitalize  p-2 bg-[#F3E8FF] pb-3">
                                        <thead className="py-3">
                                        <tr className="text-center mt-3 border-b-2 text-[#8F38F1]">
                                            <th>Order Details</th>
                                            <th>Total Amount(Rs.)</th>
                                            <th>Package Details</th>
                                            <th>Payment</th>
                                            <th>Pickup Address</th>
                                            <th>Status</th>
                                            
                                        </tr>
                                        </thead>
                                        <tbody className="mt-2">
                                        {getallorder.filter((singleItem)=>
                                        singleItem?.status.toLowerCase() != 'pending' 
                                        &&
                                        singleItem?.status.toLowerCase() != 'accepted'
                                        &&
                                        singleItem?.status.toLowerCase() != 'delivered'
                                        ).map((singleData, index) => {
                                            return (
                                            <tr
                                                key={index}
                                                className={` text-center border-b-2 text-[#8F38F1] opacity-80 text-xs`}
                                            >
                                                <td className=" cursor-pointer p-2 text-blue-800 font-bold hover:text-blue-900 hover:font-bold hover:ease-out hover:duration-300 hover:scale-125" 
                                                onClick={()=>clickHandler(singleData.request_order_id)} 
                                                >{singleData?.request_order_id}</td>
                                                <td>{singleData?.total_amount}</td>
                                                <td>{singleData?.request_order_id}</td>
                                                <td>{singleData?.payment === null && " "}</td>
                                                <td>{singleData?.pickup_location?.address}</td>
                                                <td
                                                onClick={()=>setmodalIsOpen(true)}
                                                className={`${singleData?.status.toLowerCase() === 'accepted' ? 'bg-green-300 p-1':'bg-purple-300 p-1'} rounded-lg font-semibold  gap-2 items-center p-1 text-blue-900 cursor-pointer  hover:text-blue-900 hover:font-bold hover:ease-out hover:duration-300 hover:scale-125`}
                                                >
                                                {singleData?.status}
                                                </td>
                                            
                                            </tr>
                                            );
                                        })}
                                        </tbody>
                                    </table>  
                            </div>
                        
                            )
                            
                    }
                    </div>
                    <div className="flex bg-[#F3E8FF] gap-2 justify-between px-5 pb-6 rounded-b-xl pt-5">
                        <div className="flex gap-8">
                                    
                                    <div className=" flex px-2 rounded-lg border-2 items-center gap-3 border-white text-[#2563EB]">
                                        {/* <button type="text" className=" p-2  " >   Items per pages   <FontAwesomeIcon /></button> */}
                                        {/* <button type="text" className=" p-2 bg-[#2563EB] flex items-center gap-2 text-white" >   <p>15 </p>  <IoMdArrowDropdown /></button> */}
                                        {/* <p>0 of 0</p> */}
                                        {/* <div><MdKeyboardArrowLeft/></div>
                                        <div><MdKeyboardArrowRight/></div> */}
                                        
                                    </div>
                        </div>
                        <div className="flex gap-8">
                                    <div className="text-blue-600"> <button type="text" className="border-2 p-2   border-blue-500 rounded-lg" ><FontAwesomeIcon  />   Sync Website Order </button></div>
                                    <div className="bg-blue-700 rounded-lg border-2 border-blue-500 text-white"><button type="text" className=" p-2 bg-[#2563EB] " >   Add Order   <FontAwesomeIcon /></button></div>
                        </div>
                    </div>

                    <div className='h-64 w-full'></div>
                    <ReactModal
                           
                           isOpen={modalIsOpen}
                           contentLabel="Example Modal"
                           className='outline-none rounded-2xl 
                           bg-[#FFF] absolute  top-60 w-[80%]  ml-32
                             flex  items-center justify-center shadow-lg shadow-slate-400 border-t-2 border-gray-500
                              
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
                                   <div className=' flex flex-col gap-8'>
                                   <table class="table-auto gap-9">
                                   <thead>
                                    <tr>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                   </thead>
                                   <tbody>
                                   <tr>
                                      <td>
                                      <span className="font-semibold">Request Order ID:</span>
                                        {
                                          getallorder.find((singleData)=>singleData.request_order_id === itemId)?.request_order_id
                                        }
                                      </td>
                                      <td>
                                      <span className="font-semibold">Order Id:</span>
                                        {
                                          getallorder.find((singleData)=>singleData.request_order_id === itemId)?.order_id
                                        }
                                      </td>
                                   </tr>
                                   <tr>
                                      <td>
                                      <span className="font-semibold">Pickup Location:</span>
                                        {
                                          getallorder.find((singleData)=>singleData.request_order_id === itemId)?.pickup_location?.address
                                        }
                                      </td>
                                      <td>
                                      <span className="font-semibold">Drop Location:</span>
                                        {
                                          getallorder.find((singleData)=>singleData.request_order_id === itemId)?.drop_location?.address
                                        }
                                      </td>
                                   </tr>
                                   <tr>
                                      <td>
                                      <span className="font-semibold"> Date & Time:</span>
                                     
                                        {
                                          new Date(getallorder.find((singleData)=>singleData.request_order_id === itemId)?.created_at).toString()
                                        }
                                      </td>
                                      <td>
                                      <span className="font-semibold">Total Order Value:</span>
                                        {
                                          getallorder.find((singleData)=>singleData.request_order_id === itemId)?.total_order_value
                                        }
                                      </td>
                                   </tr>
                                  
                                   </tbody>
                                  <span className="font-semibold">Total Items:</span>
                                   </table>
                                       <table class="table-auto gap-9 overflow-y-scroll" >
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
                                            
                                            getallorder.find((singleData)=>singleData.request_order_id === itemId)?.items.map((singleItem,index)=>{
                                                 return <tr className={`${index % 2 == 0 && 'bg-gradient-to-l from-white to-blue-200'}  text-center`} key={index}
                                               
                                                 >
                                                 <td>{index+1}</td>
                                                 <td>{singleItem?.name}</td>
                                                 <td>{singleItem?.height}</td>
                                                 <td>{singleItem?.length}</td>
                                                 <td>{singleItem?.width}</td>
                                                 <td>{singleItem?.price}</td>
                                                 <td>{singleItem?.weight}</td>
   
                                       
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

