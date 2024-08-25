import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Singup from "../pages/Singup/Singup"
export const router =createBrowserRouter([{


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
    ]}
    
])