/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetSingleFacilityQuery } from "@/redux/api/facilitesApi/facilitesApi";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const FacilityBooking = () => {
  const [startDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const { id } = useParams();
  const navigate = useNavigate();
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

  const typedErrors = errors as FieldErrors<FieldValues>;

  const onSubmit = async (data: any) => {
    const MutionData = { ...data, facility: _id };

    console.log(MutionData);
    const res = await booking(MutionData);

    if (res.data) {
      const Success = res?.data?.message;

      Swal.fire({
        icon: "success",
        title: "success",
        text: `${Success}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    if (res.error) {
      const ErrorMassage = res.error?.data?.message || "Server Dwon";

      Swal.fire({
        icon: "error",
        title: "Opps",
        text: `${ErrorMassage}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section className="py-[60px] md:py-[90px] ">
      <div className="max-w-[1170px] mx-auto px-5 md:px-0">
        <h1 className="text-[50px] leading-[60px] text-center font-mono">
          Facility Name {name}
        </h1>

        <div className="flex justify-center mt-5  gap-x-2">
          <DatePicker
            className="border py-3"
            selected={startDate ? new Date(startDate) : null}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd" // For display
          />
          <button
            onClick={() => console.log(availableSlots)}
            className=" bg-primary px-8 py-2 text-white rounded"
          >
            Cheak
          </button>
        </div>
        <div className="mt-10">
          {availableSlots.data.length > 0 ? (
            <ul className="flex justify-center">
              {availableSlots.data.map((slot) => (
                <li
                  className=" text-10px "
                  key={slot._id}
                >{`StartTime: ${slot.startTime} ,  EndTime: ${slot.endTime}`}</li>
              ))}
            </ul>
          ) : (
            <p>No slots available for the selected date and facility.</p>
          )}
        </div>

        <div className=" max-w-[300px] mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
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
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {typedErrors?.date?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {typedErrors?.date.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
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
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {typedErrors.startTime?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {typedErrors?.startTime.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-bold">
                  StartTime <sup>*</sup>
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
                placeholder="start password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {typedErrors.endTime?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {typedErrors?.endTime.message}
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
                value="Pay"
              />
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FacilityBooking;
