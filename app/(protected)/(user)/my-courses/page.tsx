"use client";

import CourseUserItem from "@/components/CourseUserItem";
import { Grid, GridItem } from "@chakra-ui/react";
import { trainings } from "./data";
import { useCoursesQuery } from "@/redux/features/course/courseApiSlice";

const MyCourses = () => {
  const { data: courses } = useCoursesQuery("/");

  console.log({ courses });

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        templateRows="repeat(3, 1fr)"
        gap={5}
      >
        {courses?.data?.map((course: any, index: number) => {
          return (
            <GridItem key={index}>
              <CourseUserItem course={course} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default MyCourses;
