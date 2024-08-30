/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMAkeAdminMutation } from "@/redux/api/authApi/authApi";

import { useForm } from "react-hook-form";

import Swal from "sweetalert2";

const MakeAdmin = () => {
  const [makeAdmin, { isLoading }] = useMAkeAdminMutation();

  const {
    register,

    handleSubmit,
    reset,
  } = useForm();
  // const typedErrors = errors as FieldErrors<FieldValues>;
  const onSubmit = async (data: any) => {
    const allData = {
      name: data?.name,
      password: data?.password,
      email: data?.email,
      role: "admin",
      address: data?.address,
      phone: data?.phone,
    };

    const res = await makeAdmin(allData);

    if (res.data) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "Admin Create successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }

    if (res.error) {


      Swal.fire({
        icon: "error",
        title: "Opps",
        text: "Something worng Admin Not create",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section className="py-[20px] ">
      <div className="flex min-h-min	 justify-center items-center font-Poppis">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">
              Make <span className="text-[#3d85ff]"> Admin</span>
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
                {/* <label className="label">
                  {typedErrors.name?.type === "required" && TypeError.name?.message && (
                    <span className="label-text-alt text-red-500">
                      {TypeError.name.message}
                    </span>
                  )}
                </label>  */}
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
                {/* <label className="label">
                  {typedErrors.email.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {typedErrors.email.message}
                    </span>
                  )}
                  {typedErrors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {typedErrors?.email.message}
                    </span>
                  )}
                </label> */}
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
                {/* <label className="label">
                  {typedErrors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {typedErrors?.password.message}
                    </span>
                  )}
                  {typedErrors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {typedErrors?.password.message}
                    </span>
                  )}
                </label> */}
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
                      message: "Must be 6 characters or longer",
                    },
                  })}
                  type="phone"
                  placeholder="You phone Number"
                  className="input input-bordered w-full max-w-xs"
                />
                {/* <label className="label">
                  {TypeError.phone?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {typedErrors?.phone.message}
                    </span>
                  )}
                  {errors.number?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {typedErrors?.phone.message}
                    </span>
                  )}
                </label> */}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-bold">
                    {" "}
                    Address <sup>*</sup>
                  </span>
                </label>
                {/* <input
                  {...register("address", {
                    required: {
                      value: true,
                      message: " Address is Required",
                    },
                  })}
                  type="phone"
                  placeholder="You phone Number"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {typedErrors.address?.type === "required" && typedErrors.address.message && (
                    <span className="label-text-alt text-red-500">
                      {typedErrors.address.message}
                    </span>
                  )}
                </label> */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
