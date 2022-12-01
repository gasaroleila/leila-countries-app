import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v3.1',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getcountries: builder.query({
      query: () => '/all',
    }),

    getcountryByName: builder.query({
      query: (name) => `/name/${name}`,
    }),

    filtercountriesByRegion: builder.query({
      query: (region) => `/region/${region}`
    })
  }),

})
export const { useGetcountriesQuery, useGetcountryByNameQuery, useFiltercountriesByRegionQuery } = apiSlice