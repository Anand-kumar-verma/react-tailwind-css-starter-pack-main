import React,{useContext, useState} from 'react'
import ReactModal from 'react-modal';
import logo from '../Images/logo.png'
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegCircle } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineLogout } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import { SlHandbag } from 'react-icons/sl';
import { BsPeople } from 'react-icons/bs';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { AiFillSlackCircle } from 'react-icons/ai';
import { BsFolder2 } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiBell } from 'react-icons/bi';
import { CgMoreR } from 'react-icons/cg';
import OrderList from '../OrderList';
import Dashboard from '../Dashboard';
import { useNavigate } from 'react-router-dom';
import logindashboardImage1 from '../Images/logindashboardimage1.png'
import logindashboardImage2 from '../Images/logindashboardimage2.png'
import notificatonimg1  from '../Images/notificatioImg1.png'
import notificatonimg2 from '../Images/notificationmsh2.png'
import notificatonimg3 from '../Images/notificationmsh3.png'
import notificatonimg4 from '../Images/notificationimg4.png'
import quickAccessImg from '../Images/QuickAccessImg.png'

export default function Home() {

//  const {setloginpopup} = useContext(AppContext);

    const navigate  = useNavigate();
    
    const [pages, setpages] = useState("home");

    const [isOpenlogin, setIsOpenlogin] = useState(false);
    const [isOpenmultipleItem, setIsOpenmultipleItem] = useState(false);
    const [notification, setnotification] = useState(false);
    const [rechargeWallet, setrechargeWallet] = useState(false);
    const [quickAccess, setquickAccess] = useState(false);


    const [walletInputValue, setwalletInputValue] = useState('');
    
    function clickHandler(index){
      setIsOpenlogin(false)
      if(index == 6){
        localStorage.removeItem('token')
        navigate('/')
      }
    }

    function handleClick(value){
      setpages(value)
    }

  return (
    <div className="relative h-full w-full bg-green-300 overflow-y-hidden">
    
      <div id="dv" className="w-full  fixed   h-full flex bg-[#F5F5F5]">
        <div
          id="side"
          className="px-3 z- py-10 mt-0  mb-0 rounded-lg  text-[1rem] font-semibold flex flex-col justify-between my-5 bg-[#FFFFFF] shadowclass"
        >
          <div className='flex gap-3 items-center'>
                <img
                src={logo}
                className="h-10 w-10"
                />
                <div className='text-2xl'>LOGO</div>
          </div>
          <div onClick={() => handleClick("home")}
           className={`${pages == "home" ? 'bg-[#6351FE]' : ""}  flex p-2 gap-2 items-center text-blue pt-4 rounded-lg cursor-pointer text-[#53545C]`} 
           >
           <div><AiOutlineHome/></div>
           {/* <div className="outline-none rounded-md px-1">Home</div> */}
           <p>Home</p>
          </div>

          <div
            
            className={`${pages == "dashboard" ? 'bg-[#6351FE]' : ""}
           flex items-center gap-2 text-[#53545C] text-[.95rem] p-2  rounded-lg cursor-pointer
            `}
            onClick={() => handleClick("dashboard")}
            
          >
            <div><RxDashboard/></div>
            <p>Dashboard</p>
          </div>
          <div 
           onClick={() => handleClick("order")}
          className={`${pages == "order" ? 'bg-[#6351FE]' : ""}
          flex items-center gap-2 text-[#53545C] p-2 text-[.95rem] rounded-lg cursor-pointer
          `}

         >
           <div><SlHandbag/></div>
            <p>Order</p>
          </div>
          <div className="flex items-center gap-2 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer">
           <div><BsPeople/></div>
            <p>Return</p>
          </div>
          <div
            onClick={() => handleClick(1)}
            className="flex items-center gap-2 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          >
            <div className='text-[1rem]'><BiMessageRoundedDots/></div>
          
            <p>Delivery Boost</p>
          </div>
          <div
            onClick={() => handleClick(2)}
            className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          >
              <div><AiOutlineSetting/></div>
            <select name="weight" id=""><option value="weightmanagement">Weight Management</option></select>
          </div>
          <div
            onClick={() => handleClick(3)}
            className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          >
            <div><AiOutlineSetting/></div>
            <select name="setup" id=""><option value="setup">Setup & Manage</option></select>
          </div>

          <div
            onClick={() => handleClick(4)}
            className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          ><div><AiOutlineSetting/></div>
            <select name="byer" id=""><option value="buyer">Buyer Experience</option></select>
          </div>

          <div className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer">
          <div><AiOutlineSetting/></div>
            <p>Billing</p>
          </div>
          <div className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer">
          <div><AiOutlineSetting/></div>
            <select name="tool" id=""><option value="tool">Tools</option></select>
          </div>
          <div onClick={()=>handleClick(7)}
          className="
          flex gap-2 text-[#53545C] items-center p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer">
           <div><AiOutlineSetting/></div>
            <p>Setting</p>
          </div>

          <div className='h-[6.5rem]  w-full bg-gradient-to-tl from-blue-500 to to-white rounded-lg relative flex items-center justify-center mt-24'>
                    <div className='h-10 w-10 bg-blue-800 rounded-full border-2 border-white absolute -top-2 left-[42%] flex justify-center items-center'>
                         <div className='w-5 h-5 bg-white rounded-full flex justify-center items-center '><div className='text-blue-800 text-[1rem]'>?</div></div>
                    </div>
                    <div className='h-auto bg-white  rounded-l-full rounded-r-full flex justify-center items-end absolute bottom-2 py-1 px-3'><div>Help & Support</div></div>
          </div>
        </div>

        <div className="w-full overflow-auto example">
           <div className=' mt-10 px-8
                 flex justify-between items-center w-auto h-auto py-1'>
                <div className='flex gap-5 items-center text-[.9rem] bg-white rounded-l-full rounded-r-full px-3'>
                  
                  <div className='flex gap-1 items-center cursor-pointer'
                  onClick={()=>setquickAccess(true)}
                  >
                    <div className='text-lg text-blue-900'>
                        <img className='bg-blue-700 h-6 w-6 rounded-full  p-1' src={quickAccessImg} alt="" />
                      {/* <AiFillSlackCircle/> */}
                    </div>
                    <p>Quick Action</p>
                  </div>
                  <div className='h-auto  bg-blue-900 w-[1px]'></div>
                  <div>
                  <div className='flex text-lg text-green-900 items-center cursor-pointer
                  '
                  onClick={()=>setrechargeWallet(true)}
                  >
                      <div className='text-green-700'><BsFolder2/></div>
                      <div className='text-[1.5rem]'><RiArrowDropDownLine/></div>
                  </div>
                  </div>
                  <div className=' py-2 cursor-pointer bg-[#22C55E] rounded-l-full rounded-r-full px-3 text-white
                  '
                  onClick={()=>setrechargeWallet(true)}
                  >Recharger Wallet
                  </div>
                </div>

              {/* ///right section */}
              <div className='w-auto h-auto p-1 bg-gradient-to-r from-[#BFEBFF] to-[#F3E8FF] flex items-center gap-5 rounded-l-full rounded-r-full px-3 py-1 mr-6'>
                <div>
                    <input className='rounded-l-full rounded-r-full outline-none w-32 bg-white px-2' type="search" placeholder='Search'/>
                </div>
                <div className='p-1 cursor-pointer text-white rounded-l-full flex rounded-r-full bg-gradient-to-br from-[#FF409A] to-[#C438EF]'
                onClick={()=>setnotification(true)}
                >
                   <div><BiBell/></div>
                   <div className='text-xs'>15</div>
                </div>

                <div className='text-gray-500 cursor-pointer'
                 onClick= {()=>setIsOpenmultipleItem(true)}
                ><CgMoreR/></div>

               <div className='h-10 w-10 bg-slate-400 cursor-pointer flex items-center justify-center rounded-full bg-gradient-to-br from-[#9890BE] to-[#ABAFEF] text-blue-900'
                onClick= {()=>setIsOpenlogin(true)}
               > 
                    <BsPeople/>
                   
               </div>

              </div>
           </div>
          {/* <div>
          <button onClick={setIsOpen}>Open Modal</button>
          
          </div> */}
           


                   {/* // login model */}
                  <div className='flex justify-center items-center'>
                        <ReactModal
                            isOpen={isOpenlogin}
                            contentLabel="Example Modal"
                            className='outline-none rounded-2xl mt-20 mr-5 shadowpupup bg-gradient-to-r from-[#5ac2f2] to-[#e6d1fb] absolute px-10 py-10 right-0 top-0'
                        >
                        <div className='h-auto w-full flex justify-end mb-5 '>
                        <div className='text-white p-2 bg-blue-600 rounded-full cursor-pointer
                        '
                        onClick={()=>setIsOpenlogin(false)}
                        ><RxCross2/></div>
                        </div>
                        <div className=' flex flex-col gap-5'>
                        {
                            ['Aashish','Current Plan','Refer & Earn','Rate Us','Term & Conditions','Change Passsword','Logout'].map((singleData,index)=>{
                                return <div key={index}
                                className=' bg-[#F4F7FE] cursor-pointer text-[#2563EB] font-semibold flex items-center w-[20rem] py-3 rounded-l-full rounded-r-full'
                                onClick={()=>clickHandler(index)}
                                >
                                <div className='ml-5 mr-2'><AiOutlineLogout/></div>
                                <div className=''>{singleData}</div>
                                </div>
                            })
                            }
                        </div>
                        
                        </ReactModal> 
                      </div>

              {/* // multiple items model */}
                      <div className='flex justify-center items-center'>
                        <ReactModal
                           
                            isOpen={isOpenmultipleItem}
                            contentLabel="Example Modal"
                            className='outline-none rounded-2xl mt-20 mr-20 shadowpupup bg-gradient-to-r from-[#5ac2f2] to-[#e6d1fb] absolute px-10 py-10 right-0 top-0'
                        >
                        <div className='h-auto w-full flex justify-end mb-5 '>
                        <div className='text-white p-2 bg-blue-600 rounded-full cursor-pointer
                        '
                        onClick={()=>setIsOpenmultipleItem(false)}
                        ><RxCross2/></div>
                        </div>
                        <div className=' flex flex-col gap-8'>
                              <img className='h-28 w-64' src={logindashboardImage1} alt="" />
                              <img className='h-28 w-64' src={logindashboardImage2} alt="" />
                        </div>
                        
                        </ReactModal> 
                      </div>

                      {/* // notification model */}
                      <div className='flex justify-center items-center'>
                        <ReactModal
                           
                            isOpen={notification}
                            contentLabel="Example Modal"
                            className='outline-none overflow-scroll rounded-2xl mt-20 mr-36 shadowpupup bg-gradient-to-r from-[#5ac2f2] to-[#e6d1fb] absolute px-10 py-10 right-0 top-0'
                        >
                        <div className='h-auto w-full flex justify-end mb-5 '>
                            <div className='text-white p-2 bg-blue-600 rounded-full cursor-pointer
                            '
                            onClick={()=>setnotification(false)}
                            ><RxCross2/></div>
                        </div>
                        <div className=' flex flex-col gap-3 h-96 overflow-auto'>
                              <img className='h-28 w-64' src={notificatonimg1} alt="" />
                              <img className='h-28 w-64'  src={notificatonimg2} alt="" />
                              <img className='h-28 w-64' src={notificatonimg4} alt="" />
                              <img className='h-28 w-64' src={notificatonimg4} alt="" />
                              <img className='h-28 w-64' src={notificatonimg1} alt="" />
                              <img className='h-28 w-64'  src={notificatonimg2} alt="" />
                              <img className='h-28 w-64' src={notificatonimg4} alt="" />
                              <img className='h-28 w-64' src={notificatonimg4} alt="" />
                        </div>
                        
                        </ReactModal> 
                      </div>
                      {/* // recharger wallet */}
                      <div className='flex justify-center items-center'>
                        <ReactModal
                           
                            isOpen={rechargeWallet}
                            contentLabel="Example Modal"
                            className='outline-none rounded-2xl shadowpupup bg-gradient-to-r from-[#5ac2f2] to-[#e6d1fb] absolute px-5 py-5 left-40 top-10'
                        >
                        <div className='h-auto w-full flex flex-col'>
                            <div className='flex items-center w-full justify-between '>
                              <div>
                                <p className='font-bold'>Recharge Your Wallet</p>
                                <p className='text-sm'>Current Wallet Amount  Rs. 0.00</p>
                              </div>
                              <div className='text-white p-2 bg-blue-600 rounded-full cursor-pointer
                                '
                                onClick={()=>setrechargeWallet(false)}
                              ><RxCross2/>
                              </div>
                            </div>
    {/* \// input handling */}
                            <div className='mt-4 bg-white rounded-lg p-3 shadow-lg'>
                              <p className='text-[.97rem]'>Enter Amount in Multiples of 100 Below</p>
                              <div className='mt-2 bg-[#4318FF] text-white gap-2 rounded-lg'>
                                <div className='flex items-center p-2 '>
                                    <p className='font-bold'>Rs.</p>
                                    <input className= 'ml-1 font-bold w-full bg-[#4318FF] outline-none text-white' id='walletinput' type="text"  value={walletInputValue} placeholder='500'
                                      onChange={(e)=>setwalletInputValue(e.target.value)}
                                    />
                                    <div className='text-white  cursor-pointer'
                                    onClick={()=>setwalletInputValue('')}
                                    > <RxCross2/>
                                    </div>
                                </div>
                              </div>
                              <p className='text-sm opacity-80'>Min Value Ts. 500 & Max Value:rs. 50.000</p>
                              <p className='mt-2 font-semibold'>Or Select From Below</p>
                              <div className='flex w-full items-center'>
                                <div className='text-white mt-1 gap-2 flex items-center w-full justify-evenly'>
                                    {
                                      [500,1000,2500,5000,10000].map((singleItem,index)=>{
                                        return <div className='p-1 rounded-l-full rounded-r-full px-2 bg-[#4318FF] text-white text-sm' ket={index}>Rs.{singleItem}</div>
                                      })
                                    }
                                </div>
                              </div>
                            </div>

                            <div className=' shadow-lg mt-9 bg-white rounded-lg p-3'>
                             <select className='outline-none text-sm' name="availablecoupne" id="availablecoupne">
                              <option value="coupne1">View Available Coupon</option>
                             </select>
                              <div className='mt-2 bg-red-200 text-white gap-2 rounded-lg'>
                                <div className='flex items-center p-2 '>
                                   
                                    <input className= 'ml-1 font-bold w-full bg-red-200 outline-none text-blue-900' type="text"  vlaue="wallet" placeholder='Enter Coupon Code here'/>
                                    <div className='px-5 py-1 rounded-xl bg-red-500 text-white font-bold cursor-pointer'>Apply</div>
                                </div>
                              </div>
                            </div>

                            
                            <div className='shadow-lg mt-5 bg-white rounded-lg p-3 gap-1 flex flex-col'>
                                <div className='flex justify-between text-sm opacity-70'>
                                    <p>Recharge Amount</p>
                                    <p>Rs. 500</p>
                                </div>
                                <div className='flex justify-between text-sm opacity-70'>
                                    <p>Coupne Code Amount</p>
                                    <p>Rs. 500</p>
                                </div>
                                <div className='flex justify-between font-semibold'>
                                <p>Payable Amount</p>
                                <p>Rs. 500</p>
                            </div>
                              
                            </div>

                            <div className='w-full mt-8 flex items-center justify-center content-center  text-white text-sm'>
                              <div className='px-10 shadow-lg cursor-pointer  rounded-xl py-3 bg-[#4318FF] '><p>Continue to Payment</p></div>
                            </div>
                        </div>
                        
                        
                        </ReactModal> 
                      </div>

                      {/* // quick Access model */}

                      <div className='flex justify-center items-center'>
                        <ReactModal
                           
                            isOpen={quickAccess}
                            contentLabel="Example Modal"
                            className='outline-none rounded-2xl shadowpupup bg-white px-10 py-10 absolute top-20 left-36'
                        >
                        <div className='h-auto w-full flex justify-end mb-5 '>
                            <div className='text-white p-2 bg-blue-600 rounded-full cursor-pointer
                            '
                            onClick={()=>setquickAccess(false)}
                            ><RxCross2/></div>
                        </div>
                    <div className='flex gap-5'>
                          {
                            [
                              {
                                data:'Add and Order',
                                icon:'icon'
                              },
                              {
                                data:'Create a Quick Shipment',
                                icon:'icon'
                              },
                              {
                                data:'Rate Calculator',
                                icon:'icon'
                              },
                              {
                                data:'Create a Ticket',
                                icon:'icon'
                              },
                              {
                                data:'Ticket Shipments',
                                icon:'icon'
                              },
                            ].map((singleItem,index)=>{
                              return <div  className='bg-gradient-to-tl from-[#4318FF] to-[#868CFF] relative rounded-3xl cursor-pointer' key={index}>

                                            <div className=''>
                                                <div className='absolute h-10 w-10 bg-gradient-to-tl from-[#4318FF] to-[#868CFF] border-2 border-white -top-4 left-1/3 rounded-full'>
                                                  <div className='p-[.4rem] text-white'><FaRegCircle/></div>
                                                </div>
                                                <div className='text-white px-8 pt-16 pb-2  rounded-3xl bg-gradient-to-tl from-[#4318FF] to-[#868CFF]'>
                                                      <div className='w-32 text-center'><div>{singleItem.data}</div></div>
                                                </div>
                                              
                                            </div>
                                      </div>
                            })
                            
                          }
                    </div>
                        
                        </ReactModal> 
                      </div>


                      { pages === "dashboard" && <Dashboard/> }
                      { pages === "order" && <OrderList/> }
 
        </div>
      </div>
      
    </div>
  )
}
