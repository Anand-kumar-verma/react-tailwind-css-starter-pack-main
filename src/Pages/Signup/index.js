import React,{useContext,useState} from 'react'
import signupImage from '../Images/signupbackgroundImage.jpg'
import { useForm } from "react-hook-form";
import FormData from "form-data";
import { AppContext } from '../../AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BiHide } from 'react-icons/bi';
import { BiShow } from 'react-icons/bi';


export default function Signup() { 
    const {baseUrl,endPoints} = useContext(AppContext);
    const [passvisibility, setpassvisibility] = useState(false);

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();


    async function submitHandler(data) {
      
        if(data.password != data.confirm_password) {
           toast.warn("Passwords do not match")
            
        }else {
            console.log(data)
            let formData = new FormData();
            formData.append("email", data.email);
            formData.append("first_name", data.first_name);
            formData.append("last_name", data.last_name);
            formData.append("contact", data.contact);
            formData.append("password", data.password);
            

            localStorage.setItem("email", data.email);
            localStorage.setItem("first_name", data.first_name);
            localStorage.setItem("last_name", data.last_name);
            localStorage.setItem("contact", data.contact);
            localStorage.setItem("password", data.password);

            try {
                const res = await axios.post(
                  `${baseUrl}${endPoints.endsignup}`,
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  }
                );

                if(res.statusText === "Created"){
                    localStorage.setItem("token", res.data.token);
                    navigate('/dashboard');
                    toast.success("Login Successfull")
                }
              
                
              } catch (e) {
                if(e.response.data.message === "User is already registered."){
                    toast.warn("This email is already registered")
                }else{
                    toast.warn("Something went wrong !")
                }
              }
        }
    }


  return (
    <div className='w-screen h-screen flex items-center justify-center bg-slate-200'>
       <img className='absolute bg-cover w-screen h-screen' src={signupImage} alt="" />
        <div className='border-2  p-10 px-20 rounded-2xl absolute bg-slate-200  bg-opacity-50'>
            <form className='w-auto ' onSubmit={handleSubmit(submitHandler)}>
                    <label htmlFor="email" className='mr-3'>Email:</label>
                    <input required type="email" name="email" id="email" placeholder='Enter the mail'
                      className='outline-none fill-none bg-transparent '
                      {...register("email")}
                     /><br /><br />
                    <label htmlFor="first_name" className='mr-3'>First Name:</label>
                    <input required className='bg-slate-200 outline-none bg-transparent' type="text" name="first_name" id="first_name" placeholder='Enter the first name' 
                           {...register("first_name")}
                    /><br /><br />
                    
                    
                    <label htmlFor="last_name" className='mr-3'>Last Name:</label>
                    <input required className='bg-slate-200 outline-none bg-transparent' type="text" name="last_name" id="last_name" placeholder='Enter the last name'
                       {...register("last_name")}
                     /><br /><br />
                    
                    
                    <label htmlFor="contact" className='mr-3'>Contact:</label>
                    <input required className='bg-slate-200 outline-none bg-transparent' type="text" name="contact" id="contact" placeholder='Enter the contact'
                       {...register("contact")}
                     /><br />
                    
                    
                    
                    <div className='flex items-center'>
                    <label htmlFor="password" className='mr-3'>Password:</label>
                    <input required className='bg-slate-200 outline-none bg-transparent select-none ...' type={`${passvisibility ? 'text':'password'}`} name='password' id='password' placeholder='Enter the password' 
                           {...register("password")}

                    />
                    <div className='text-lg'
                    onClick={()=>setpassvisibility(!passvisibility)}
                    >
                      {
                        passvisibility ? (<BiShow/>):(<BiHide/>)
                      }
                    </div>
                    <br /><br />
                    </div>

                    <label htmlFor="confirm_password" className='mr-3'>ReEnter Password:</label>
                    <input required className='bg-slate-200 outline-none bg-transparent' type="password" name='password' id='password' placeholder='Password ReEnter'
                           {...register("confirm_password")}
                    /><br />
                    
                    
                    <div className='w-full flex items-center justify-center mt-9 flex-col'>
                            <button type="submit" className='content-center px-8 py-2 bg-blue-900 text-white rounded-lg'>Submit</button>
                           
                    </div>
                    <div className='w-full text-end cursor-pointer'
                    ><p
                    onClick={()=>navigate('/')}
                    >User Login?</p></div>
            </form> 
            
        </div>
    </div>
  )
}


