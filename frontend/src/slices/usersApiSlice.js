import { apiSlice } from "./apiSlice";
import {
  USERS_ENDPOINT,
  LOGIN_ENDPOINT,
  REGISTER_ENDPOINT,
  LOGOUT_ENDPOINT,
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
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_ENDPOINT}${LOGOUT_ENDPOINT}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = usersApiSlice;
