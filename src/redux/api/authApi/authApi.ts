import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints ({
  endpoints: (builder) =>  ({
    signUP: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    })})})

  
    export const {useSignUPMutation} =authApi


    