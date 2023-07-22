import React, { useState,useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { Collapse, List, ListItemButton } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useQuery } from "react-query";
// import { cityBasedWarehouseFn } from "../../Services/cityBasedWarehouse";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { flatten } from "lodash";
import { AppContext } from "../../../AppContext";
import axios from "axios";
import { useContext } from "react";
import {toast} from 'react-toastify'
import bikemappointer from '../../../Pages/Images/bikemappointer.png'
import cartmappointer from '../../../Pages/Images/cartmappointer.png'
import Loding from '../../../component/Loding'
import { RxCross2 } from "react-icons/rx";
import { FaCircleCheck } from "react-icons/fa6";
import ReactModal from 'react-modal';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


// export default function AutoOrderAssign() {
//   return (
//     <div>AutoOrderAssign</div>
//   )
// }
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




const AutoOrderAssign = () => {
  const [center, setCenter] = useState({ lat: 26.8467, lng: 80.9462 });
  const apiKey = "AIzaSyAO3TRgzZx5X3i6tTcuNMjCvvCxhWe4M3g";
  const libraries = ["places"];
  const {baseUrl,endPoints,loding,setloding,cid,setcid} = useContext(AppContext);
  const [getallorder, setgetallorder] = useState([]);
  const [orderid, setorderid] = useState(null);
  const [allcities, setallcities] = useState([]);
  const [orderassigndialog, setorderassigndialog] = React.useState(false);
  const [showstatusdialogbox, setshowstatusdialogbox] = React.useState(false);
  const [orderassigntothepersondata, setorderassigntothepersondata] = useState(null);

  function clickHandler(data){
    console.log(data)
  }

  async function getallCities() {
    setloding(true);

    try {
      const res = await axios.get(
        `${baseUrl}/api/users/get_all_addresses/`,
        {
          headers: {
            Authorization: '720010564bdccdc76f2ffb3dca9fe22ff2e870a6',
          },
        }
      );
      
      setallcities(res.data)
      // console.log(res.data)
    } catch (e) {
      toast.error("Something went wrong !")
      console.log(e);
    }
    setloding(false);
    
  }


  useEffect(() => {
    getallCities();
  }, []);




const mapContainerStyle = {
width: "100%",
height: "100%",
};



  
async function getAllOrders() {
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
 
    setgetallorder(res.data);
    // console.log(res)
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
    // console.log(res)
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


// console.log(getallorder)

// console.log(orderid);
async function orderAssignAutometic() {
  setloding(true);


  try {
    if(orderid === "selectorderid" || orderid === null){
      toast.warn("First select the Order Id")
      
    }else{
      const formData = new FormData();
      formData.append("order_id",orderid)
      const res = await axios.post(
        `${baseUrl}${endPoints.endautoassignorderbyadmin}`,
        formData,
        {
          headers: {
            // Authorization: localStorage.getItem("token"),
          },
        }
      );

      if(res.data.message === "No closest delivery boy found"){
        toast.warn("No closest delivery boys ")
        setloding(false)
      }else{
        setorderassigntothepersondata(res?.data?.closest_delivery_boy)
        setorderassigndialog(true)
        setloding(false)
        toast.success("Order has been assigned")
        
      }
       console.log(res)

    }
  } catch (e) {
    toast.warn("Something went wrong !")
    // console.log(e);
  }
  setloding(false);
}

console.log(orderassigntothepersondata)

  // useEffect(()=>{
  //   orderAssignAutometic();
  // },[orderid])


return (
  <>
<div className="flex flex-col pt-4 w-full">

   <div className="flex flex-col items-center py-2 w-full">
    
      <div className=" w-full gap-2 bg-gray-100 lg:p-5 p-2 lg:px-[8%]">
        <div className="flex justify-between mb-4 items-center flex-wrap">
          <div className="flex gap-10 mb-5 flex-wrap">
              <p className="font-semibold">Select Order Id:</p>
              <select name="order" id="order" className="outline-none"
              onChange={(e)=>setorderid(e.target.value)}
              >
                <option value="selectorderid" className="font-semibold">Select Order Id</option>
                {
                  getallorder.filter((singleItem)=>singleItem?.status.toLowerCase() === 'pending').map((singleData,index)=>{
                    return <option value = {singleData.status.toLowerCase() === 'pending' && singleData.request_order_id }>{singleData.status.toLowerCase() === 'pending' && singleData.request_order_id}</option>
                  })
                }
              </select>
              <Button variant="outlined"
              onClick={orderAssignAutometic}
              >Assign</Button>
          </div>
          <Button variant="outlined"
          onClick={()=>setshowstatusdialogbox(true)}
          >Show Status</Button>  
        </div>

        <div className=" w-full h-[28rem] bg-blue-100">
          <LoadScript libraries={libraries} googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={{
                lat: center.lat,
                lng: center.lng,
              }}
              zoom={10}
            >
            {/* // bike map pointer */}
              {allcities?.map((store, index) => {
                return (
                  <Marker
                    key={index}
                    position={{
                      lat: 21.342,
                      lng: 234.234,
                    }}
                    label={store.address}
                    icon ={bikemappointer}
                  />
                );
              })}

              {/* // cart map pointer */}
              {allcities?.map((store, index) => {
                return (
                  <Marker
                    key={index}
                    position={{
                      lat: 23.232,
                      lng: 23.234,
                    }}
                    label={store.address}
                    icon = {cartmappointer}
                  />
                );
              })}

              {/* // map pointer */}
              {allcities?.map((store, index) => {
                return (
                  <Marker
                  onClick={()=>clickHandler("called")}
                    key={index}
                    position={{
                      lat: Number(store.latitude),
                      lng: Number(store.longitude),
                    }}
                    label={store.address}
                  />
                );
              })}

            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  </div>

  {
          loding ? <Loding/>: <ReactModal 
                    isOpen={orderassigndialog}
                    contentLabel="Example Modal"
                    className="outline-none rounded-2xl p-5 shadowpupup bg-white absolute top-1/2 left-1/2"
                    >
                    <div className="h-auto w-full flex justify-end">
                        <div
                        className="text-white p-2 bg-[#B26DF0] rounded-full cursor-pointer
                                    "
                        onClick={() => setorderassigndialog(false)}
                        >
                        <RxCross2 />
                        </div>
                    </div>
                    <div className="flex gap-5 mt-3 flex-col items-center">
                      <div className="text-5xl text-[#B26DF0]">
                        <FaCircleCheck/>
                      </div>
                      <div
                      className="p-8 bg-[#B26DF0] text-white rounded-2xl"
                      >Order Assing Successfully</div>
                    </div>
            </ReactModal>
        }

        <Dialog
        open={showstatusdialogbox}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>setshowstatusdialogbox(false)}
        aria-describedby="alert-dialog-slide-description"
        className="!overflow-scroll"
        sx={{
       
        }}
        
        
        
      >
        <DialogTitle>{"Status:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           {
            orderassigntothepersondata === null ? (
              'NO Data Found' 

            ):
            (
                <table className=" p-2 ">
              <tbody className="">
                <tr className="">
                  <td className="font-bold capitalize"><span>Name:</span></td>
                  <td><span className="capitalize">{orderassigntothepersondata?.name === null ? ' ':orderassigntothepersondata?.name}</span></td>
                  <td className="px-5"></td>
                  <td className="font-semibold "><span>Email:</span></td>
                  <td><span>{orderassigntothepersondata?.email=== null ? ' ':orderassigntothepersondata?.email}</span></td>
                </tr>
                <tr className="capitalize">
                  <td className="font-semibold"><span>Address:</span></td>
                  <td><span>{orderassigntothepersondata?.address=== null ? ' ' :orderassigntothepersondata?.address}</span></td>
                  <td className="px-5"></td>
                  <td className="font-semibold"><span>City:</span></td>
                  <td><span>{orderassigntothepersondata?.city=== null ? ' ':orderassigntothepersondata?.city}</span></td>
                </tr>
                <tr className="capitalize">
                  <td className="font-semibold"><span>State:</span></td>
                  <td><span>{orderassigntothepersondata?.state=== null ? ' ':orderassigntothepersondata?.state}</span></td>
                  <td className="px-5"></td>
                  <td className="font-semibold"><span>Country:</span></td>
                  <td><span>{orderassigntothepersondata?.country=== null ? ' ':orderassigntothepersondata?.country}</span></td>
                </tr>
                <tr className="capitalize">
                  <td className="font-semibold"><span>Postal Code:</span></td>
                  <td><span>{orderassigntothepersondata?.postal_code=== null ? ' ':orderassigntothepersondata?.postal_code}</span></td>
                  <td className="px-5"></td>
                  <td className="font-semibold"><span>Minimum Distence:</span></td>
                  <td><span>{orderassigntothepersondata?.minimum_distance=== null ? ' ':orderassigntothepersondata?.minimum_distance}</span></td>
                </tr>
              </tbody>
                </table>
            )
           }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={()=>setshowstatusdialogbox(false)}>Disagree</Button> */}
          <Button onClick={()=>setshowstatusdialogbox(false)}>OK</Button>
        </DialogActions>
      </Dialog>
</> 
  
)
}

export default AutoOrderAssign


