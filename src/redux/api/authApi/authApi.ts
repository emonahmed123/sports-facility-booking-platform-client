import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUP: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
    mAkeAdmin: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/makeadmin",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),
    updateMe: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/update",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {
  useSignUPMutation,
  useLoginMutation,
  useGetMeQuery,
  useMAkeAdminMutation,
  /* `useUpdateMeMutation` is a hook generated by the `authApi` that allows you to make a mutation
  request to update user information. When you call `useUpdateMeMutation`, it will send a POST
  request to the "/auth/update" endpoint with the provided user information in the request body. */
  useUpdateMeMutation,
} = authApi;
