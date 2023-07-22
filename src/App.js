import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from './Pages/Login'
import Home from './Pages/Home'
import OrderList from "./Pages/OrderList";

function App() {
  return (
         <Routes>
            <Route path="/dashboard" element={<Home/>}></Route>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/orderlist" element={<OrderList/>}></Route>
         </Routes>
  );
}

export default App;
