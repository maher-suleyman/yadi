import { apiSlice } from "./apiSlice";
import {
  LOGIN_ENDPOINT,
  REGISTER_ENDPOINT,
  USERS_ENDPOINT,
} from "../constants/apiConstants";

const USERS_URL = `${USERS_ENDPOINT}${LOGIN_ENDPOINT}`;

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: USERS_URL,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;
