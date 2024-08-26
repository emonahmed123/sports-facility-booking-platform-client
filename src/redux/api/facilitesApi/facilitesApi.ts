import { baseApi } from "../baseApi";

const facilitesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacility: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFacilityQuery } = facilitesApi;
