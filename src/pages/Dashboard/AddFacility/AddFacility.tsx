/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePostSingleFacilityMutation } from "@/redux/api/facilitesApi/facilitesApi";
import { getErrorMessage } from "@/utils/hookErrorHandle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddFacility = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [facility, { isError }] = usePostSingleFacilityMutation();
  const onSubmit = async (data: any) => {
    // console.log(data);
    const pureData = {
      name: data?.name,
      description: data?.description,
      pricePerHour: Number(data?.price),
      location: data?.location,
      image: data?.image,
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
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something is wrong",
      showConfirmButton: false,
      timer: 1500,
    });

  }


  return (
    <div className="  py-5 flex justify-center items-center  flex-col">



      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className=" text-[30px] leading-[40px] lg:text-[40px] lg:leading-[50px] text-center mb-5">Add a New Facility</h1>
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
            placeholder=" Name"
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
            <span className="label-text text-bold">Description</span>
          </label>
          <input
            {...register("description", {
              required: {
                value: true,
                message: " Description is Required",
              },
              minLength: {
                value: 15,
                message: 'Must be 15 chareter '
              }
            })}
            type=""
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            {getErrorMessage(errors, "description") && (
              <span className="label-text-alt text-red-500">
                {getErrorMessage(errors, "description")}
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
            {getErrorMessage(errors, "Price") && (
              <span className="label-text-alt text-red-500">
                {getErrorMessage(errors, "Price")}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-bold">location</span>
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
            {getErrorMessage(errors, "location") && (
              <span className="label-text-alt text-red-500">
                {getErrorMessage(errors, "location")}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-bold">PhotoUrl</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: false,
                message: "image is Required",
              },
            })}
            type="url"
            placeholder="image"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {getErrorMessage(errors, "image") && (
              <span className="label-text-alt text-red-500">
                {getErrorMessage(errors, "image")}
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
}

export default AddFacility;
