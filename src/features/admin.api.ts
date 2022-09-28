import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategory } from '../interface/Admin.interfaces';

export const adminAPI = createApi({
  reducerPath: 'adminAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://devago-backend.herokuapp.com/',
  }),
  endpoints(builder) {
    return {
      getCategories: builder.query<ICategory[], number | void>({ 
        query() {
          return '/categories';
        }
      })
    };
  }
});

export const { useGetCategoriesQuery } = adminAPI;
