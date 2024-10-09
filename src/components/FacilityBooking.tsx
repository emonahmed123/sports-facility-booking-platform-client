/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetSingleFacilityQuery } from "@/redux/api/facilitesApi/facilitesApi";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import {
  useAvailableSlotsQuery,
  usePostBookingMutation,
} from "@/redux/api/bookingApi/bookingApi";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { getErrorMessage } from "@/utils/hookErrorHandle";

const FacilityBooking = () => {
  const [startDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const { id } = useParams();

  const { data: facility, isLoading, isError } = useGetSingleFacilityQuery(id);
  const [booking] = usePostBookingMutation();
  const { _id, name } = facility?.data || {};
  const queryData = {
    _id,
    startDate,
  };
  const { data: availableSlots, isLoading: avaialLoaidng } =
    useAvailableSlotsQuery(queryData, {
      skip: !id || !startDate,
    });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (isLoading || avaialLoaidng) {
    return <Loading />;
  }
  if (isError) {
    return <p className="text-[20px] py-10 text-center">Some thing worng</p>;
  }

  const handleDateChange = (date: any) => {
    setSelectedDate(format(date, "yyyy-MM-dd"));
  };

  // const typedErrors = errors as FieldErrors<FieldValues>;

  const onSubmit = async (data: any) => {
    const MutionData = { ...data, facility: _id };

    try {
      const res = await booking(MutionData).unwrap();

      // console.log(res)

      if (res.data?.result) {
        window.location.href = res?.data?.payment_url;
      } else {
        Swal.fire({
          icon: "error",
          title: "Opps",
          text: "Something Worng",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error: any) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Opps",
        text: `${error?.data?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section className="py-[60px] md:py-[70px] ">
      <div className="max-w-[1170px] px-5 xl:px-0 mx-auto">
        <p className="text-[14px] text-gray-400 ml-44 mb-3">
          {" "}
          Cheak available Time
        </p>

        <div className="max-w-[799px] mx-auto   shadow-sm border py-7 px-5">
          <h1 className="text-[40px] leading-[30px] text-center font-mono mb-2">
            {name}
          </h1>

          <div className="flex justify-center mt-5  gap-x-2 shrink-0">
            <DatePicker
              className="border py-2 px-2  w-[300px] md:w-[350px] rounded-[9px]"
              selected={startDate ? new Date(startDate) : null}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd" // For display
            />
            <div className="hidden md:block">
              <button
                onClick={() => console.log(availableSlots)}
                className=" bg-primary px-8 py-2  w-full text-white rounded-[9px]"
              >
                Cheak
              </button>
            </div>
          </div>
          <div className="mt-10 mb-10">
            {availableSlots?.data?.length > 0 ? (
              <div className="flex justify-center flex-col  items-center">
                {availableSlots?.data?.map(
                  (slot: {
                    _id: React.Key | null | undefined;
                    startTime: any;
                    endTime: any;
                  }) => (
                    <ul className=" text-10px " key={slot?._id}>
                      <li>
                        StartTime: {slot?.startTime} <span>---</span> EndTime:
                        {slot?.endTime}
                      </li>
                    </ul>
                  )
                )}
              </div>
            ) : (
              <p>No slots available for the selected date and facility.</p>
            )}
          </div>

          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-bold">
                      date <sup>*</sup>
                    </span>
                  </label>
                  <input
                    {...register("date", {
                      required: {
                        value: true,
                        message: " date is Required",
                      },
                    })}
                    value={startDate ? startDate : ""}
                    type="text"
                    readOnly
                    placeholder="Your Email"
                    className="input input-bordered w-full "
                  />
                  {/* <label className="label">
                {typedErrors?.date?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {typedErrors?.date.message}
                  </span>
                )}
              </label> */}
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-bold">
                      StartTime <sup>*</sup>
                    </span>
                  </label>
                  <input
                    {...register("startTime", {
                      required: {
                        value: true,
                        message: " startTime  is Required",
                      },
                    })}
                    type="time"
                    placeholder="start password"
                    className="input input-bordered w-full "
                  />
                  <label className="label">
                    {getErrorMessage(errors, "startTime") && (
                      <span className="label-text-alt text-red-500">
                        {getErrorMessage(errors, "startTime")}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-bold">
                      EndTime <sup>*</sup>
                    </span>
                  </label>
                  <input
                    {...register("endTime", {
                      required: {
                        value: true,
                        message: " endTime  is Required",
                      },
                    })}
                    type="time"
                    placeholder="end Time"
                    className="input input-bordered w-full "
                  />
                  <label className="label">
                    {getErrorMessage(errors, "endTime") && (
                      <span className="label-text-alt text-red-500">
                        {getErrorMessage(errors, "endTime")}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              {isLoading ? (
                <button className=" btn w-full max-w-xl bg-[#3d85ff] text-[#ffff] flex justify-center mx-auto">
                  {" "}
                  Loading{" "}
                  <span className="loading loading-dots loading-xs"></span>{" "}
                </button>
              ) : (
                <input
                  className=" btn w-full max-w-xl bg-[#3d85ff] text-[#ffff] flex justify-center mx-auto"
                  type="submit"
                  value="Pay"
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityBooking;
