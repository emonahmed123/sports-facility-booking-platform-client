import { baseApi } from "../baseApi";

const facilitesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacility: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
      providesTags: ["fac"],
    }),
    getSingleFacility: builder.query({
      query: (params) => ({
        url: `/facility/${params}`,
        method: "GET",
      }),
      providesTags: ["fac"],
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

export const {
  useGetFacilityQuery,
  useGetSingleFacilityQuery,
  usePostSingleFacilityMutation,
  useDeletedSingleFacilityMutation,
  useUpdateSingleFacilityMutation,
} = facilitesApi;
