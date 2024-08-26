import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Singup from "../pages/Singup/Singup"
import Login from "../pages/Login/Login";
import PrivateRoute from './PrivateRoute'
import FacilityDetail from "@/components/FacilityDetail";
export const router =createBrowserRouter([{

    
    path:'/',
    element:<App/>,
    children:[
        {
        index:true,
        element:<PrivateRoute><Home/></PrivateRoute>

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
        element:<FacilityDetail/>
    }

    ]}
    
])