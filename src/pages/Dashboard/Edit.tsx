/* eslint-disable @typescript-eslint/no-explicit-any */

import { useUpdateMeMutation } from "@/redux/api/authApi/authApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {
  const [UpdateMe, { isError }] = useUpdateMeMutation();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

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
    }
    data.image = imageUrl || "";

    const res = await UpdateMe(data);
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
      navigate("/dashboard/myprofile");
    }

    if (isError) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something is worng profile Not Update!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="py-[70px]">
      <h2 className="text-black text-[30px] mb-5 text-center">
        Update your profile
      </h2>
      <div className="max-w-[1000px] mx-auto px-2 xl:px-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-7">
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

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-bold">location</span>
              </label>
              <input
                {...register("phone")}
                type="number"
                placeholder="phone"
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
                <span className="label-text text-bold">Address</span>
              </label>
              <input
                {...register("address")}
                placeholder="address"
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
    </div>
  );
};

export default Edit;
