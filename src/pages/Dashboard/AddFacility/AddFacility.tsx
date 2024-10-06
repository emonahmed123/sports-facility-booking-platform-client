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
    let imageUrl = "";
    if (data.image && data.image[0]) {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      // const img_hosting_token = process.env.IMAGE_UPLOAD_TOKEN;
      // console.log(img_hosting_token);
      const imgBBResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=532c300e73413a775eeaee5314c89018`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!imgBBResponse.ok) {
        console.log(imgBBResponse);
        Swal.fire({
          title: "Image upload failed",
          text: "Please try again",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      const imgBBData = await imgBBResponse.json();
      imageUrl = imgBBData.data.url; // Get the image URL from ImgBB

      const pureData = {
        name: data?.name,
        description: data?.description,
        pricePerHour: Number(data?.price),
        location: data?.location,
        image: imageUrl,
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
    <div className="  py-5 ">
      <h1 className=" text-[30px] leading-[40px] lg:text-[40px] lg:leading-[50px] text-center mb-5">
        Add New Facility
      </h1>

      <div className="max-w-[1000px] mx-auto px-2 xl:px-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-2">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-bold">Name </span>
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
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />

              <label className="label">
                {getErrorMessage(errors, "name") && (
                  <span className="label-text-alt text-red-500">
                    {getErrorMessage(errors, "name")}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full">
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
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              <label className="label">
                {getErrorMessage(errors, "Price") && (
                  <span className="label-text-alt text-red-500">
                    {getErrorMessage(errors, "Price")}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full ">
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
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              <label className="label">
                {getErrorMessage(errors, "location") && (
                  <span className="label-text-alt text-red-500">
                    {getErrorMessage(errors, "location")}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full ">
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
                type="file"
                placeholder="image"
                className="w-full rounded-md border border-stroke p-2 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:px-2.5 file:py-1 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
              />
              <label className="label">
                {getErrorMessage(errors, "image") && (
                  <span className="label-text-alt text-red-500">
                    {getErrorMessage(errors, "image")}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-bold">Description</span>
              </label>
              <textarea
                {...register("description", {
                  required: {
                    value: true,
                    message: " Description is Required",
                  },
                  minLength: {
                    value: 15,
                    message: "Must be 15 chareter ",
                  },
                })}
                placeholder="Description"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primarys"
              />

              <label className="label">
                {getErrorMessage(errors, "description") && (
                  <span className="label-text-alt text-red-500">
                    {getErrorMessage(errors, "description")}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="form-control w-full  ">
            <input
              className="btn bg-[#9260E2]  text-white w-full max-w-xl mt-5  flex justify-center mx-auto"
              type="submit"
              value="ADD "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFacility;
