"use client";
import * as React from "react";
import SearchMenu from "@/components/SearchMenu";
import Footer from "@/components/layout/Footer";
import { Container, Grid, GridItem, Text, useTheme } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface CoursesPublicLayoutProps {
  children: React.ReactNode;
}

const CoursesPublicLayout: React.FC<CoursesPublicLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const { slug } = useParams();
  const router = useRouter();
  
  React.useEffect(() => {
    if(slug === undefined) {
        router.push("/courses/early-childhood");
    }
  }, [slug])

  return (
    <> 
      <Container
        maxW={{
          base: "container.sm",
          md: "container.md",
          lg: "container.xl",
          xl: "container.xl",
        }}
        mb={{ base: 4, lg: 8, xl: 16 }}
      >
        <Grid templateColumns="repeat(5, 1fr)" mb={8}>
          <GridItem>
            <Text
              fontWeight="600"
              color="theme.purple"
              fontSize="xs"
              fontFamily="Open Sans"
              px={4}
              pb={1}
              align="center"
              borderBottom={
                slug === "early-childhood"
                  ? `2px solid ${theme.colors.theme.purple}`
                  : `2px solid ${theme.colors.theme.grey}`
              }
            >
              <Link href="early-childhood">Early Childhood (ages 3-5)</Link>
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontWeight="600"
              color="theme.purple"
              fontSize="xs"
              fontFamily="Open Sans"
              px={4}
              pb={1}
              align="center"
              borderBottom={
                slug === "elementary-school"
                  ? `2px solid ${theme.colors.theme.purple}`
                  : `2px solid ${theme.colors.theme.grey}`
              }
            >
              <Link href="elementary-school">
                Elementary School (Grades 1-6)
              </Link>
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontWeight="600"
              color="theme.purple"
              fontSize="xs"
              fontFamily="Open Sans"
              px={4}
              pb={1}
              align="center"
              borderBottom={
                slug === "middle-school"
                  ? `2px solid ${theme.colors.theme.purple}`
                  : `2px solid ${theme.colors.theme.grey}`
              }
            >
              <Link href="middle-school">Middle School (Grades 7-9)</Link>
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontWeight="600"
              color="theme.purple"
              fontSize="xs"
              fontFamily="Open Sans"
              px={4}
              pb={1}
              align="center"
              borderBottom={
                slug === "upper-school"
                  ? `2px solid ${theme.colors.theme.purple}`
                  : `2px solid ${theme.colors.theme.grey}`
              }
            >
              <Link href="upper-school">Upper School (Grades 10-12)</Link>
            </Text>
          </GridItem>
          <GridItem>
            <Text
              fontWeight="600"
              color="theme.purple"
              fontSize="xs"
              fontFamily="Open Sans"
              px={4}
              pb={1}
              align="center"
              borderBottom={
                slug === "the-reading-tree"
                  ? `2px solid ${theme.colors.theme.purple}`
                  : `2px solid ${theme.colors.theme.grey}`
              }
            >
              <Link href="the-reading-tree">The Reading Tree (all ages)</Link>
            </Text>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap="6.875rem">
          {children}
        </Grid>
      </Container> 
    </>
  );
};

export default CoursesPublicLayout;
