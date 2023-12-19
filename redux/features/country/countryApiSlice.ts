import { apiSlice } from "@/redux/api/apiSlice";

const CountryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    countries: builder.query({
      query: () => ({
        url: "/country",
        method: "GET",
        headers: {
          credentials: "include",
          // change accept to application/json
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useCountriesQuery } = CountryApi;
export const { reducerPath } = CountryApi;
