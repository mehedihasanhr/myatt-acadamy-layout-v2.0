import { apiSlice } from "@/redux/api/apiSlice";

const CourseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    courses: builder.query({
      query: () => ({
        url: "/courses",
        method: "GET",
        headers: {
          credentials: "include",
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      }),
    }),

    // get single course 
    course: builder.query({
      query: (query) => ({
        url: `/courses${query}`,
        method: "GET",
        headers: {
          credentials: "include",
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      }),
    }),

    // get lecture details
    lecture: builder.query({
      query: (query) => ({
        url: `course/lesson/video_player${query}`,
        method: "GET",
        headers: {
          credentials: "include",
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      }),
    }),

    grades: builder.query({
      query: () => ({
        url: "/grades",
        method: "GET",
        headers: {
          credentials: "include",
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      }),
    }),
    order: builder.mutation({
      query: (credentials) => ({
        url: "/paypal",
        method: "POST",
        body: credentials,
        headers: {
          credentials: "include",
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      }),
    }),
  }),
});

export const {
  useCoursesQuery,
  useCourseQuery,
  useGradesQuery,
  useLectureQuery,
  useOrderMutation,
} = CourseApi;
export const { reducerPath } = CourseApi;
