import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../constants/apiConstants";

const baseQuery = fetchBaseQuery({ baseUrl: API_BASE_URL }); // note that "baseUrl" value is empty string because I set a proxy in package.json

// The following will be the parent to any other API slices (productsApiSlice.js, ordersApiSlice.js, ...etc)
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"], // add here other types if exists such as "Product", "Blog", "Post", "Order" ...etc.
  endpoints: (builder) => ({}),
});
