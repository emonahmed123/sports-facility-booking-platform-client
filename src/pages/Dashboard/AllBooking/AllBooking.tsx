/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/Loading";
import { useGetAllBookingQuery } from "@/redux/api/bookingApi/bookingApi";

const AllBooking = () => {
  const { data: Booking, isLoading } = useGetAllBookingQuery(undefined);

  //    console.log(Booking)
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="max-w-[1240px] px-5 mx-auto font-mono mb-5">
        <h2 className="text-[40px] leading-[50px] text-center">All Bookings</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Facility Name</th>
                <th>Price</th>
                <th>Staus</th>
                <th>Date</th>
                <th>StartTime - EndTime</th>
              </tr>
            </thead>
            <tbody>
              {Booking?.data.map((item: any, index: any) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td>{item?.facility?.name}</td>
                  <td className="">${item?.payableAmount}</td>
                  <td>
                    <span className="text-success py-2 px-2 rounded-full text-white">
                      {item?.isBooked}
                    </span>
                  </td>
                  <td>{item?.date}</td>
                  <td>
                    {item?.startTime}-{item?.endTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllBooking;
