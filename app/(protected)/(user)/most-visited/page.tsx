"use client";

import CollapsedMenu from "@/components/layout/CollapsedMenu";
import CourseUserItem from "@/components/CourseUserItem";
import SideMenu from "@/components/layout/SideMenu";
import TabMenu from "@/components/TabMenu";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
  theme,
  useTheme,
} from "@chakra-ui/react";

// static data
import { trainings } from './data';

const MostVisited = () => {
  const theme = useTheme();

  // for demo
  let items: any = [];
  for (let i = 1; i <= 10; i++) {
    items.push(i);
  }
  // for demo

 
  //static data end
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
        {trainings.map((item: any, i: number) => {
          return (
            <GridItem key={i}>
              <CourseUserItem item={item} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default MostVisited;
