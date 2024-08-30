import FacilityCard from "@/components/FacilityCard";
import Loading from "@/components/Loading";
import { useGetFacilityQuery } from "@/redux/api/facilitesApi/facilitesApi";
import Swal from "sweetalert2";

const FeaturedFacilities = () => {
  const {
    data: facility,
    isLoading,
    isError,
    error,
  } = useGetFacilityQuery(undefined);

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
    const ErrorMassage = error?.error?.data?.errorSources[0].message;
    // console.log(facility);
    return (
      <p className="text-[30px] text-center py-5 text-red-600">
        {" "}
        {ErrorMassage || "CONNECTION_REFUSED"}
      </p>
    );
  }

  return (
    <section className="py-[60px] md:pt-[40px] md:pb-[90px] ">
      <div className="  max-w-[1170px] mx-auto ">
        <h2 className="text-3xl my-10 font-bold text-center">
          {" "}
          OUR Featured <span className="text-[#3d85ff]">Facilities </span>{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 ">
          {facility?.data?.map((item) => (
            <FacilityCard item={item} key={item.index}></FacilityCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFacilities;
