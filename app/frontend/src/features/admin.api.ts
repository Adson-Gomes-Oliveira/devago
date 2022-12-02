import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ICategory,
  IProject,
  IGetProject
} from '../interface/Admin.interfaces';

export const adminAPI = createApi({
  reducerPath: 'adminAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://devago-backend.herokuapp.com',
  }),
  endpoints(builder) {
    return {
      getProjects: builder.query<IGetProject[], string | void>({
        query() {
          return '/projects/categories?includes=true';
        }
      }),
      getCategories: builder.query<ICategory[], number | void>({ 
        query() {
          return '/categories';
        }
      }),
      postProject: builder.mutation<IProject, Omit<IProject, 'id'>>({
        query: (project) => ({
          url: '/projects',
          method: 'POST',
          body: project,
        }),
      }), 
    };
  }
});

export const {
  useGetCategoriesQuery,
  usePostProjectMutation,
  useGetProjectsQuery,
} = adminAPI;
