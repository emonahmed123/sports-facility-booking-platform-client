/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/Loading";
import {
  useDeletedSingleFacilityMutation,
  useGetFacilityQuery,
} from "@/redux/api/facilitesApi/facilitesApi";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DeleteFacility = () => {
  const { data: facility, isLoading } = useGetFacilityQuery(undefined);

  const [deleteFacility] =
    useDeletedSingleFacilityMutation();

  const handleDeleteItem = (item: any) => {
    console.log(item);

    Swal.fire({
      title: "Are you sure?",
      position: "top",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteFacility(item._id).unwrap();

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: `Delete ${item?.name}  successfully`,
          });
        } catch (error) {
          console.error("Delete failed:", error);

          Swal.fire({
            position: "top",
            icon: "error",
            title: `Failed to delete ${item.name}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Facility Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {facility?.data.map((item: any, index: any) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="">${item.pricePerHour}</td>
                  <td>
                    <Link to={`/dashboard/updatedfac/${item._id}`}>
                      <button className="btn btn-ghost btn-lg bg-orange-500">
                        <FaEdit
                          className="text-white 
                                        "
                        ></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeleteFacility;
