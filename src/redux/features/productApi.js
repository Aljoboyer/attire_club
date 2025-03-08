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

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/deleteprod/${id}`,
        method: 'DELETE',
      }),
    //   invalidatesTags: [''],
    }),

    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/updateProd/${data.id}`,
        method: 'PUT',
        body: data.requestBody
      }),
    //   invalidatesTags: [''],
    }),

    orderSubmit: builder.mutation({
      query: (data ) => ({
        url: '/ordersubmit',
        method: 'POST',
        body: data
      }),
    //   invalidatesTags: [''],
    }),

    getAllOrders: builder.query({
      query: (data ) => ({
        url: '/allOrders',
        method: 'GET',
      }),
    //   invalidatesTags: [''],
    }),

  }),
});

export const {
  useAddProductMutation,
  useGetAllProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useOrderSubmitMutation,
  useGetAllOrdersQuery
} = authApi;