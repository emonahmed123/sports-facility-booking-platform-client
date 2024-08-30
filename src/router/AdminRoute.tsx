
import { useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux/store';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    const { user } = useAppSelector((state: RootState) => state.user);


    // if(loading){
    //     return <progress className="progress w-56"></progress>
    // }

    if (user.role === 'admin') {


        return children;
    }


    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}


export default AdminRoute;