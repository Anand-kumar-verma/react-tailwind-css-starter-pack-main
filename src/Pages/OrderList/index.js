import React,{useState,useEffect,useContext} from 'react'
import { AppContext } from '../../AppContext';
import axios from 'axios';

export default function OrderList() {

    const {baseUrl,endPoints,loding,setloding} = useContext(AppContext);

    async function getOrderList(){
        console.log("function called")
        setloding(true)
        

        console.log(localStorage.getItem('token'));
        const response = await axios.get(
            `${baseUrl}${endPoints.endorderlist}`,
            {
              headers: {
                "Content-Type": "application/json",
                token:localStorage.getItem('token'),
                'Access-Control-Allow-Origin': '*',
              },
            }
          );
  
        try{
           
            console.log(response)
          //   const data = await response.json()
          //   console.log(data)
          }catch(e){
              alert('Something went wrong')
          }
        setloding(false)
    }

    useEffect(() => {
        getOrderList()
    }, []);


  return (
    <div className='w-full  mt-8  flex items-center bg-[#BB86FD] bg-opacity-10 rounded-lg '
    >
                <table id="customers" className='mb-5 w-full rounded-lg bg-[#BB86FD] bg-opacity-10 text-[#8F38F1]'>
                          <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Payment Method</th>
                            <th>Pickup Location</th>
                            <th>Drop Location</th>
                          </tr>
                          {
                            [1,2,3].map((singleItem,index)=>{
                                return <tr key={index}>
                                        <td>1.</td>
                                        <td>Maria Anders</td>
                                        <td>Germany</td>
                                    </tr>
                            })
                          }
        </table>
    </div>
  )
}
