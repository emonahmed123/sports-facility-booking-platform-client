import { baseApi } from "../baseApi";

const facilitesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacility: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
    }),
    getSingleFacility: builder.query({
      query: (params) => {
        console.log("insed", params);
        return { url: `/facility/${params}`, method: "GET" };
      },
    }),
    postSingleFacility: builder.mutation({
      query: (Info) => ({
        url: "/facility",
        method: "POST",
        body: Info,
      }),
    }),
    DeletedSingleFacility: builder.mutation({
      query: (params) => ({
        url: `/facility/${params}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetFacilityQuery,
  useGetSingleFacilityQuery,
  usePostSingleFacilityMutation,
  useDeletedSingleFacilityMutation,
} = facilitesApi;
