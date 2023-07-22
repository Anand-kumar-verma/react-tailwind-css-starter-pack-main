import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from './Pages/Login'
import Home from './Pages/Home'
import OrderList from "./Pages/OrderList";
import Signup from "./Pages/Signup";
import SHome from "./SuperAdmin/SHome";
import OrderAssign from "./SuperAdmin/Orders/OrderAssign";

function App() {
  return (

         <Routes>
            <Route  path="/signup" element={<Signup/>}></Route>
            <Route path="/dashboard" element={<Home/>}></Route>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/orderlist" element={<OrderList/>}></Route>

            {/* //superAding */}
            <Route path='/login/:role' element={<Login/>}/>
            <Route path='/sdashboard' element={<SHome/>}/>
         </Routes>
         
  );
}

export default App;
