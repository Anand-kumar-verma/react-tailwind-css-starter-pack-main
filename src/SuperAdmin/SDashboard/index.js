import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../AppContext";
import Overviews from "../../Pages/Overviews";
import WhatsappComm from "../../Pages/WhatsappComm";
import RTO from "../../Pages/RTO";
import Courier from "../../Pages/Courier";
import classNames from "classnames";
import NDR from "../../Pages/NDR";
import Order from '../../Pages/Order'
import Shipment from "../../Pages/Shipment";
import axios from "axios";
import { toast } from "react-toastify";

export default function SDashboard() {

  const [handleHeader, sethandleHeader] = useState(0);
  const {baseUrl,endPoints,loding ,setloding,cid,setcid} = useContext(AppContext);
  const headerData = ['Overview', 'Orders','Shipments','NDR','WhatsApp Comm','RTO','Courier','Delays','Tracing Page']

  
  const [companyList, setcompanyList] = useState([]);
   const [selectcompany, setselectcompany] = useState('');
   setcid(selectcompany)

  
 

  async function getCompanyList() {
    setloding(true);

    try {
      const res = await axios.get(
        `${baseUrl}${endPoints.endcompanylist}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (res.data.msg === "Data Rereive Sucessfully") {
        // console.log(res.data.msg);
        toast.success(res.data.msg);
      }

      setcompanyList(res.data.Data);
      // console.log(res.data.Data)
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  }


  useEffect(() => {

    if(localStorage.getItem('role') === "superadmin") {
      getCompanyList();
    }else{
      console.log("u r not superadmin")
    }
    
  }, []);

  // console.log(companyList)

  return (
    <div>
      <div className="mt-10 flex items-center justify-between bg-[#F3E8FF] py-2 flex-wrap">
        <div className="flex gap-8 text-[#2563EB] px-8 flex-wrap">
          {headerData.map((singleData, index) => {
            return (
              <div
                key={index}
                className={classNames(
                  "cursor-pointer",
                  index === handleHeader && "border-b-2 border-[#2563EB]"
                )}
                onClick={() => sethandleHeader(index)}
              >
                <div key={index}>{singleData}</div>
              </div>
            );
          })}
        </div>
        <div className="">
          <select
            onChange={(e)=>setselectcompany(e.target.value)}
            className="p-2 rounded-l-full outline-none rounded-r-full px-3 mr-8"
            name="select"
            id="select"
            
          >
          <option value="selectcompany">Select Company</option>
          {
            companyList.map((singleData)=>{
              return <option key={singleData.id} value={singleData?.id}>{singleData?.name}</option>
            })
          }
            
          </select>
        </div>
      </div>
      <div className="w-[80%] h-full ml-10 mt-4 fixed overflow-scroll">
        {handleHeader == 0 && <Overviews/>}
        {handleHeader == 1 && <Order/>}
        {handleHeader == 2 && <Shipment/>}
        {handleHeader == 3 && <NDR />}
        {handleHeader == 4 && <WhatsappComm />}
        {handleHeader == 5 && <RTO />}
        {handleHeader == 6 && <Courier />}
      </div>
    </div>
  );
}
