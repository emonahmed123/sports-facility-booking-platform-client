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
    postSingleFacility: builder.mutation({
      query: (Info) => ({
        url: "/facility",
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
    UpdateSingleFacility: builder.mutation({
      query: (pureData) => ({
        url: `/facility/${pureData.id}`,
        method: "PUT",
        body: pureData.data,
      }),
      invalidatesTags: ["fac"],
    }),
  }),
});

export const {
  useGetAllBookingQuery,
  useGetmyBookingQuery,
  useDeletedBookingMutation,
} = bookingApi;
