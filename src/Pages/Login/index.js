import React, { useContext, useEffect } from "react";
import loginImage from "../Images/loginimage.jpg";
import { useForm } from "react-hook-form";
import { AppContext } from "../../AppContext";
import Loding from "../../component/Loding";
import axios from "axios";
import FormData from "form-data";
import { useNavigate,useParams } from "react-router-dom";
import logo from "../Images/logo.png";
import { toast } from "react-toastify";
import GoogleButton from 'react-google-button'
import { WidthFull } from "@mui/icons-material";
import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";
import firebase from 'firebase'
import {auth} from '../../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
// import {signInWithPopup,FacebookAuthProvider} from 'react-firebase-hooks/auth';


export default function Login() {
  const [user] = useAuthState(auth)
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
}


  function signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider()
    auth.signInWithPopup(provider)
    .then(()=>{
      console.log("Successfully")
    })
    .catch((err)=>{
      console.log(err.message)
    })
}




  const { role } = useParams();
// console.log(role)
  const { loding, setloding, baseUrl, endPoints } = useContext(AppContext);
 
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function submithandler(data) {
    setloding(true);
    // if (!data.username) {
    //   alert("Please enter a username");
  
    //   navigate("/");
    //   return;
    // }
    // if (!data.password) {
    //   alert("Please enter a password");
      
    //   navigate("/");
    //   return;
    // }

    let formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    try {
      const response = await axios.post(
        `${baseUrl}${role==='superadmin'?endPoints.endsuperuserlogin:endPoints.endlogin}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
 
      console.log(response);

      if (response.data.token && response.data.user_id) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data.user_id);
        if(role === "superadmin"){
          localStorage.setItem("role","superadmin")
        }
      }

      if (response.statusText === "OK") {
        toast.success("Login Successfull !")
        if(localStorage.getItem('role') ==='superadmin'){
          navigate('/sdashboard')
        }else{
          navigate("/dashboard");
        }
      }
    } catch (e) {
      console.log(e)
      toast.warn("Incorrect  User Id or Password !")
    }

    console.log(localStorage.getItem("token"));
    setloding(false);
  }

  useEffect(() => {
   if(role ==="superadmin"){
    if(user && localStorage.getItem("token")){
      navigate('/sdashboard')
    }else{
      localStorage.getItem("token") ? navigate('/sdashboard'):navigate("/login/superadmin")

    }
   }else{
    localStorage.getItem("token") ? navigate("/dashboard") : navigate("/");
   }
   
  }, [localStorage.getItem("token")]);


  return (
    <div>
      {loding ? (
        <Loding />
      ) : (
        <div className="overflow-x-hidden overflow-y-hidden w-full h-full bg-blue-600">
          <div className="flex relative">
            <div>
              <img className="h-screen w-screen" src={loginImage} alt="" />
            </div>
            <div className="">
              <div className="absolute w-1/3  z-20 top-[16%] bg-opacity-50 right-10 bg-gradient-to-tl from-[#7b4d9a]  to-[#FFFF]  p-5 rounded-[2rem]">
                <div className="py-5 border-b-2 border-blue-900 w-28">
                  Login
                </div>
                <div className="mt-3 text-black text-opacity-80">
                  Welcome onboard with us!
                </div>
                <form onSubmit={handleSubmit(submithandler)} className="mt-10">
                  <label htmlFor="userName text-black text-opacity-80">
                    Username
                  </label>
                  <br />
                  <input
                    type="text"
                    required
                    placeholder="Enter your username"
                    className="w-full h-12 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mt-2 "
                    {...register("username")}
                  />
                  <br />
                  <br />
                  <label
                    className="mt-8"
                    required
                    htmlFor="userName text-black text-opacity-80"
                  >
                    Password
                  </label>
                  <br />

                  <input
                    type="text"
                    placeholder="Enter your password"
                    className="w-full h-12 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mt-2 "
                    {...register("password")}
                  />
                  <div className="w-full text-sm text-right text-white text-opacity-80">
                    Forget Password?
                  </div>

                  <div className="text-center cursor-pointer mt-10 bg-white rounded-lg">
                    <button className="outline-none w-full h-full py-3">
                      LOGIN
                    </button>
                  </div>
                  <div className="w-full text-center mt-4  text-black text-opacity-80 cursor-pointer"
                  onClick={()=>navigate('/signup')}
                  >
                    New to Logo? <span className="font-bold">Register</span>{" "}
                    Here
                  </div>
                </form>
               <div className="w-full mt-3 gap-2 flex items-end justify-between">
                 <div className="">
                 <FacebookLoginButton 
                 onClick={signInWithFacebook}
                 >
                  <span>FaceBook Login</span>
                </FacebookLoginButton>
                 </div>
                 <div>
                 <GoogleLoginButton 
                 
                 onClick={signInWithGoogle} 

                 />
                 </div>
               </div>
              </div>
            </div>
            {/* // this is circle */}
            <div className="absolute -top-11 left-[20%] h-[20%] w-[10%] bg-white rounded-full opacity-80"></div>
            <div className="absolute rounded-full w-[20%] h-[40%] border-2 opacity-30 -left-20 -top-20 "></div>
            <div className="absolute rounded-full border-2 h-[30%] w-[15%] -top-10 right-[13%] opacity-60 z-20"></div>
            <div className="z-20 opacity-60 absolute -right-16 -bottom-[10%] h-[30%] w-[15%] border-2 rounded-full"></div>
            {/* //company logo */}
            <div className="absolute top-[16%] left-10 bg-red-100 rounded-full flex items-center justify-center">
              <img className="rounded-full p-1 h-20 w-20" src={logo} alt="" />
            </div>
          </div>
          
        </div>
        
      )}
    </div>
  );
}
