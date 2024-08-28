import Loading from "@/components/Loading";
import { useGetMeQuery } from "@/redux/api/authApi/authApi";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Myprofile = () => {
 
   
   const navigate =useNavigate()
    const {
        data:me,
        isLoading,
        isError,error,
    
      } = useGetMeQuery(undefined);

      if(isError){
                
        const errors=error?.data?.message||'serverDwon'
            
          Swal.fire({
            icon: "error",
            title: "Opps",
            text: `${errors}`,
            showConfirmButton: false,
            timer: 1500,
          });

          navigate('/')

      }

      if(isLoading){
        return <Loading/>

      }
      const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
const day = String(today.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`

  const  User =me?.data
  
    return (
        <div className='max-w-[800px] mx-auto bg-[#9260E2] px-5 py-5 rounded-[20px] font-Poppis'>

                <p className="text-[16px] leading-[28px] text-[#FFF] mb-10">{formattedDate}</p>

        
        <h2 className="text-[40px] text-white font-semibold">WelCome Back ,{User?.name}</h2>
        <p className="text-[16px] leading-[26px] text-white">Always stay Update your Profile</p>

    </div>
    );
};

export default Myprofile;