import { apiSlice } from "./apiSlice";
import {
  USERS_ENDPOINT,
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT,
  PROFILE_ENDPOINT,
} from "../constants/apiConstants";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_ENDPOINT}${LOGIN_ENDPOINT}`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_ENDPOINT}`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_ENDPOINT}${LOGOUT_ENDPOINT}`,
        method: "POST",
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_ENDPOINT}${PROFILE_ENDPOINT}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useUpdateUserMutation,
} = usersApiSlice;
