/* eslint-disable @typescript-eslint/no-explicit-any */
import FacilityCard from "@/components/FacilityCard";
import { useGetFacilityQuery } from "@/redux/api/facilitesApi/facilitesApi";
import Loading from "@/components/Loading";
import { useState } from "react";

const SimpleFiter = () => {
  const { data: facility, isLoading, isError } = useGetFacilityQuery(undefined);

  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return <Loading />;
  }
  // if(isSuccess){

  //   const succes=facility?.message

  //   Swal.fire({
  //     icon: "success",
  //     title: "success",
  //     text: `${succes}`,
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });

  // }

  if (isError) {
    // const ErrorMassage = error?.error?.data?.errorSources[0].message;
    // console.log(facility);

    return (
      <p className="text-[30px] text-center py-5 text-red-600">
        Something worng!
      </p>
    );
  }
  const filterFacilites = facility?.data.filter(
    (facility: any) =>
      facility.isDeleted === false &&
      facility?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section id="nav" className="py-[60px] md:pt-[40px] md:pb-[90px] ">
      <div className="  max-w-[1170px] mx-auto px-5 xl:px-0">
        <h2 className="text-3xl mb-10 font-bold text-center">
          {" "}
          Our All <span className="text-[#3d85ff]">Facilities </span>{" "}
        </h2>

        <div className="max-w-[600px] mx-auto mb-10">
          <input
            value={searchTerm}
            type="search"
            placeholder=" search Name"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5   ">
          {filterFacilites?.map((item: any) => (
            <FacilityCard item={item} key={item.index}></FacilityCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleFiter;
