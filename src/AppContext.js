import React, { useState,createContext } from 'react'

export const AppContext = createContext();

export default function AppContextProvider({children}){


    const headerData = ['Overview', 'Orders','Shipments','NDR','WhatsApp Comm','RTO','Courier','Delays','Tracing Page']
    const homeCardData = [
        {
        title:"Today's Order",
        day:'Yesterday',
        dayRs:0,
        volumeRs:0
    },
        {
        title:"Today's Revenue",
        day:'Yesterday',
        dayRs:10,
        volumeRs:0,
    },
        {
        title:"Average Shipping",
        day:'Yesterday',
        dayRs:0,
        volumeRs:9
    }
        ]

    const [handleHeader, sethandleHeader] = useState(0);
    const [loding, setloding] = useState(false);
   
    
    const baseUrl = "http://192.168.1.71:9099"
    const endPoints = {
            endlogin:"/api/users/login/",
            endorderlist:"/api/users/order_list/"
    }


    const value = {
        headerData,
        homeCardData,
        baseUrl,
        endPoints,
        handleHeader,
        sethandleHeader,
        loding,
        setloding
      
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
