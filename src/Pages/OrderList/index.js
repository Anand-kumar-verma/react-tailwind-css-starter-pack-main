// import React,{useState,useEffect,useContext} from 'react'
// import { AppContext } from '../../AppContext';
// import axios from 'axios';
// import Loding from '../../component/Loding'
// import { RxCross2 } from 'react-icons/rx';
// import ReactModal from 'react-modal';

// export default function OrderList() {

//     const {baseUrl,endPoints,loding,setloding} = useContext(AppContext);
//     const [orderList, setorderList] = useState([]);
//     const [itemId, setitemId] = useState(0);
//     const [modalIsOpen, setmodalIsOpen] = useState(false);
 
//     function clickHandler(id){
//       setitemId(id)
//       setmodalIsOpen(true)
//     }

//     async function getOrderList(){

//         setloding(true)

//         try{
//           const response = await axios.get(
//             `${baseUrl}${endPoints.endorderlist}`,
//             {
//               headers: {
//                 Authorization:localStorage.getItem('token'),
//                 "Content-Type": "application/json",
//               },
//             }
//           )
//           console.log(response)
//             setorderList(response.data)
           
//           }catch(e){
//               alert('Something went wrong')
//           }
//         setloding(false)
//     }

//     useEffect(() => {
//         getOrderList()
//     }, []);

//     useEffect(()=>{
//       getOrderList()
//     },[itemId])


//   return (
//    <div className='w-[80%] h-full flex justify-center ml-5  fixed overflow-auto'>
//     {
//       loding ? (
//         <Loding/>
//       ):(
//         <div className='w-full h-full overflow-auto  mt-8  flex flex-col px-3 rounded-2xl bg-[#b9b8b8] bg-opacity-10 border-2 border-white '
//         >           

//                 <div className='w-full font-bold m-5'>Total Items:<span>{orderList.length}</span>
//                 </div>
//                 <table className='mb-5 w-full border-gray-400  text-center bg-[#FFFF] bg-opacity-10 table-auto rounded-2xl'>
//                           <thead className='mt-2 bg-[#F5F5F5] '>
//                           <tr className='content-center py-3'>
//                             <th>Total Items</th>
//                             <th>Status</th>
//                             <th>Total Amount</th>
//                             <th>Payment Method</th>
//                             <th className=''>
//                             <div>Pickup Location</div>
//                             <div className='w-full  flex justify-evenly'>
//                               <div>City</div>
//                               <div>Country</div>
//                               <div>Postal Code</div>
//                             </div>
//                             </th>
//                             <th className=''>
//                             <div>Drop Location</div>
//                             <div className='w-full  flex justify-evenly'>
//                               <div>City</div>
//                               <div>Country</div>
//                               <div>Postal Code</div>
//                             </div>
                            
//                             </th>
//                           </tr>
//                           </thead>
//                           <tbody>
//                           {
//                             orderList.map((singleItem,index)=>{
//                                 return <tr className={`${index % 2 == 0 && ''} cursor-pointer  text-center py-3`} key={index}
//                                 onClick={()=>clickHandler(singleItem.request_order_id)}
//                                 >
//                                          <td>{singleItem.items.length}</td>
//                                          <td>{singleItem.status}</td>
//                                          <td>{singleItem.total_amount}</td>
//                                          <td>{singleItem.payment?.payment_method}</td>
//                                          <td>
//                                             <tr>
//                                                 <td>{singleItem.pickup_location.city}</td>
//                                                 <td>{singleItem.pickup_location.country}</td>
//                                                 <td>{singleItem.pickup_location.postal_code}</td>
//                                             </tr>
//                                          </td> 
//                                          <td>
//                                           <tr>
//                                             <td>{singleItem.drop_location.city}</td>
//                                             <td>{singleItem.drop_location.country}</td>
//                                             <td>{singleItem.drop_location.postal_code}</td>
//                                           </tr>
//                                          </td> 

                                    
//                                     </tr>
//                             })
                          
//                           }
                          
//                           </tbody>
                        
//                  </table>

//                        <ReactModal
                           
//                         isOpen={modalIsOpen}
//                         contentLabel="Example Modal"
//                         className='outline-none rounded-2xl 
//                         bg-[#e5d8f6] absolute  top-1/2 w-[80%] mr ml-72
//                           flex  items-center justify-center
                           
//                           '
//                        >
//                         <div className='mt-5  px-10 w-full h-1/2 overflow-auto pb-5'>

//                                 <div className='h-auto  flex justify-start mb-5 '>
//                                         <div className='text-white p-2 bg-blue-600 rounded-full cursor-pointer
//                                         '
//                                          onClick={()=>setmodalIsOpen(false)}
//                                         >

//                                         <RxCross2/>
//                                         </div>
//                                 </div>
//                                 <div className=' flex flex-col gap-8'>
//                                     <table class="table-auto gap-9">
//                                         <thead>
//                                           <tr>
//                                             <th>S.No.</th>
//                                             <th>Item Name</th>
//                                             <th>Height</th>
//                                             <th>Length</th>
//                                             <th>Width</th>
//                                             <th>Price</th>
//                                             <th>Weight</th>
//                                           </tr>
//                                         </thead>
//                                         <tbody>
//                                         {
                                         
//                                           orderList.find((singleData)=>singleData.request_order_id === itemId)?.items.map((singleItem,index)=>{
//                                               return <tr className={`${index % 2 == 0 && 'bg-gradient-to-l from-white to-blue-200'}  text-center`} key={index}
                                            
//                                               >
//                                               <td>{index+1}</td>
//                                               <td>{singleItem.name}</td>
//                                               <td>{singleItem.height}</td>
//                                               <td>{singleItem.length}</td>
//                                               <td>{singleItem.width}</td>
//                                               <td>{singleItem.price}</td>
//                                               <td>{singleItem.weight}</td>

                                    
//                                     </tr>
//                             })
                          
//                           }
                                         
//                                         </tbody>
//                                     </table>
//                                 </div>
//                         </div>
                       
//                        </ReactModal> 

//                 <div className='w-fulll h-64 bg-red-300'></div>     
//         </div>
       
//       )
//     }

//    </div>
//   )
// }

import React,{useState,useEffect,useRef} from "react";
import ReactApexChart from 'react-apexcharts';
import { SlCalender } from 'react-icons/sl';
import search from '../../Pages/Images/graphimage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons'
import img2 from '../../Pages/Images/graphimage.png';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {IoMdArrowDropdown} from 'react-icons/io'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import DonutChart from 'react-donut-chart';
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppContext } from "../../AppContext";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import ReactModal from 'react-modal';
import { RxCross2 } from 'react-icons/rx';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import FormData from "form-data";
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const OrderList = (props) =>{


  const {baseUrl,endPoints,cid,setcid,loding,setloding} = useContext(AppContext);
  const navigate = useNavigate();
  const [updateProfileDialogBox, setupdateProfileDialogBox] = useState(false);

  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [itemId, setitemId] = useState(0);

  const [getallorder, setgetallorder] = useState([]);
  const [handleCODIncomes, sethandleCODIncomes] = useState(null);
  const [topTenProduct, settopTenProduct] = useState(null);
  const [top5popularlocation, settop5popularlocation] = useState([]);
  
  function clickHandler(id){
    setitemId(id)
    setmodalIsOpen(true)
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleassingment(data){
    props.orderAssign(data)
    handleClose();

  }

  const [createUserDialogbox, setcreateUserDialogbox] = React.useState(false);
  const [allCreateUserValues, setAllCreateUserValues] = useState({
    payment_method:'',
    pickup_location_name: '',
    pickup_location_address: '',
    pickup_location_city: '',
    pickup_location_state: '',
    pickup_location_country: '',
    pickup_location_postal_code: '',
    pickup_location_latitude: 0.0,
    pickup_location_longitude: 0.0,
    pickup_location_contact_person: '',
    pickup_location_contact_contact_no: '',
    drop_location_name:'',
    drop_location_address:'',
    drop_location_city:'',
    drop_location_state:'',
    drop_location_country:'',
    drop_location_postal_code:'',
    drop_location_latitude:0.0,
    drop_location_longitude:0.0,
    drop_location_contact_person:'',
    drop_location_contact_no:'',
    total_order_value: 0.0,
   
    });

const changeHandler = e => {
  setAllCreateUserValues({...allCreateUserValues, [e.target.name]: e.target.value})
}


  const [allItemsCreateUserValues, setallItemsCreateUserValues] = useState({
    name:'',
    quantity:0,
    weight:0.0,
    length:0.0,
    width:0.0,
    height:0.0,
    price:0.0,
    });

const changeHandlerForItems = e => {
  setallItemsCreateUserValues({...allItemsCreateUserValues, [e.target.name]: e.target.name === "name" ? e.target.value: e.target.name === "quantity" ? parseInt(e.target.value): parseFloat(e.target.value) })
}


  const formRef = useRef(null);

  const handleClearForm = () => {
    formRef.current.reset();
  };


const [itemsArray, setitemsArray] = useState([]);

const getTableDataDetail = (value) => {
    let dataDetail = itemsArray;
    dataDetail = [...dataDetail, value]

    setitemsArray(dataDetail);
};


function addItemsFunctinHanlder(){
  
  getTableDataDetail(allItemsCreateUserValues);
  handleClearForm();
 
}


async function closeCreateUserDialogBox(){
  handleClearForm();
 
const newObject = {
  payment_method:allCreateUserValues.payment_method,
  pickup_location:{
    name:allCreateUserValues.pickup_location_name,
    address:allCreateUserValues.pickup_location_address,
    city:allCreateUserValues.pickup_location_city,
    state:allCreateUserValues.pickup_location_state,
    country:allCreateUserValues.pickup_location_country,
    postal_code:allCreateUserValues.pickup_location_postal_code,
    latitude:parseFloat(allCreateUserValues.pickup_location_latitude),
    longitude:parseFloat(allCreateUserValues.pickup_location_longitude),
    contact_person:allCreateUserValues.pickup_location_contact_person,
    contact_no:allCreateUserValues.pickup_location_contact_contact_no,
  },
  drop_location:{
    name:allCreateUserValues.drop_location_name,
    address:allCreateUserValues.drop_location_address,
    city:allCreateUserValues.drop_location_city,
    state:allCreateUserValues.drop_location_state,
    country:allCreateUserValues.drop_location_country,
    postal_code:allCreateUserValues.drop_location_postal_code,
    latitude:parseFloat(allCreateUserValues.drop_location_latitude),
    longitude:parseFloat(allCreateUserValues.drop_location_longitude),
    contact_person:allCreateUserValues.drop_location_contact_person,
    contact_no:allCreateUserValues.drop_location_contact_no,
  },
  total_order_value:parseFloat(allCreateUserValues.total_order_value),
  items:itemsArray,
}

console.log(newObject)
        try {
            const res = await axios.post(
              `${baseUrl}${endPoints.endcreateorder}`,
              newObject,
              {
                headers: {
                  // Authorization:localStorage.getItem("token"),
                  Authorization:'720010564bdccdc76f2ffb3dca9fe22ff2e870a6',
                  // "Content-Type": "multipart/form-data",
                  "Content-Type": "application/json"
                },
              }
            );
            // console.log(res)
            if(res.data?.data?.order_id){
              const id = res.data.data.order_id;
              // console.log(res.data.data.order_id)
              toast.success(`"Item Add Successfully Order Id:${id}`)
              // navigate('/orderlist')
            }else{
              toast.error("Filled all details !")
            }
           
            
          } catch (e) {
            toast.warn("Something went wrong !")
           console.log(e)
          }
          

          setupdateProfileDialogBox(false)
    }

  
  async function getAllOrders() {
    // console.log("Function Called !")
    setloding(true);

    try {
      const res = await axios.get(
        `${baseUrl}${endPoints.endorderlist}`,
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

    // console.log(getallorder,"anand")

    // getallorder
    // handle cod incomes
    useEffect(()=>{
      sethandleCODIncomes(
        getallorder.filter((singleItem)=>
        singleItem?.status.toLowerCase() === 'pending'
          &&
          singleItem?.payment?.payment_method.toLowerCase() === 'paid'
        )
        .map((singleItem)=>{
          return Number(singleItem?.payment?.amount)
        })
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0) % 100
      )
    },[getallorder])

    // console.log(handleCODIncomes)

    // handle top 10 products
    useEffect(()=>{
      settopTenProduct(
        getallorder.filter((singleItem)=>
        singleItem?.payment?.payment_method.toLowerCase() === 'paid'
        ||
        singleItem?.payment?.payment_method.toLowerCase() === 'cod'
        )
        .map((singleItem)=>{
          return Number(singleItem?.payment?.amount)
        }).sort((a, b) => b - a).slice(0, 10)
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0) % 100
      )
    },[getallorder])

    useEffect(()=>{
     
      settop5popularlocation(getallorder?.filter((singleItem)=>
      singleItem?.payment?.payment_method.toLowerCase() === 'paid'
      ||
      singleItem?.payment?.payment_method.toLowerCase() === 'cod'
      )
      .map((singleItem)=>{
        return {
          amnt:Number(singleItem?.payment?.amount),
          location:singleItem?.drop_location?.state
        }
      })
      .sort((a, b) => b?.amnt - a?.amnt)
      .slice(0,4).map((singleItem)=>{
        return{
          ...singleItem,
          amnt:singleItem?.amnt % 100
        }
      }))


    },[getallorder])




      const contriesData = {
        state : {
          
            series: [{
              data: 
              top5popularlocation?.length != 0 ? [
                top5popularlocation[0]?.amnt  || 20 , 
                top5popularlocation[1]?.amnt  || 20,
                top5popularlocation[2]?.amnt || 20,
                top5popularlocation[3]?.amnt || 10,
              ]:
              [
                21,34,45,100
                ]
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
                categories:
                top5popularlocation?.length != 0 ? [
                  top5popularlocation[0].location, 
                  top5popularlocation[1].location,
                  top5popularlocation[2].location,
                  top5popularlocation[3].location,
                ]:
                 [
                 
                  'Lucknow','Agra','Kolkata','Mharastra'
                ],
                  
                
              }
            }
          
      }
    }



    // console.log(handleCODIncomes)

    
    const prepaisCODOrders = 
        {
            state : {
          
                series: [handleCODIncomes || 10],
                options: {
                  chart: {
                    height: 350,
                    type: 'radialBar',
                  },
                  plotOptions: {
                    radialBar: {
                      hollow: {
                        size: '70',
                      }
                    },
                  },
                  labels: ['Total income'],
                }
              
        }
    }
    

    const toptenproducts = 
    {
        state : {
      
            series: [topTenProduct || 10],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '70',
                  }
                },
              },
              labels: ['Total income'],
            }
          
    }
}
   
    
    return(
        <div className="">


              <div className="">
                      
                      <div className="bg-[#F3E8FF] mt-8 p-5 rounded-t-xl flex justify-between">
                          <div className=""><p><b><span className="font-bold text-purple-800">Number of Orders:</span>{" "}<span>{getallorder.filter((singleItem)=>singleItem.status.toLowerCase() != 'pending').length}</span>  </b></p></div>
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
                                getallorder.length === 0 ? <div className="bg-[#F3E8FF] grid grid-cols-5 px-24 py-6">
                                      <div></div>
                                      <div></div>
                                      <div className=" justify-items-center col-span-2" ><img src={search} alt="" /></div>
                                      <div></div>
                                </div> :(
                                  <div className="ha-auto overflow-y-scroll max-h-72">
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
                                              {getallorder.filter((singleItem)=>singleItem?.status.toLowerCase() === 'pending').map((singleData, index) => {
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

                      {/* // starts charts */}
                  <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-56  pt-8 ">
                      <div className="bg-white p-6  rounded-xl">
                          <div className="flex justify-between"><p>Prepaid vs. COD Orders</p><span className="opacity-20">Last 30 Days</span></div>
                          <div className="flex justify-center mt-10">
                              <div className='opacity-50'>
                              <ReactApexChart 
                              options={prepaisCODOrders.state.options} 
                              series={prepaisCODOrders.state.series} 
                              type="radialBar" 
                              height={350} 

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
                              options={prepaisCODOrders.state.options} 
                              series={prepaisCODOrders.state.series} 
                              type="radialBar" 
                              height={350} 

                              />
                          </div>
                      </div>
                    
                      
                  </div>

                  <div className="bg-white p-6  rounded-xl">
                      <div className=" justify-between flex">
                          <p>Top 10 Products</p>
                            <span className="opacity-20">Last 30 Days</span>
                      </div>

                      <div className="flex justify-center mt-10">
                      <div className='opacity-50'>
                          <ReactApexChart 
                              options={toptenproducts.state.options} 
                              series={toptenproducts.state.series} 
                              type="radialBar" 
                              height={350} 

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

              <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={()=>handleassingment("manuallyassing")}>Manually Assign</MenuItem>
                  <MenuItem onClick={()=>handleassingment("autoassing")}>Auto Assign</MenuItem>
                  
                </Menu>


                {/* create order dialog box */}
                <div>
                    {/* // this is button to handle funnScreen dialog box */}

                <Dialog
                  fullScreen
                  open={createUserDialogbox}
                  onClose={handleClose}
                  TransitionComponent={Transition}
                >
                  <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                      <IconButton
                        edge="start"
                        color="inherit"
                        onClick={()=>setcreateUserDialogbox(false)}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                      <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        
                        Create Orders:
                      </Typography>
                      <Button autoFocus color="inherit" onClick={closeCreateUserDialogBox}>
                        save
                      </Button>
                    </Toolbar>
                  </AppBar>
                  <DialogContent>
                            <div className="flex w-full justify-center mt-10 flex-wrap">
                              <form action=""  ref={formRef}>
                                  <div className="">
                                  <Typography variant="h5" component="h2">
                                              Payment Method:
                                    </Typography>
                                    <div className="mt-5">
                                    <TextField
                                            required
                                            id="outlined-required"
                                            label="Payment Method"
                                            
                                            name="payment_method"
                                            onChange= {changeHandler}
                                          />
                                    </div>
                                  </div>
                                  <div className="mt-3">
                                    <Typography variant="h5" component="h2">
                                              Pickup Location:
                                    </Typography>
                                    <div className="flex gap-10 mt-5 flex-wrap">
                                    <TextField
                                            required
                                            id="outlined-required"
                                            label="Name"
                                            
                                            name="pickup_location_name"
                                            onChange= {changeHandler}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Address"
                                            
                                            name="pickup_location_address"
                                            onChange= {changeHandler}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="City"
                                            
                                            name="pickup_location_city"
                                            onChange= {changeHandler}
                                          />
                                    </div>
                                    <div className="flex gap-10 mt-5 flex-wrap">
                                    <TextField
                                            required
                                            id="outlined-required"
                                            label="State"
                                            name="pickup_location_state"
                                            onChange= {changeHandler}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Country"
                                            name="pickup_location_country"
                                            onChange= {changeHandler}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Postal Code"
                                            name="pickup_location_postal_code"
                                            onChange= {changeHandler}
                                          />
                                    </div>
                                    <div className="flex gap-10 mt-5 flex-wrap">
                                    <TextField
                                            required
                                            id="outlined-required"
                                            label="Lattitude"
                                            name="pickup_location_latitude"
                                            onChange= {changeHandler}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Longitude"
                                            name="pickup_location_longitude"
                                            onChange= {changeHandler}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Contact Person"
                                            name="pickup_location_contact_person"
                                            onChange= {changeHandler}
                                          />
                                    </div>
                                    <div className="flex gap-10 mt-5 flex-wrap">
                                    
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Contact No"
                                            name="pickup_location_contact_contact_no"
                                            onChange= {changeHandler}
                                          />
                                    </div>
                                  </div>
                                  <div className="mt-3 flex-wrap">
                                    <Typography variant="h5" component="h2">
                                              Drop Location:
                                    </Typography>
                                    <div className="flex gap-10 mt-5 flex-wrap">
                                    <TextField
                                            required
                                            id="outlined-required"
                                            label="Name"
                                            name="drop_location_name"
                                            onChange= {changeHandler}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Address"
                                            name="drop_location_address"
                                            onChange= {changeHandler}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="City"
                                            name="drop_location_city"
                                            onChange= {changeHandler}
                                          />
                                    </div>
                                    <div className="flex gap-10 mt-5 flex-wrap">
                                    <TextField
                                            required
                                            id="outlined-required"
                                            label="State"
                                            name="drop_location_state"
                                            onChange= {changeHandler}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Country"
                                            name="drop_location_country"
                                            onChange= {changeHandler}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Postal Code"
                                            name="drop_location_postal_code"
                                            onChange= {changeHandler}
                                          />
                                    </div>
                                    <div className="flex gap-10 mt-5 flex-wrap">
                                    <TextField
                                            required
                                            id="outlined-required"
                                            label="Lattitude"
                                            name="drop_location_latitude"
                                            onChange= {changeHandler}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Longitude"
                                            name="drop_location_longitude"
                                            onChange= {changeHandler}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Contact Person"
                                            name="drop_location_contact_person"
                                            onChange= {changeHandler}
                                          />
                                    </div>
                                    <div className="flex gap-10 mt-5 flex-wrap">
                                    
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Contact No"
                                            name="drop_location_contact_no"
                                            onChange= {changeHandler}
                                          />
                                    </div>
                                    <div className="flex mt-5 flex-wrap flex-col">
                                          <Typography variant="h5" component="h2">
                                                    Total Order Value:
                                          </Typography>
                                            <div className="w-full mt-5">
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Total order Value"
                                            name="total_order_value"
                                            onChange= {changeHandler}
                                          />
                                            </div>
                                    </div>
                                  </div>
                                  


                                  
                              </form>


                              <form action="" ref={formRef}>
                                      {/* // Add Items */}   
                                <div className="mt-5 ">
                                    <div className="flex gap-10 flex-wrap">
                                      <Typography variant="h5" component="h2">
                                                  Add Items:
                                        </Typography>
                                        <Button 
                                        variant="contained"
                                        onClick={addItemsFunctinHanlder}
                                        >
                                        Add Items
                                        </Button>
                                    </div>
                                    <div className="flex gap-10 mt-5 flex-wrap ">
                                    <TextField
                                            required
                                            id="outlined-required"
                                            label="Name"
                                            
                                            name="name"
                                            onChange= {changeHandlerForItems}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Quantity"
                                            
                                            name="quantity"
                                            onChange= {changeHandlerForItems}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Weight"
                                          
                                            name="weight"
                                            onChange= {changeHandlerForItems}
                                            />
                                            
                                    </div>
                                    <div className="flex gap-10 mt-5 flex-wrap ">
                                    <TextField
                                            required
                                            id="outlined-required"
                                            label="Length"
                                          
                                            name="length"
                                            onChange= {changeHandlerForItems}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Width"
                                            
                                            name="width"
                                            onChange= {changeHandlerForItems}
                                          />
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Height"
                                            name="height"
                                            onChange= {changeHandlerForItems}
                                          />
                                    </div>
                                    <div className="flex gap-10 mt-5 flex-wrap">
                                    <TextField
                                            required
                                            id="outlined-required"
                                            label="Price"
                                            
                                            name="price"
                                            onChange= {changeHandlerForItems}
                                          />
                                    </div>
                                  </div>
                              </form>
                            
                            </div>
                          </DialogContent>

                  
                </Dialog>
              </div>



              </div>
        </div>

        

        

    )
};
export default OrderList;

