"use client";

import CollapsedMenu from "@/components/layout/CollapsedMenu";
import Dot from "@/components/Dot";
import QuizItem from "@/components/QuizItem";
import SideMenu from "@/components/layout/SideMenu";
import TabMenu from "@/components/TabMenu";
import {
  Button,
  Circle,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
} from "@chakra-ui/react";


type ItemType = {
  attempted: boolean;
  type: string;
};

// for demo
let items: any = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2) {
    items.push({
      type: "math",
      attempted: false,
    });
  } else {
    items.push({
      type: "science",
      attempted: true,
    });
  }
}
// for demo

const MyQuizzes = () => {
  return (
    <>
      <TabMenu />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        templateRows={{
          base: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap="1.25rem"
        justifyItems="center"
      >
        {items.map((item: ItemType, index: number) => {
          return (
            <GridItem key={index}>
              <QuizItem type={item.type} attempted={item.attempted} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default MyQuizzes;
