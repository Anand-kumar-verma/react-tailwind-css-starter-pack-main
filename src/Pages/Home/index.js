import React, { useContext, useState } from 'react'
import logo from '../Images/logo.png'
import { AppContext } from '../../AppContext'
import Overviews from '../../Pages/Overviews'
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from '@mui/material/Avatar';
import Profile from '../Images/profile.jpg';
import NDR from '../NDR';


export default function Home() {
  const { headerData, handleHeader, sethandleHeader } = useContext(AppContext)
  const [underline, setunderline] = useState(0);

  function fun(index) {
    sethandleHeader(index)
    setunderline(index)

  }
  // console.log(underline)

  function handleClick() {

  }


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="relative overflow-y-hidden h-full w-full">

      <div id="dv" className="w-full  overflow-y-hidden h-full flex bg-[#F5F5F5] ">
        <div

          id="side"
          className="w-60 px-3 z-10 py-10 mt-0  mb-0 rounded-lg  h-full text-[1rem] font-semibold flex flex-col justify-between my-5 bg-[#FFFFFF] shadowclass"
        >
          <div className='flex gap-3 items-center'>
            <img
              src={logo}

              className="h-10 w-10"

            />
            <div className='text-2xl'>LOGO</div>
          </div>
          <div onClick={() => handleClick(0)} className="flex text-[.95rem] gap-1 text-blue py-4 rounded-lg cursor-pointer text-[#53545C]">

            <div className="outline-none rounded-md px-1">Home</div>
          </div>

          <div

            className="flex gap-1 text-[#53545C] text-[.95rem] p-2 hover:bg-white rounded-lg cursor-pointer"
            onClick={() => handleClick(6)}
          >

            <p>Dashboard</p>
          </div>
          <div
            onClick={() => handleClick(5)}
            className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer">

            <p>Order</p>
          </div>
          <div className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer">

            <p>Return</p>
          </div>
          <div
            onClick={() => handleClick(1)}
            className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          >

            <p>Delivery Boost</p>
          </div>
          <div
            onClick={() => handleClick(2)}
            className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          >

            <select name="weight" id=""><option value="weightmanagement">Weight Management</option></select>
          </div>
          <div
            onClick={() => handleClick(3)}
            className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          >

            <select name="setup" id=""><option value="setup">Setup & Manage</option></select>
          </div>

          <div
            onClick={() => handleClick(4)}
            className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer"
          >
            <select name="byer" id=""><option value="buyer">Buyer Experience</option></select>
          </div>

          <div className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer">

            <p>Billing</p>
          </div>
          <div className="flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer">

            <select name="tool" id=""><option value="tool">Tools</option></select>
          </div>
          <div onClick={() => handleClick(7)}
            className="
          flex gap-1 text-[#53545C] p-2 text-[.95rem] hover:bg-white rounded-lg cursor-pointer">

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
              <div className='flex gap-1'>
                Quick Action
              </div>
              <div className='h-auto bg-blue-900 w-[1px]'></div>
              <div>
                <select name="folder" id="folder">
                  <option value="folder">Folder</option>
                </select>
              </div>
              <div className=' py-2 bg-[#22C55E] rounded-l-full rounded-r-full px-3 text-white'>Recharger Wallet</div>
            </div>

            {/* ///right section */}
            <div className='w-auto h-auto p-1 bg-gradient-to-r from-[#BFEBFF] to-[#F3E8FF] flex items-center gap-5 rounded-l-full rounded-r-full px-3 py-1 mr-6'>
              <div>
                <input className='rounded-l-full rounded-r-full outline-none w-32 bg-white px-2' type="search" placeholder='Search' />
              </div>
              <div className='px-3 rounded-l-full rounded-r-full bg-purple-900'>15</div>

              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick2}
                >

                  <Avatar alt="Cindy Baker" src={Profile} />
                </Button>

                <Menu
                  id="basic-menu"

                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <div className="profilebg w-96">


                    <div>
                      <MenuItem className="basic-menu2" onClick={handleClose}>Profile</MenuItem>
                    </div>

                    <MenuItem className="basic-menu2" onClick={handleClose}>My account</MenuItem>
                    <MenuItem className="basic-menu2" onClick={handleClose}>Logout</MenuItem>
                    <MenuItem className="basic-menu2" onClick={handleClose}>Profile</MenuItem>
                    <MenuItem className="basic-menu2" onClick={handleClose}>My account</MenuItem>
                    <MenuItem className="basic-menu2" onClick={handleClose}>Logout</MenuItem>
                  </div>
                </Menu>
              </div>

            </div>
          </div>

          {/* // hrere must be render all components */}

          <div className='mt-10 flex items-center justify-between bg-[#F3E8FF] py-2 p'>
            <div className='flex gap-8 text-[#2563EB] px-8 '>
              {
                headerData.map((singleData, index) => {
                  return <div className={`${underline == 0 && 'b0'} ${underline == 1 && 'b1'} ${underline == 2 && 'b2'} ${underline == 3 && 'b3'} ${underline == 4 && 'b4'} ${underline == 5 && 'b5'} ${underline == 6 && 'b6'} ${underline == 7 && 'b7'} ${underline == 8 && 'b8'}} cursor-pointer`}
                    onClick={() => fun(index)}
                    key={index}>
                    <div className='py-1'>{singleData}</div>
                  </div>
                })
              }
            </div>
            <div className=''>
              <select className='p-2 rounded-l-full outline-none rounded-r-full px-3 mr-8' name="select" id="select">
                <option value="domestic">Domestic</option>
              </select>
            </div>
          </div>

          <div className='w-full h-full ml-8 mt-4  overflow-scroll'>

            {handleHeader == 0 && <Overviews />}
            {handleHeader == 3 && <NDR />}


          </div>

        </div>
      </div>

    </div>
  )
}
