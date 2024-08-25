import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";
const Main = () => {
    const location=useLocation()
  const noHeaderFooter=location.pathname.includes("login")||location.pathname.includes('singup')
    return (
        <div>
       {noHeaderFooter|| <Navbar></Navbar>}
            <Outlet/>
            {noHeaderFooter|| <Footer/>}
     
        </div>
    );
};

export default Main;