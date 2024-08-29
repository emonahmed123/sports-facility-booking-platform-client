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
    DeletedSingleFacility: builder.mutation({
      query: (params) => ({
        url: `/facility/${params}`,
        method: "DELETE",
      }),
      invalidatesTags: ["fac"],
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

export const { useGetAllBookingQuery, useGetmyBookingQuery } = bookingApi;
