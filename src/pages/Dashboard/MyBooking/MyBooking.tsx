import Loading from '@/components/Loading';
import { useGetmyBookingQuery } from '@/redux/api/bookingApi/bookingApi';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import DeleteFacility from '../DeleteFacility/DeleteFacility';
import Swal from 'sweetalert2';

const MyBooking = () => {
   const {data:MyBooking,isLoading}=useGetmyBookingQuery(undefined)
   
   console.log(MyBooking)
    
   if(isLoading){
    return <Loading/>
   }
   const handleDeleteItem = (item:any) => {
 
    
    Swal.fire({
      title: "Are you sure?",
      position: "top",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await DeleteFacility(item._id).unwrap(); 

     
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: `Delete ${item?.name}  successfully`
          });
        } catch (error) {
          console.error('Delete failed:', error?.error);

       
          Swal.fire({
            position: "top",
            icon: "error",
            title: `Failed to delete ${item.name}`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    });
  };

  
   
   return (
        <div>
            {
                MyBooking.data.length>0  ? <p className='text-center'>MY Booking</p> : 
                <p className='text-center'> Please Booking !</p>

            
            }



           
           <div>
               <div className="overflow-x-auto">
                   <table className="table w-full">
                  
                       <thead>
                           <tr>
                               <th>
                                   #
                               </th>
                              
                               <th>Facility Name</th>
                               <th>Price</th>
                            
                               <th>Date</th>
                               
                               <th>Start-End</th>
                               
                               <th>Delete</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               MyBooking?.data.map((item:any, index:any) => <tr key={item._id}>
                                
                                
                                   <td>
                                       {index + 1}
                                   </td>
                                   <td>
                                     {
                                     item?.facility.name
                                       }
                                   </td>
                                   <td>
                                   ${item.payableAmount
                                   }  
                                   </td>
                                   <td className="">  {item?.date}</td>
                                 
                                   <td className="">  {item?.startTime}-{item.endTime}</td>
                                 
                                 
                                   <td>
                                       <button
                                           onClick={() => handleDeleteItem(item)}
                                           className="btn btn-ghost btn-lg">
                                           <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                       </button>
                                   </td>
                               </tr>)
                           }
                       </tbody>


                   </table>
               </div>
           </div>
       </div>



    
    );
};

export default MyBooking;