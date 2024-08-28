import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useLoginMutation} from '../../redux/api/authApi/authApi';
import { useAppDispatch } from '../../redux/hook';
import { setToken, setUser } from '../../redux/features/userSlice';
import { jwtDecode } from "jwt-decode";


const Login = () => {
   
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();
   


    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      
 
  
   
   
    const onSubmit = async (data: any) => {
  
    
      const res = await login(data);
        
        
      if (res.data) {
        const {accessToken}=res?.data?.data
        console.log(accessToken)
        const user =jwtDecode(accessToken)
      
     dispatch(setUser(user))
        dispatch(setToken(accessToken));
        const Success = res?.data?.message;
    
        Swal.fire({
          icon: "success",
          title: "success",
          text: `${Success}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    
      if (res.error) {
        const ErrorMassage = res.error?.data?.errorSources[0].message || 'Server Dwon';
        console.log(ErrorMassage);
    
        Swal.fire({
          icon: "error",
          title: "Opps",
          text: `${ErrorMassage}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }


     
  };

  return (
    <section className="py-[20px] ">
    <p className="pt-5 pl-5 font-Poppis">
      {" "}
      <small>
        If you want?{" "}
        <Link className="text-primary" to="/">
          Back Home
        </Link>{" "}
      </small>{" "}
    </p>
    <div className="flex min-h-min	 justify-center items-center font-Poppis">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">
            Log <span className="text-[#3d85ff]"> In</span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
           
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-bold">
                  Email <sup>*</sup>
                </span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: " Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email ",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-bold">
                  Password <sup>*</sup>
                </span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: " Password   is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
                type="password"
                placeholder="You password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
           
         

            {isLoading ? (
              <button className=" btn w-full max-w-xs bg-[#3d85ff] text-[#ffff]">
                {" "}
                Loading{" "}
                <span className="loading loading-dots loading-xs"></span>{" "}
              </button>
            ) : (
              <input
                className=" btn w-full max-w-xs bg-[#3d85ff] text-[#ffff]"
                type="submit"
                value="Log In"
              />
            )}
          </form>
          <p>
            {" "}
            <small>
            Create a New  Account ?{" "}
              <Link className="text-primary" to="/singup">
                Please Singup
              </Link>{" "}
            </small>{" "}
          </p>
         
        </div>
      </div>
    </div>
  </section>
);
 
}
  

export default Login;