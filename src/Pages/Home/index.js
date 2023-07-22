import React, {useState,useRef  } from "react";
import ReactModal from "react-modal";
import logo from "../Images/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineLogout } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { SlHandbag } from "react-icons/sl";
import { BsPeople } from "react-icons/bs";
import { BiMessageRoundedDots } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsFolder2 } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { CgMoreR } from "react-icons/cg";
import OrderList from "../OrderList";
import Dashboard from "../Dashboard";
import { useNavigate } from "react-router-dom";
import logindashboardImage1 from "../Images/logindashboardimage1.png";
import logindashboardImage2 from "../Images/logindashboardimage2.png";
import notificatonimg1 from "../Images/notificatioImg1.png";
import notificatonimg2 from "../Images/notificationmsh2.png";
import notificatonimg4 from "../Images/notificationimg4.png";
import quickAccessImg from "../Images/QuickAccessImg.png";
import { toast } from "react-toastify";
import CashcollectionList from "../CashcollectionList";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import profile from "../Images/userprofile.jpg";
import { ImageListItem, ImageList } from "@mui/material";
import { CenterFocusStrong } from "@mui/icons-material";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import axios from "axios";
import Loding from "../../component/Loding";
import { useForm } from "react-hook-form";
import FormData from "form-data";
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ManageCashCollection from "../ManageCashCollection";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {

  const navigate = useNavigate();
  const { baseUrl, endPoints, loding, setloding } = useContext(AppContext);



  // clear all input fields
  const [clearEmail, setclearEmail] = useState(null);
  const [clearFirstName, setclearFirstName] = useState("");
  const [clearLastName, setclearLastName] = useState("");
  const [clearContact, setclearContact] = useState("");
  const [clearPassword, setclearPassword] = useState("");

  const [pages, setpages] = useState("home");
  const [isOpenlogin, setIsOpenlogin] = useState(false);
  const [isOpenmultipleItem, setIsOpenmultipleItem] = useState(false);
  const [notification, setnotification] = useState(false);
  const [rechargeWallet, setrechargeWallet] = useState(false);
  const [quickAccess, setquickAccess] = useState(false);
  const [walletInputValue, setwalletInputValue] = useState("");
  const [mouseEvent, setmouseEvent] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [userProfile, setuserProfile] = useState({});

  const { register, handleSubmit } = useForm();
  const [updateProfileDialogBox, setupdateProfileDialogBox] = useState(false);
  // const [setupandmanagementselection, setsetupandmanagementselection] = useState(false);

  // handle create order button

  const [anchorEl, setAnchorEl] = React.useState(null);
  const setupandmanagementselection = Boolean(anchorEl);

  const updateSetupAndManagement = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlSetupAndManagementMenu = (data) => {
    if(data === "cashcollectionslist"){
      handleClick("cashcollectionslist")
    }else if(data === "ManageCashCollection"){
      handleClick("ManageCashCollection")
    }else if(data === ""){

    }
    setAnchorEl(null);
  };

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
                          Authorization:localStorage.getItem("token"),
                          // "Content-Type": "multipart/form-data",
                          "Content-Type": "application/json"
                        },
                      }
                    );
                    console.log(res)
                    if(res.data?.data?.order_id){
                      const id = res.data.data.order_id;
                      // console.log(res.data.data.order_id)
                      toast.success(`"Item Add Successfully Order Id:${id}`)
                      navigate('/orderlist')
                    }else{
                      toast.error("Filled all details !")
                    }
                   
                    
                  } catch (e) {
                    toast.warn("Something went wrong !")
                  //  console.log(e)
                  }

                  setupdateProfileDialogBox(false)
            }
   

            
  const handleClose = () => {
    setOpen(false);
    setupdateProfileDialogBox(true);
  };

  async function profileSaveHandler(data) {
    console.log("function called");

    console.log(data);

    setupdateProfileDialogBox(false);

    setloding(true);

    let formData = new FormData();
    formData.append("email", data.email);
    formData.append("name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("contact", data.contact);
    formData.append("password", data.password);

    try {
      const userId = localStorage.getItem("user_id");

      console.log(userId);
      console.log(localStorage.getItem("token"));

      const response = await axios.put(
        `${baseUrl}${endPoints.endupdateuserprofile}${userId}`,
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      if (
        response.data.message === "ApiUser and addresses updated successfully"
      ) {
        toast.success("Profile Updated Successfully");
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      console.log(e);
      alert("Something went wrong");
    }
    setloding(false);
  }

  async function uerProfleFun() {
    setloding(true);
    setOpen(true);

    try {
      const userId = localStorage.getItem("user_id");
      const response = await axios.get(
        `${baseUrl}${endPoints.endgetuserprofile}${userId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      setuserProfile(response.data);
    } catch (e) {
      alert("Something went wrong");
    }
    setloding(false);
  }

  function clickHandler(index, data) {
    if (data === "Logout") {
      toast.success("Logout Successfully");
    }
    setIsOpenlogin(false);
    if (index == 6) {
      localStorage.removeItem("token");
      navigate("/");
    }
  }

  function handleClick(value) {
    setpages(value);
  }

  return (
    <div className="relative h-full w-full bg-green-300 overflow-y-hidden">
      <div id="dv" className="w-full  fixed   h-full flex bg-[#F5F5F5]">
        {/* faes */}
        <div
          id="side"
          className="px-0 lg:px-3 z-10 py-10 mt-0  mb-0 rounded-lg  text-[1rem] font-semibold flex flex-col  my-5 bg-[#FFFFFF] shadowclass"
        >
          <div className="flex gap-3 items-center">
            <img src={logo} className="h-10 w-10" />
            <div className="text-2xl">LOGO</div>
          </div>
          <div
            onClick={() => handleClick("home")}
            className={`${
              pages == "home" ? "bg-[#6351FE]" : ""
            }  flex p-2 gap-2 items-center text-blue pt-4 rounded-lg cursor-pointer text-[#53545C]`}
          >
            <div>
              <AiOutlineHome />
            </div>
            {/* <div className="outline-none rounded-md px-1">Home</div> */}
            <p>Home</p>
          </div>

          <div
            className={`${pages == "dashboard" ? "bg-[#6351FE]" : ""}
           flex items-center gap-2 text-[#53545C] text-[.95rem] p-2  rounded-lg cursor-pointer
            `}
            onClick={() => handleClick("dashboard")}
          >
            <div>
              <RxDashboard />
            </div>
            <p>Dashboard</p>
          </div>
          <div
            onClick={() => handleClick("orders")}
            className={`${pages == "order" ? "bg-[#6351FE]" : ""}
          flex items-center gap-2 text-[#53545C] p-2 text-[.95rem] rounded-lg cursor-pointer
          `}
          >
            <div>
              <SlHandbag />
            </div>
            <p>Orders</p>
          </div>
          <div
            // onClick={() => handleClick("return")}
            className="flex items-center gap-2 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          >
            <div>
              <BsPeople />
            </div>
            <p>Return</p>
          </div>
          <div
            onClick={() => handleClick(1)}
            className="flex items-center gap-2 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          >
            <div className="text-[1rem]">
              <BiMessageRoundedDots />
            </div>

            <p
            onClick={()=>setcreateUserDialogbox(true)}
            >Delivery Boost</p>
          </div>
          <div
            onClick={() => handleClick(2)}
            className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          >
            <div>
              <AiOutlineSetting />
            </div>
            <select name="weight" id="">
              <option value="weightmanagement">Weight Management</option>
            </select>
          </div>
          <div
            onClick={() => handleClick(3)}
            onMouseEnter={updateSetupAndManagement}
            
            // onMouseLeave={()=>setAnchorEl(null)}
            className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          >
            <div>
              <AiOutlineSetting />
            </div>

                <div
                
                >Setup & Management {"^"}</div>
            
              
      
            </div>

          <div
            onClick={() => handleClick(4)}
            className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          >
            <div>
              <AiOutlineSetting />
            </div>
            <select name="byer" id="">
              <option value="buyer">Buyer Experience</option>
            </select>
          </div>

          <div className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer">
            <div>
              <AiOutlineSetting />
            </div>
            <p>Billing</p>
          </div>
          <div className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer">
            <div>
              <AiOutlineSetting />
            </div>
            <select name="tool" id="">
              <option value="tool">Tools</option>
            </select>
          </div>
          <div
            onMouseEnter={() => setmouseEvent(true)}
            onMouseLeave={() => setmouseEvent(false)}
            className="flex relative gap-2 text-[#53545C] items-center p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          >
            <div>
              <AiOutlineSetting />
            </div>
            <p>Setting</p>
            {mouseEvent && (
              <div className="text-white bg-slate-400 p-2 absolute bottom-0">
                <div onClick={uerProfleFun}>User Profile</div>
                <div onClick={() => setupdateProfileDialogBox(true)}>
                  Update Profile
                </div>
              </div>
            )}
          </div>

          <div className="h-[6.5rem]  w-full bg-gradient-to-tl from-blue-500 to to-white rounded-lg relative flex items-center justify-center mt-24">
            <div className="h-10 w-10 bg-blue-800 rounded-full border-2 border-white absolute -top-2 left-[42%] flex justify-center items-center">
              <div className="w-5 h-5 bg-white rounded-full flex justify-center items-center ">
                <div className="text-blue-800 text-[1rem]">?</div>
              </div>
            </div>
            <div className="h-auto bg-white  rounded-l-full rounded-r-full flex justify-center items-end absolute bottom-2 py-1 px-3">
              <div>Help & Support</div>
            </div>
          </div>
        </div>
        {/* sjsdf */}
        <div className="w-full overflow-auto example">
          <div
            className=" mt-10 px-8
                 flex justify-between items-center flex-wrap w-auto h-auto py-1"
          >
            <div className="flex gap-5 flex-wrap items-center text-[.9rem] bg-white rounded-l-full rounded-r-full px-3">
              <div
                className="flex gap-1 items-center cursor-pointer"
                onClick={() => setquickAccess(true)}
              >
                <div className="text-lg text-blue-900">
                  <img
                    className="bg-blue-700 h-6 w-6 rounded-full  p-1"
                    src={quickAccessImg}
                    alt=""
                  />
                  {/* <AiFillSlackCircle/> */}
                </div>
                <p>Quick Action</p>
              </div>
              <div className="h-auto  bg-blue-900 w-[1px]"></div>
              <div>
                <div
                  className="flex text-lg text-green-900 items-center cursor-pointer
                  "
                  onClick={() => setrechargeWallet(true)}
                >
                  <div className="text-green-700">
                    <BsFolder2 />
                  </div>
                  <div className="text-[1.5rem]">
                    <RiArrowDropDownLine />
                  </div>
                </div>
              </div>
              <div
                className=" py-2 cursor-pointer bg-[#22C55E] rounded-l-full rounded-r-full px-3 text-white
                  "
                onClick={() => setrechargeWallet(true)}
              >
                Recharger Wallet
              </div>
            </div>

            {/* ///right section */}
            <div className="w-auto h-auto p-1 bg-gradient-to-r from-[#BFEBFF] to-[#F3E8FF] flex items-center flex-wrap gap-5 rounded-l-full rounded-r-full px-3 py-1 mr-6">
              <div>
                <input
                  className="rounded-l-full rounded-r-full outline-none w-32 bg-white px-2"
                  type="search"
                  placeholder="Search"
                />
              </div>
              <div
                className="p-1 cursor-pointer text-white rounded-l-full flex rounded-r-full bg-gradient-to-br from-[#FF409A] to-[#C438EF]"
                onClick={() => setnotification(true)}
              >
                <div>
                  <BiBell />
                </div>
                <div className="text-xs">15</div>
              </div>

              <div
                className="text-gray-500 cursor-pointer"
                onClick={() => setIsOpenmultipleItem(true)}
              >
                <CgMoreR />
              </div>

              <div
                className="h-10 w-10 bg-slate-400 cursor-pointer flex items-center justify-center rounded-full bg-gradient-to-br from-[#9890BE] to-[#ABAFEF] text-blue-900"
                onClick={() => setIsOpenlogin(true)}
              >
                <BsPeople />
              </div>
            </div>
          </div>
          {/* login react model */}
          <div className="flex justify-center items-center">
            <ReactModal
              isOpen={isOpenlogin}
              contentLabel="Example Modal"
              className="outline-none rounded-2xl mt-20 mr-5 shadowpupup bg-gradient-to-r from-[#5ac2f2] to-[#e6d1fb] absolute px-10 py-10 right-0 top-0"
            >
              <div className="h-auto w-full flex justify-end mb-5 ">
                <div
                  className="text-white p-2 bg-blue-600 rounded-full cursor-pointer
                        "
                  onClick={() => setIsOpenlogin(false)}
                >
                  <RxCross2 />
                </div>
              </div>
              <div className=" flex flex-col gap-5">
                {[
                  "Aashish",
                  "Current Plan",
                  "Refer & Earn",
                  "Rate Us",
                  "Term & Conditions",
                  "Change Passsword",
                  "Logout",
                ].map((singleData, index) => {
                  return (
                    <div
                      key={index}
                      className=" bg-[#F4F7FE] cursor-pointer text-[#2563EB] font-semibold flex items-center w-[20rem] py-3 rounded-l-full rounded-r-full"
                      onClick={() => clickHandler(index, singleData)}
                    >
                      <div className="ml-5 mr-2">
                        <AiOutlineLogout />
                      </div>
                      <div className="">{singleData}</div>
                    </div>
                  );
                })}
              </div>
            </ReactModal>
          </div>

          {/* // multiple items model */}
          <div className="flex justify-center items-center">
            <ReactModal
              isOpen={isOpenmultipleItem}
              contentLabel="Example Modal"
              className="outline-none rounded-2xl mt-20 mr-20 shadowpupup bg-gradient-to-r from-[#5ac2f2] to-[#e6d1fb] absolute px-10 py-10 right-0 top-0"
            >
              <div className="h-auto w-full flex justify-end mb-5 ">
                <div
                  className="text-white p-2 bg-blue-600 rounded-full cursor-pointer
                        "
                  onClick={() => setIsOpenmultipleItem(false)}
                >
                  <RxCross2 />
                </div>
              </div>
              <div className=" flex flex-col gap-8">
                <img className="h-28 w-64" src={logindashboardImage1} alt="" />
                <img className="h-28 w-64" src={logindashboardImage2} alt="" />
              </div>
            </ReactModal>
          </div>

          {/* // notification model */}
          <div className="flex justify-center items-center">
            <ReactModal
              isOpen={notification}
              contentLabel="Example Modal"
              className="outline-none overflow-scroll rounded-2xl mt-20 mr-36 shadowpupup bg-gradient-to-r from-[#5ac2f2] to-[#e6d1fb] absolute px-10 py-10 right-0 top-0"
            >
              <div className="h-auto w-full flex justify-end mb-5 ">
                <div
                  className="text-white p-2 bg-blue-600 rounded-full cursor-pointer
                            "
                  onClick={() => setnotification(false)}
                >
                  <RxCross2 />
                </div>
              </div>
              <div className=" flex flex-col gap-3 h-96 overflow-auto">
                <img className="h-28 w-64" src={notificatonimg1} alt="" />
                <img className="h-28 w-64" src={notificatonimg2} alt="" />
                <img className="h-28 w-64" src={notificatonimg4} alt="" />
                <img className="h-28 w-64" src={notificatonimg4} alt="" />
                <img className="h-28 w-64" src={notificatonimg1} alt="" />
                <img className="h-28 w-64" src={notificatonimg2} alt="" />
                <img className="h-28 w-64" src={notificatonimg4} alt="" />
                <img className="h-28 w-64" src={notificatonimg4} alt="" />
              </div>
            </ReactModal>
          </div>
          {/* // recharger wallet */}
          <div className="flex justify-center items-center">
            <ReactModal
              isOpen={rechargeWallet}
              contentLabel="Example Modal"
              className="outline-none rounded-2xl shadowpupup bg-gradient-to-r from-[#5ac2f2] to-[#e6d1fb] absolute px-5 py-5 left-40 top-10"
            >
              <div className="h-auto w-full flex flex-col">
                <div className="flex items-center w-full justify-between ">
                  <div>
                    <p className="font-bold">Recharge Your Wallet</p>
                    <p className="text-sm">Current Wallet Amount Rs. 0.00</p>
                  </div>
                  <div
                    className="text-white p-2 bg-blue-600 rounded-full cursor-pointer
                                "
                    onClick={() => setrechargeWallet(false)}
                  >
                    <RxCross2 />
                  </div>
                </div>
                {/* \// input handling */}
                <div className="mt-4 bg-white rounded-lg p-3 shadow-lg">
                  <p className="text-[.97rem]">
                    Enter Amount in Multiples of 100 Below
                  </p>
                  <div className="mt-2 bg-[#4318FF] text-white gap-2 rounded-lg">
                    <div className="flex items-center p-2 ">
                      <p className="font-bold">Rs.</p>
                      <input
                        className="ml-1 font-bold w-full bg-[#4318FF] outline-none text-white"
                        id="walletinput"
                        type="text"
                        value={walletInputValue}
                        placeholder="500"
                        onChange={(e) => setwalletInputValue(e.target.value)}
                      />
                      <div
                        className="text-white  cursor-pointer"
                        onClick={() => setwalletInputValue("")}
                      >
                        {" "}
                        <RxCross2 />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm opacity-80">
                    Min Value Ts. 500 & Max Value:rs. 50.000
                  </p>
                  <p className="mt-2 font-semibold">Or Select From Below</p>
                  <div className="flex w-full items-center">
                    <div className="text-white mt-1 gap-2 flex items-center w-full justify-evenly">
                      {[500, 1000, 2500, 5000, 10000].map(
                        (singleItem, index) => {
                          return (
                            <div
                              className="p-1 rounded-l-full rounded-r-full px-2 bg-[#4318FF] text-white text-sm"
                              ket={index}
                            >
                              Rs.{singleItem}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>

                <div className=" shadow-lg mt-9 bg-white rounded-lg p-3">
                  <select
                    className="outline-none text-sm"
                    name="availablecoupne"
                    id="availablecoupne"
                  >
                    <option value="coupne1">View Available Coupon</option>
                  </select>
                  <div className="mt-2 bg-red-200 text-white gap-2 rounded-lg">
                    <div className="flex items-center p-2 ">
                      <input
                        className="ml-1 font-bold w-full bg-red-200 outline-none text-blue-900"
                        type="text"
                        vlaue="wallet"
                        placeholder="Enter Coupon Code here"
                      />
                      <div className="px-5 py-1 rounded-xl bg-red-500 text-white font-bold cursor-pointer">
                        Apply
                      </div>
                    </div>
                  </div>
                </div>

                <div className="shadow-lg mt-5 bg-white rounded-lg p-3 gap-1 flex flex-col">
                  <div className="flex justify-between text-sm opacity-70">
                    <p>Recharge Amount</p>
                    <p>Rs. 500</p>
                  </div>
                  <div className="flex justify-between text-sm opacity-70">
                    <p>Coupne Code Amount</p>
                    <p>Rs. 500</p>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <p>Payable Amount</p>
                    <p>Rs. 500</p>
                  </div>
                </div>

                <div className="w-full mt-8 flex items-center justify-center content-center  text-white text-sm">
                  <div className="px-10 shadow-lg cursor-pointer  rounded-xl py-3 bg-[#4318FF] ">
                    <p>Continue to Payment</p>
                  </div>
                </div>
              </div>
            </ReactModal>
          </div>

          {/* // quick Access model */}

          <div className="flex justify-center items-center">
            <ReactModal
              isOpen={quickAccess}
              contentLabel="Example Modal"
              className="outline-none rounded-2xl shadowpupup bg-white px-10 py-10 absolute top-20 left-36"
            >
              <div className="h-auto w-full flex justify-end mb-5 ">
                <div
                  className="text-white p-2 bg-blue-600 rounded-full cursor-pointer
                            "
                  onClick={() => setquickAccess(false)}
                >
                  <RxCross2 />
                </div>
              </div>
              <div className="flex gap-5">
                {[
                  {
                    data: "Add and Order",
                    icon: "icon",
                  },
                  {
                    data: "Create a Quick Shipment",
                    icon: "icon",
                  },
                  {
                    data: "Rate Calculator",
                    icon: "icon",
                  },
                  {
                    data: "Create a Ticket",
                    icon: "icon",
                  },
                  {
                    data: "Ticket Shipments",
                    icon: "icon",
                  },
                ].map((singleItem, index) => {
                  return (
                    <div
                      className="bg-gradient-to-tl from-[#4318FF] to-[#868CFF] relative rounded-3xl cursor-pointer"
                      key={index}
                    >
                      <div className="">
                        <div className="absolute h-10 w-10 bg-gradient-to-tl from-[#4318FF] to-[#868CFF] border-2 border-white -top-4 left-1/3 rounded-full">
                          <div className="p-[.4rem] text-white">
                            <FaRegCircle />
                          </div>
                        </div>
                        <div className="text-white px-8 pt-16 pb-2  rounded-3xl bg-gradient-to-tl from-[#4318FF] to-[#868CFF]">
                          <div className="w-32 text-center">
                            <div>{singleItem.data}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ReactModal>
          </div>

          {/* // mui box */}
          <div>
            {loding ? (
              <Loding />
            ) : (
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"User Profile"}
                </DialogTitle>

                <DialogContent>
                  <ImageList
                    sx={{
                      width: 1000,
                      height: 450,
                      justify: "center",
                      borderRadius: "50%",
                    }}
                    rowHeight={164}
                  >
                    <ImageListItem>
                      <img
                        src={profile}
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="profile"
                        loading="lazy"
                      />
                    </ImageListItem>
                  </ImageList>

                  <Typography variant="h5" component="h2">
                    {localStorage.getItem("first_name") +
                      " " +
                      localStorage.getItem("last_name")}
                  </Typography>
                  <Typography variant="h6" component="h2">
                    User Id:{" "}
                    <span className="text-sm">{userProfile.user_id}</span>
                  </Typography>
                  <label htmlFor="Email">Email:</label>
                  <div>{userProfile.email}</div>
                  <div className="flex">
                    <label htmlFor="contact_no">Contact No:</label>
                    <div> {userProfile.contact}</div>
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpen(false)}>Cancle</Button>
                  <Button onClick={handleClose} autoFocus>
                    Edit
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </div>

          {/* // mui box update profile*/}
          <div>
            {loding ? (
              <Loding />
            ) : (
              <Dialog
                open={updateProfileDialogBox}
                onClose={() => setupdateProfileDialogBox(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
                maxWidth="lg"
              >
                <DialogTitle id="alert-dialog-title">
                  {"User Profile"}
                </DialogTitle>

                <DialogContent>
                  <div className="flex">
                    <ImageList
                      sx={{
                        width: 600,
                        height: 450,
                        justify: "center",
                        borderRadius: "50%",
                      }}
                      rowHeight={164}
                    >
                      <ImageListItem>
                        <img
                          src={profile}
                          // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt="profile"
                          loading="lazy"
                        />
                      </ImageListItem>
                    </ImageList>
                    <form
                      className="w-auto ml-10"
                      onSubmit={handleSubmit(profileSaveHandler)}
                    >
                      <div className="">
                        <label htmlFor="email" className="mr-3">
                          Email:
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter the mail"
                          value={clearEmail || localStorage.getItem("email")}
                          onChange={(e) => setclearEmail(e.target.value)}
                          //  onClick={()=>setclearEmail('')}
                          className="outline-none fill-none bg-transparent"
                          {...register("email")}
                        />
                        <br />
                        <br />
                        <label htmlFor="first_name" className="mr-3">
                          First Name:
                        </label>
                        <input
                          required
                          className="bg-slate-200 outline-none bg-transparent"
                          type="text"
                          name="first_name"
                          id="first_name"
                          placeholder="Enter the first name"
                          // value={localStorage.getItem("first_name")}
                          {...register("first_name")}
                        />
                        <br />
                        <br />
                      </div>

                      <label htmlFor="last_name" className="mr-3">
                        Last Name:
                      </label>
                      <input
                        required
                        className="bg-slate-200 outline-none bg-transparent"
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="Enter the last name"
                        value={localStorage.getItem("last_name")}
                        {...register("last_name")}
                      />
                      <br />
                      <br />

                      <label htmlFor="contact" className="mr-3">
                        Contact:
                      </label>
                      <input
                        required
                        className="bg-slate-200 outline-none bg-transparent"
                        type="text"
                        name="contact"
                        id="contact"
                        placeholder="Enter the contact"
                        value={localStorage.getItem("contact")}
                        {...register("contact")}
                      />
                      <br />
                      <br />

                      <label htmlFor="password" className="mr-3">
                        Password:
                      </label>
                      <input
                        required
                        className="bg-slate-200 outline-none bg-transparent"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter the password"
                        {...register("password")}
                      />
                      <br />
                      <br />

                      <label htmlFor="confirm_password" className="mr-3">
                        ReEnter Password:
                      </label>
                      <input
                        required
                        className="bg-slate-200 outline-none bg-transparent"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password ReEnter"
                        {...register("confirm_password")}
                      />
                      <br />

                      <div className="w-full mt-10 flex items-center justify-center rounded-lg">
                        <button className="px-8 py-2 rounded-lg bg-blue-800 text-white">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setupdateProfileDialogBox(false)}>
                    Cancle
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </div>

          
          {/* // Creater user dialog box */}

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
                        handleClose          required
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

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={setupandmanagementselection}
        onClose={()=> setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{  
        style: {  
          width: 250,
          onMouseLeave:()=>{
            setAnchorEl(null)
          }  
        },  
    }} 
      >
        <MenuItem 
        onClick={()=>handlSetupAndManagementMenu("ManageCashCollection")}
        >Manage Cash Collection</MenuItem>


        <MenuItem 
       onClick={()=>handlSetupAndManagementMenu("cashcollectionslist")}
        >Cash Collection List</MenuItem>

        <MenuItem 
        onClick={()=>handlSetupAndManagementMenu("d")}
        >Calculate Delivery Charges</MenuItem>
        {/* <MenuItem onClick={()=> setAnchorEl(null)}>Logout</MenuItem> */}
      </Menu>
    </div>


           <div className=" w-full px-4">
             {pages === "dashboard" && <Dashboard />}
              {pages === "orders" && <OrderList />}
              {pages === "cashcollectionslist" && <CashcollectionList />}
              {pages === "ManageCashCollection" && <ManageCashCollection />}
         </div>
        </div>
      </div>
    </div>
  );
}
