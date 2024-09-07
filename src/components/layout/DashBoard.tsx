import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AiFillShopping, AiOutlinePlus, AiOutlineUserAdd, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdDashboard } from "react-icons/md";
import { useGetMeQuery } from "@/redux/api/authApi/authApi";
import Loading from "../Loading";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";



const DashBoard = () => {


  const { user } = useAppSelector((state: RootState) => state.user)





  const { pathname } = useLocation()



  const {
    data: me,
    isLoading,

  } = useGetMeQuery(undefined);

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <div className="drawer  lg:drawer-open  ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          <div className="w-full navbar bg-white ">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 font-bold text-xl">

              {
                pathname.includes("myprofile") && <h1>Dashboard</h1>
              }
              {
                pathname.includes("addFacility") && <h1>AddFacility</h1>
              }
              {
                pathname.includes("AllFacility") && <h1>AllFacility</h1>
              }

              {
                pathname.includes("ordercomfir") && <h1>Order</h1>
              }
              {
                pathname.includes("makeadmin") && <h1>Make Admin</h1>
              }
            </div>
            <div className="flex-none  lg:block">
              <ul className="menu menu-horizontal ">

                <li><p className='font-bold'>{me?.data.name}</p></li>

              </ul>
            </div>
          </div>
          <div className='px-2 xl:px-0'>



            <Outlet></Outlet>



          </div>



        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay "></label>

          <ul className="menu p-3   font-normal font-Poppis  bg-[#9260E2] min-h-screen">
            <div>
              <Link to="/">   <img className='w-24 mb-10 mx-5 mt-5' src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/ezytor/theme/N8lApmzhKXbK5HA7kTpU1702703250.svg" /></Link>

            </div>

            <li>  <Link to='/dashboard/myprofile'>
              <MdDashboard /><span className="text-[16px]">Dashboard</span></Link> </li>


            {
              user?.role === 'admin' ? '' : <>
                <li className='text-[#FFF] text-[20px] py-2' > <Link to="/dashboard/mybooking"> <AiOutlineShoppingCart />
                  <span className="text-[16px]">Mybooking</span>   </Link></li>
              </>
            }



            {
              user?.role === 'admin' && <>
                <li className='text-[#FFF] text-[20px] py-2' > <Link to='/dashboard/addFacility'>
                  <AiFillShopping /><span className="text-[16px]">Facility  Add</span></Link></li>
                <li className='text-[#FFF] text-[20px] py-2'><Link to='/dashboard/AllFacility'><AiOutlinePlus /> <span className="text-[16px]"> All Facility</span></Link>   </li>
                <li className='text-[#FFF] text-[20px] py-2'><Link to="/dashboard/makeadmin"><AiOutlineUserAdd /> <span className="text-[16px]">Make Admin</span>   </Link></li>

                <li className='text-[#FFF] text-[20px] py-2' > <Link to="/dashboard/allBooking"> <AiOutlineShoppingCart />
                  <span className="text-[16px]">All bookings </span>   </Link></li>
                <li className='text-[#FFF] text-[20px] py-2' > <Link to="/dashboard/mybooking"> <AiOutlineShoppingCart />
                  <span className="text-[16px]">mybooking</span>   </Link></li>

              </>
            }

          </ul>

        </div>
      </div>

    </div>



  );
};

export default DashBoard;