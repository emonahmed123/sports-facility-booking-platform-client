import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

export const store =configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
})



export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store