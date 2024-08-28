import { usePostSingleFacilityMutation } from "@/redux/api/facilitesApi/facilitesApi";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddFacility = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [facility, { isSuccess, isError, error }] =
    usePostSingleFacilityMutation();
  const onSubmit = async (data: any) => {
    // console.log(data);
    const pureData = {
      name: data?.name,
      description: data?.description,
      pricePerHour: Number(data?.price),
      location: data?.location,
    };

    const res = await facility(pureData);
    // console.log(res);
    if (res.data) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: `${res?.data?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (isError) {
    if (error.data) {
//  console.log(error.data)

      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${error?.data?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (error.status) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${error?.status}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  return (
    <div className="mx-52">
      <form className="mx-45" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-[40px] leading-[50px]">Add a new Facility</h1>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-bold">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: " Name is Required",
              },
              maxLength: 20,
            })}
            type="name"
            placeholder=" Parts Name"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-bold">Description</span>
          </label>
          <input
            {...register("description", {
              required: {
                value: true,
                message: " Description is Required",
              },
            })}
            type=""
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-bold">Price</span>
          </label>
          <input
            {...register("price", {
              required: {
                value: true,
                message: " price is Required",
              },
            })}
            type="number"
            placeholder="price"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-bold">PhotoUrl</span>
          </label>
          <input
            {...register("location", {
              required: {
                value: false,
                message: "location is Required",
              },
            })}
            type="text"
            placeholder="location"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.location?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.location.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            className="btn bg-[#9260E2]  text-white w-full max-w-xs mt-5 "
            type="submit"
            value="ADD"
          />
        </div>
      </form>
    </div>
  );
};

export default AddFacility;
