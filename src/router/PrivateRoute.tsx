import { Navigate, useLocation } from "react-router";

import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hook";
import { ReactNode } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  const { user } = useAppSelector((state: RootState) => state.user);

  if (user.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

  return children;
};

export default PrivateRoute;
