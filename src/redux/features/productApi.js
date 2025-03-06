import { api } from "../api";

const authApi = api.injectEndpoints({ 
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data ) => ({
        url: '/addproduct',
        method: 'POST',
        body: data
      }),
    //   invalidatesTags: [''],
    }),

    getAllProduct: builder.query({
      query: (data ) => ({
        url: '/allproduct',
        method: 'GET',
      }),
    //   invalidatesTags: [''],
    }),

  }),
});

export const {
  useAddProductMutation,
  useGetAllProductQuery
} = authApi;