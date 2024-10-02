import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeleteModel from "./Components/modal/DeleteModel";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import SeeAll from "./pages/SeeAll";
import VehicleDetails from "./pages/VehicleDetails";
import VehicleRegister from "./pages/VehicleRegister";
// import UpdateModel from "./Components/modal/UpdateModel";




function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicledetails/:vid" element={<VehicleDetails />} />
        {/* <Route path="/vehicledetails" element={<VehicleDetails />} /> */}
        {/* <Route path="/update" element={<UpdateModel />} /> */}
        <Route path="/datas" element={<SeeAll/>}/>
        <Route path="/delete" element={<DeleteModel />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/register" element={<VehicleRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
