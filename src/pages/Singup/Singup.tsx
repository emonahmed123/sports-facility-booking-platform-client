/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignUPMutation } from "../../redux/api/authApi/authApi";
import Swal from "sweetalert2";
import { getErrorMessage } from "@/utils/hookErrorHandle";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { useState } from "react";
const Singup = () => {
  const [signUp, { isLoading }] = useSignUPMutation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    try {
      const allData = {
        name: data?.name,
        password: data?.password,
        email: data?.email,
        role: "user",
        address: data?.address,
        phone: data?.phone,
      };

      const res = await signUp(allData).unwrap()
      console.log(res)

      if (res) {
        const Success = res.message;

        Swal.fire({
          icon: "success",
          title: "success",
          text: `${Success}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      }
    }
    catch (error: any) {
      console.log(
        error
      )

      Swal.fire({
        icon: "error",
        title: "SingUp Failed",
        text: `${error?.data?.
          errorSources[0].message || 'Internal Servre Error'}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
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
              Sign <span className="text-[#3d85ff]"> Up</span>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-bold">
                    Name<sup>*</sup>
                  </span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: " Name is Required",
                    },
                  })}
                  type="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {getErrorMessage(errors, "name") && (
                    <span className="label-text-alt text-red-500">
                      {getErrorMessage(errors, "name")}
                    </span>
                  )}
                </label>
              </div>
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
                  {getErrorMessage(errors, "email") && (
                    <span className="label-text-alt text-red-500">
                      {getErrorMessage(errors, "email")}
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
                  type={passwordVisible ? "text" : "password"}
                  placeholder="You password"
                  className="input input-bordered w-full max-w-xs"
                />
                <span
                  className=" text-gray-400 absolute right-10 bottom-2 px-2 flex items-center cursor-pointer   h-full"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <RxEyeOpen className="w-5 h-5  " />
                  ) : (
                    <RxEyeClosed className="w-5 h-5 " />
                  )}
                </span>

                <label className="label">
                  {getErrorMessage(errors, "password") && (
                    <span className="label-text-alt text-red-500">
                      {getErrorMessage(errors, "password")}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-bold">
                    Phone <sup>*</sup>
                  </span>
                </label>
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "phone Number is Required",
                    },

                    minLength: {
                      value: 11,
                      message: "Must be 11 characters or longer",
                    },
                  })}
                  type="phone"
                  placeholder="You phone Number"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {getErrorMessage(errors, "phone") && (
                    <span className="label-text-alt text-red-500">
                      {getErrorMessage(errors, "phone")}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-bold">
                    {" "}
                    Address <sup>*</sup>
                  </span>
                </label>
                <input
                  {...register("address", {
                    required: {
                      value: true,
                      message: " Address is Required",
                    },
                  })}
                  type="address"
                  placeholder="You address"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {getErrorMessage(errors, "address") && (
                    <span className="label-text-alt text-red-500">
                      {getErrorMessage(errors, "address")}
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
                  value="SIGN UP"
                />
              )}
            </form>
            <p>
              {" "}
              <small>
                Already have an account ?{" "}
                <Link className="text-primary" to="/login">
                  Please Login
                </Link>{" "}
              </small>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Singup;
