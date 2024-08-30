/* eslint-disable @typescript-eslint/no-explicit-any */

import Loading from "@/components/Loading";
import {
  useGetSingleFacilityQuery,
  useUpdateSingleFacilityMutation,
} from "@/redux/api/facilitesApi/facilitesApi";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFacility = () => {
  const { id } = useParams();

  const { data: facility, isLoading } = useGetSingleFacilityQuery(id);

  const [UpdateFacility, { isError }] =
    useUpdateSingleFacilityMutation();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  if (isLoading) {
    return <Loading />;
  }
  const { _id, name } = facility.data;

  const onSubmit = async (data: any) => {
    console.log(data);
    const filteredData: any = {};
    for (const key in data) {
      if (data[key] !== undefined && data[key] !== "") {
        filteredData[key] =
          key === "pricePerHour" ? Number(data[key]) : data[key];
      }
    }
    console.log(filteredData);
    const pureData = {
      id: _id,
      data: filteredData,
    };
    console.log(pureData);

    const res = await UpdateFacility(pureData);
    console.log(res);
    if (res.data) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: `${res?.data?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });

      reset();
    }
  };

  if (isError) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something is worng Facility Not Update!",
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return (
    <div>
      <div className="mx-52">
        <h2></h2>

        <form className="mx-45" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-[40px] leading-[50px] my-5">
            Update {name} Facility
          </h1>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-bold">Name</span>
            </label>
            <input
              {...register("name")}
              type="name"
              placeholder=" Facility Name"
              className="input input-bordered w-full max-w-xs"
            />

            {/* <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label> */}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-bold">Description</span>
            </label>
            <input
              {...register("description")}
              type="text"
              placeholder="Description"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-bold">Price</span>
            </label>
            <input
              {...register("pricePerHour")}
              type="number"
              placeholder="pricePerHour"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-bold">location</span>
            </label>
            <input
              {...register("location")}
              type="text"
              placeholder="location"
              className="input input-bordered w-full max-w-xs"
            />
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
    </div>
  );
};

export default UpdateFacility;
