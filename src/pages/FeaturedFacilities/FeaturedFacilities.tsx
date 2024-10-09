/* eslint-disable @typescript-eslint/no-explicit-any */
import FacilityCard from "@/components/FacilityCard";
import Loading from "@/components/Loading";
import { useGetFacilityQuery } from "@/redux/api/facilitesApi/facilitesApi";
import { Link } from "react-router-dom";

const FeaturedFacilities = () => {
  const { data: facility, isLoading, isError } = useGetFacilityQuery(undefined);

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

  return (
    <section id="nav" className="py-[60px]  lg:py-[90px] ">
      <div className="  max-w-[1170px] mx-auto px-5 xl:px-0">
        <h2 className="text-3xl mb-10 font-bold text-center">
          {" "}
          OUR Featured <span className="text-[#3d85ff]">Facilities </span>{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5   mb-10">
          {facility?.data?.slice(0, 4).map((item: any) => (
            <FacilityCard item={item} key={item.index}></FacilityCard>
          ))}
        </div>

        <button className=" flex justify-center items-center text-primary w-full ">
          <Link to="/filter"> View More </Link>
        </button>
      </div>
    </section>
  );
};

export default FeaturedFacilities;
