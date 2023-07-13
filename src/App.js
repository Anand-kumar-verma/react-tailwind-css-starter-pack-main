import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from './Pages/Home'
import NDR from "./Pages/NDR";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/ndr" element={<NDR />} />

    </Routes>
  );
}

export default App;
