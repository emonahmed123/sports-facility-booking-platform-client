/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/Loading";
import { useGetFacilityQuery } from "@/redux/api/facilitesApi/facilitesApi";

const TopFaclicty = () => {
  const { data: facility, isLoading } = useGetFacilityQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }
  console.log(facility);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-5 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>

        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Location</p>
        </div>
      </div>

      {facility?.data.slice(0, 3).map((product: any, key: string) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-5 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={product.image} width={60} height={50} alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">
                {product.name}
              </p>
            </div>
          </div>

          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${product.pricePerHour}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopFaclicty;
