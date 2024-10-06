/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLoginMutation } from "../../redux/api/authApi/authApi";
import { useAppDispatch } from "../../redux/hook";
import { setToken, setUser } from "../../redux/features/userSlice";
import { jwtDecode } from "jwt-decode";
import { getErrorMessage } from "@/utils/hookErrorHandle";
import { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await login(data).unwrap();

      if (res.data) {
        const accessToken = res.data.accessToken;
        // console.log(res.data)
        const user = jwtDecode(accessToken);
        dispatch(setUser(user));
        dispatch(setToken(accessToken));
        const Success = res.message;

        Swal.fire({
          icon: "success",
          title: "success",
          text: `${Success}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    } catch (error: any) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: `${error?.data?.message || "Intarnal Server Error"}`,
        text: `Login Failed`,
      });
    }
  };

  const handleCredentials = (type: string) => {
    const newCredentials =
      type === "user"
        ? { email: "emonsss@gmail.com", password: "123456" }
        : { email: "emons@gmail.com", password: "123456" };

    setCredentials(newCredentials);
    setValue("email", newCredentials.email);
    setValue("password", newCredentials.password);
  };
  return (
    <section className="py-[20px] ">
      <div className=" max-w-[1170px] mx-auto px-2 xl:px-0">
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
                    {getErrorMessage(errors, "email") && (
                      <span className="label-text-alt text-red-500">
                        {getErrorMessage(errors, "email")}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs relative">
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
                    defaultValue={credentials.password}
                    type={passwordVisible ? "text" : "password"}
                    placeholder="You password"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <span
                    className=" text-gray-400 absolute right-0 top-3 px-2 flex items-center cursor-pointer   h-full"
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

                <div className="space-x-3">
                  <p className="text-sm text-center my-2 text-warning">
                    click on the any Link to fill the inputs
                  </p>
                  <button
                    className="btn btn-link"
                    onClick={() => handleCredentials("admin")}
                  >
                    Admin
                  </button>
                  <button
                    className="btn btn-link"
                    onClick={() => handleCredentials("user")}
                  >
                    User
                  </button>
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
                  Create a New Account ?{" "}
                  <Link className="text-primary" to="/singup">
                    Please Singup
                  </Link>{" "}
                </small>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
