// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),

    endpoints: (builder) => ({
      getAllProducts: builder.query({
        query: () => `/products`,
      }),
      getSingleProductById: builder.query({
        query: (id) => `/products/${id}`,
      }),
      addProduct:builder.mutation({
        query: (newProduct) => ({
          url: `/products/add`,
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct),
        }),

      })
    }),
  });


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

  export const { useGetAllProductsQuery, useGetSingleProductByIdQuery,useAddProductMutation } = productApi