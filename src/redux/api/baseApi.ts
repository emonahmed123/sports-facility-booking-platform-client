import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",

    prepareHeaders: (headers) => {
      const persistedState = localStorage.getItem("persist:user");
      if (persistedState) {
        const parsedState = JSON.parse(persistedState);
        // console.log(parsedState);
        const token = parsedState.token && JSON.parse(parsedState.token);
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        // console.log(token);
      }
      return headers;
    },
  }),
  tagTypes: ["fac", "book"],
  endpoints: () => ({}),
});
