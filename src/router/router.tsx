import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Singup from "../pages/Singup/Singup"
import Login from "../pages/Login/Login";
import PrivateRoute from './PrivateRoute'
import FacilityDetail from "@/components/FacilityDetail";
import FacilityBooking from "@/components/FacilityBooking";
import Contact from "@/pages/Contact/Contact";
import NotFound from "@/pages/NotFound/NotFound";
import DashBoard from "@/components/layout/DashBoard";
import Myprofile from "@/pages/Dashboard/Myprofile";
import AddFacility from "@/pages/Dashboard/AddFacility/AddFacility";
import DeleteFacility from "@/pages/Dashboard/DeleteFacility/DeleteFacility";
import UpdateFacility from "@/pages/Dashboard/UpdateFacility/UpdateFacility";
import MakeAdmin from "@/pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./AdminRoute";
import AboutUs from "@/pages/AboutUs/AboutUs";
import AllBooking from "@/pages/Dashboard/AllBooking/AllBooking";
import MyBooking from "@/pages/Dashboard/MyBooking/MyBooking";
export const router =createBrowserRouter([
    {

    
    path:'/',
    element:<App/>,
    children:[
        {
        index:true,
        element:<Home/>

    },{
        path:'/singup',
        element:<Singup/>
    }
    ,{
        path:'/login',
        element:<Login/>
    }
    ,{
        path:'/details/:id',
        element: <PrivateRoute><FacilityDetail/></PrivateRoute> 
    }
    ,{
        path:'/booking/:id',
        element:<FacilityBooking/>
    }
    ,{
        path:'/contac',
        element:<Contact/>
    }
    ,{
        path:'/AboutUs',
        element:<AboutUs/>
    }
    ,{
        path:'*',
        element:<NotFound/>
    }

    ]
},

    {
        path:'dashboard',
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children:[
        
     {
        path:'myprofile',
        element:<Myprofile/>
     },
     {
        path:'/dashboard/addFacility',
        element:<AddFacility/>
     },
     {
        path:'/dashboard/AllFacility',
        element:<DeleteFacility/>
     },
     {
        path:'/dashboard/updatedfac/:id',
        element:<AdminRoute><UpdateFacility/></AdminRoute>
     },
     {
        path:'makeadmin',
        element:<AdminRoute> <MakeAdmin/></AdminRoute>
     },
     {
        path:'allBooking',
        element:<AdminRoute> <AllBooking/></AdminRoute>
     },
     {
        path:'mybooking',
        element:<PrivateRoute> <MyBooking/></PrivateRoute>
     }
       
          
     
        ]
    }
        
])