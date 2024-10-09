/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
import { logout } from "../redux/features/userSlice";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Swal from "sweetalert2";
const navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: `Log out successfully`,
    });
  };

  return (
    <nav className="bg-[#FFFFFF]   border-b ">
      <div className="max-w-[1170px] mx-auto flex items-center font-medium justify-around ">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img
            src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/ezytor/theme/N8lApmzhKXbK5HA7kTpU1702703250.svg"
            alt="logo"
            className="md:cursor-pointer h-9"
          />
          <div
            className="text-3xl md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoCloseOutline /> : <CiMenuFries />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-4 lg:gap-8 font-">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <li>
            <Link to="/contac" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>

          {token && user.role === "admin" ? (
            <Link to="/dashboard/overview" className="py-7 px-3 inline-block">
              Dashboard
            </Link>
          ) : (
            ""
          )}
          {token && user.role === "user" ? (
            <Link to="/dashboard/myprofile" className="py-7 px-3 inline-block">
              Dashboard
            </Link>
          ) : (
            ""
          )}

          {/* <NavLinks /> */}
        </ul>
        <div className="md:flex gap-x-2 hidden ">
          {token ? (
            <>
              <button
                onClick={handleLogout}
                className=" bg-[rgb(61,133,255)] text-white  px-6 py-2 rounded-full"
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              {" "}
              <Link to="/login">
                <button className="bg-[rgb(61,133,255)] text-white  px-6 py-2 rounded-full">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
        {/* Mobile nav */}
        <ul
          className={`
      md:hidden bg-white fixed  z-[99] w-[300px] top-0 overflow-y-auto bottom-0 pt-5 pl-4
      duration-500 ${open ? "left-0" : "left-[-100%] "}
      `}
        >
          <img
            src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/ezytor/theme/N8lApmzhKXbK5HA7kTpU1702703250.svg"
            alt="logo"
            className="md:cursor-pointer h-9"
          />
          <li>
            <Link to="/" className="pt-6 pb-3 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/contac" className="py-3 px-3 inline-block">
              Contact Us
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/AboutUs" className="py-3 px-3 inline-block">
              About us
            </Link>
          </li>
          <li>
            {token ? (
              <Link
                to="/dashboard/myprofile"
                className="py-7 px-3 inline-block"
              >
                Dashboard
              </Link>
            ) : (
              ""
            )}
          </li>
          {/* <NavLinks /> */}
          <div className="py-3">
            {token ? (
              <>
                <button
                  onClick={handleLogout}
                  className=" bg-[rgb(61,133,255)] text-white  px-6 py-2 rounded-full"
                >
                  LogOut
                </button>
              </>
            ) : (
              <>
                {" "}
                <Link to="/login">
                  <button className="bg-[rgb(61,133,255)] text-white  px-6 py-2 rounded-full">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
