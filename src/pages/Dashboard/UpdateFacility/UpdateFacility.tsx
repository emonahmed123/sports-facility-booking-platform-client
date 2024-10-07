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

  const [UpdateFacility, { isError }] = useUpdateSingleFacilityMutation();

  const { register, handleSubmit, reset } = useForm();

  if (isLoading) {
    return <Loading />;
  }
  const { _id, name } = facility.data;

  const onSubmit = async (data: any) => {
    console.log(data);

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

      data.image = imageUrl;

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
    }

    if (isError) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something is worng Facility Not Update!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <div className="max-w-[1000px] mx-auto px-2 xl:px-0">
        <h1 className="text-[30px] leading-[40px] text-center">
          Update {name}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-2">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-bold">Name </span>
              </label>
              <input
                {...register("name")}
                type="name"
                placeholder=" Name"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-bold">Price</span>
              </label>
              <input
                {...register("price")}
                type="number"
                placeholder="price"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-bold">location</span>
              </label>
              <input
                {...register("location")}
                type="text"
                placeholder="location"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-bold">PhotoUrl</span>
              </label>
              <input
                {...register("image")}
                type="file"
                placeholder="image"
                className="w-full rounded-md border border-stroke p-2 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:px-2.5 file:py-1 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-bold">Description</span>
              </label>
              <textarea
                {...register("description")}
                placeholder="Description"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primarys"
              />
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
    </>
  );
};

export default UpdateFacility;
