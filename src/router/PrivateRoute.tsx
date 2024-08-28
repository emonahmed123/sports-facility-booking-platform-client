import { Navigate, useLocation } from "react-router";

import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hook";
import { ReactNode } from "react";


  

const PrivateRoute = ( {children}) => {
    const location = useLocation();
    const { user } = useAppSelector((state:RootState) => state.user);
    console.log(user)
    
    // if(loading){
    //     return <progress className="progress w-56"></progress>
    // }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}}replace></Navigate>
};

export default PrivateRoute;