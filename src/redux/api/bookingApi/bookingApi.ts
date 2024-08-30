import { baseApi } from "../baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooking: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["book"],
    }),

    getmyBooking: builder.query({
      query: () => ({
        url: `/bookings/user`,
        method: "GET",
      }),
      providesTags: ["book"],
    }),
    PostBooking: builder.mutation({
      query: (Info) => ({
        url: "/bookings",
        method: "POST",
        body: Info,
      }),
      invalidatesTags: ["fac"],
    }),
    DeletedBooking: builder.mutation({
      query: (params) => ({
        url: `/bookings/${params}`,
        method: "PUT",
      }),
      invalidatesTags: ["book"],
    }),
    availableSlots: builder.query({
      query: (data) => ({
        url: `/check-availability?date=${data.startDate}&facility=${data._id}`,
        method: "GET",
      }),
      providesTags: ["book"],
    }),
  }),
});

export const {
  useGetAllBookingQuery,
  useGetmyBookingQuery,
  useDeletedBookingMutation,
  useAvailableSlotsQuery,
  usePostBookingMutation,
} = bookingApi;
