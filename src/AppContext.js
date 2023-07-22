import React, { useState,createContext } from 'react'

export const AppContext = createContext();

export default function AppContextProvider({children}){


   const [cid, setcid] = useState(null);

    
    const [loding, setloding] = useState(false);
   
    
    // const baseUrl = "http://192.168.1.71:9099"
    // const baseUrl = "http://192.168.1.71:9098"
    const baseUrl = "http://192.168.1.71:9095"
    // const baseUrl = "https://driver.appvedas.com"

    const endPoints = {
            endlogin:"/api/users/login/",
            endorderlist:"/api/users/order_list/",
            endsignup:"/api/users/register/",
            endcashcollection:"/api/users/cash_collection_api/",
            endorderlistbyid:"/api/users/order/?order_id=",
            endgetuserprofile:"/api/users/apiusers_data/?user_id=",
            endupdateuserprofile:"/api/users/apiusers_data/?user_id=",
            endcreateorder:"/api/users/orders/",
            endcodvalues:"/api/users/reports/cod_values/",
            endorderstatewise:"/api/users/reports/order_state_value/?days=",
            endtodaysorder:"/api/users/reports/today-orders/",
            endrevenue:"/api/users/reports/revenue/",
            endorderaveragereport:"/api/users/reports/order_status_average/",
            endrevenuelastsevendays:"/api/users/reports/total_revenue_last_seven_days/",
            endmanagecashcollection:"/api/users/manage_cash_collection_return/",





            //super user 
            endsuperuserlogin:"/api/users/superadmin_login_api/",
            endcompanylist:"/api/users/company_list/",
            endtodaysallorder:"/api/users/today_orders_superadmin/",
            endtodaysallordercompanywise:"/api/users/today_orders_superadmin/?company_id=",
            getalldeliveryboybyadmin:"/api/users/get_delivery_persons/",
            endassignorderbyadmin:"/api/users/assign_delivery_boy/",
            endgetallorderlist:"/api/users/get_orders_list_by_superuser_users/",
            endgetorderlistcompanywise:"/api/users/get_orders_list_by_superuser_users/?company_id=",
            endgetallrevenue:"/api/users/revenue_super_user/",
            endgetallrevenuecompanywise:"/api/users/revenue_super_user/?company_id=",
            endallcodvalues:"/api/users/cod_values_superuser/",
            endallcodvaluescompanywise:"/api/users/cod_values_superuser/?company_id=",
            endautoassignorderbyadmin:"/api/users/updated-assign-order-to-delivery-boy/",
            enddeliveryperformance:"/api/users/order_status_super_user/",
            enddeliveryperformancecompanywise:"/api/users/order_status_super_user/?company_id="
    }


    const value = {
        baseUrl,
        endPoints,
        loding,
        setloding,
        cid,
        setcid
      
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
