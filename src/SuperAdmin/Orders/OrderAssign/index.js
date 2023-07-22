import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdKeyboardArrowDown } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import OrderSuccessFullyAssign from "../../../component/OrderSuccessFullyAssign";
import { RxCross2 } from "react-icons/rx";
import { FaCircleCheck } from "react-icons/fa6";
import ReactModal from "react-modal";
import { toast } from "react-toastify";
import { AppContext } from "../../../AppContext";
import axios from "axios";
import Loding from "../../../component/Loding";
//
export default function OrderAssign() {
  // const [opensuccessfullreactmodel, setopensuccessfullreactmodel] = useState(false);
  const [deliveryboy, setdeliveryboy] = useState(null);
  const { baseUrl, endPoints, loding, setloding, cid, setcid } =
    useContext(AppContext);
  // console.log(deliveryboy)
  const [getallorder, setgetallorder] = useState([]);

  const [opensuccessfullyAssignmodel, setopensuccessfullyAssignmodel] =
    useState(false);
    const [alldeliveryboylist, setalldeliveryboylist] = useState([]);
  const [getorderrequestid, setgetorderrequestid] = useState({});



  async function openpopupboxfunction() {
    if (deliveryboy != null && deliveryboy != "Select Delivery Boy") {
      console.log(deliveryboy);
      console.log(getorderrequestid.request_order_id);
      // apicall
      setloding(true);

      console.log("data:----")
      console.log(getorderrequestid.request_order_id)
      console.log(deliveryboy)

      const formData = new FormData();

      formData.append("order_id", getorderrequestid.request_order_id);
      formData.append("user_id", deliveryboy);

      try {
        const res = await axios.post(
          `${baseUrl}${endPoints.endassignorderbyadmin}`,
          formData,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (res.data.success === "Delivery boy assigned successfully") {
          // console.log(res.data.msg);
          toast.success(res.data.success);
          setloding(false);
          setopensuccessfullyAssignmodel(true);
          // setalldeliveryboylist(res.data.Persons);
          return;
        }

        // console.log(res)
      } catch (e) {
        if(e?.response?.data?.error === "Delivery boy not found"){
          toast.warn("Delivery Boy not found.")
        }else{
          toast.warn("Something went wrong !");
        }
        
        console.log(e);
      }
      setloding(false);
    } else {
      toast.warn("First select the delivery Boy.");
    }
  }

  //all delivery boy list
  
  async function getStateOrders() {
    setloding(true);

    try {
      const res = await axios.get(
        `${baseUrl}${endPoints.getalldeliveryboybyadmin}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
    
      setalldeliveryboylist(res.data.Persons);
   
    } catch (e) {
      toast.error("Something went wrong !");
      console.log(e);
    }
    setloding(false);
  }

  useEffect(() => {
    getStateOrders();
  }, []);

  // get all order list



  
  async function getAllOrders() {
    // console.log("function C22alled22");
    setloding(true);

    try {
      const res = await axios.get(`${baseUrl}${endPoints.endgetallorderlist}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      // if (res.statusText === "OK") {
        // console.log(res.data.msg);
        // toast.success(res.data.msg);
        setgetallorder(res.data);
      // }

      console.log(res);
    } catch (e) {
      toast.warn("Something went wrong !");
      // console.log(e);
    }

    setloding(false);
  }
  // console.log(getallorder,"mkx");

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
      // if (res.statusText === "OK") {
      //   // console.log(res.data.msg);
      //   // toast.success(res.data.msg);
        
      // }
      setgetallorder(res.data);
      // console.log(res)
    } catch (e) {
      toast.warn("Something went wrong !");
      console.log(e);
    }
    setloding(false);
  }

  useEffect(() => {
    if (cid != null && cid != "selectcompany") {
      getAllOrdersCmpanywise();
    } else {
      getAllOrders();
    
    }
    // getAllOrders();
  }, []);

  // console.log(getallorder);
  return (
    <div className="flex justify-center">
      <div className="py-2 w-full bg-white rounded-xl">
        <table class="table-auto w-full  mt-10 bg-white p-2">
          <thead className="py-3">
            <tr className="text-center mt-3 border-b-2 text-[#8F38F1]">
              <th>Sr.No.</th>
              <th>Date & Time</th>
              <th>Order Id</th>
              <th>Choose Delivery Boy</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="mt-2">
            {getallorder
              .filter(
                (singlevalue) => singlevalue.status.toLowerCase() === "pending"
              )
              .map((singleData, index) => {
                return (
                  <tr
                    onClick={() => setgetorderrequestid(singleData)}
                    key={index}
                    className={`cursor-pointer text-center border-b-2 text-[#8F38F1] opacity-80 text-xs`}
                  >
                    <td className=" p-2">{index + 1}</td>
                    <td>{new Date(singleData?.created_at).toLocaleString()}</td>
                    <td>{singleData?.request_order_id}</td>
                    <td className=" gap-2 items-center p-1">
                      <select
                        name="selectdeliverybot"
                        id="selectdeliverybot"
                        className="outline-none capitalize  cursor-pointer"
                        onChange={(e) => setdeliveryboy(e.target.value)}
                      >
                        <option value="selectdeliveryboy">
                          Select Delivery Boy
                        </option>
                        {alldeliveryboylist.map((singleData) => {
                          return (
                            <option key={singleData.id} value={singleData.id}>
                            {singleData.id}
                              {/* {singleData.first_name +
                                " " +
                                singleData.last_name} */}
                            </option>
                          );
                        })}
                      </select>
                    </td>
                    <td className="capitalize">{singleData?.status}</td>
                    <td>
                      <button
                        onClick={openpopupboxfunction}
                        type="text"
                        className="border-2 p-2 bg-[#9333EA]  text-white  border-white rounded-l-full rounded-r-full"
                      >
                        <FontAwesomeIcon />
                        Order Assign
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="w-screen h-screen flex justify-center items-center">
          {loding ? (
            <Loding />
          ) : (
            <ReactModal
              isOpen={opensuccessfullyAssignmodel}
              contentLabel="Example Modal"
              className="outline-none rounded-2xl p-5 shadowpupup bg-white absolute top-1/2 left-1/2"
            >
              <div className="h-auto w-full flex justify-end">
                <div
                  className="text-white p-2 bg-[#B26DF0] rounded-full cursor-pointer
                                    "
                  onClick={() => setopensuccessfullyAssignmodel(false)}
                >
                  <RxCross2 />
                </div>
              </div>
              <div className="flex gap-5 mt-3 flex-col items-center">
                <div className="text-5xl text-[#B26DF0]">
                  <FaCircleCheck />
                </div>
                <div className="p-8 bg-[#B26DF0] text-white rounded-2xl">
                  Order Assing Successfully
                </div>
              </div>
            </ReactModal>
          )}
        </div>
      </div>
    </div>
  );
}
