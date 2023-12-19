"use client";

import * as React from "react";

// chakra components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
  useTheme,
} from "@chakra-ui/react";

// custom components
import CollapsedMenu from "@/components/layout/CollapsedMenu";
import Dot from "@/components/Dot";
import SideMenu from "@/components/layout/SideMenu";

// interfaces
interface UserPageLayoutProps {
  children: React.ReactNode;
}

import { BreadcrumbWrapper } from "@/components/ui/Breadcrumb";

// main component
const UserPageLayout: React.FC<UserPageLayoutProps> = ({ children }) => {
  const [id, setID] = React.useState(1); // [1, 2, 3]
  const theme = useTheme();

  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
      mb={{ base: 4, lg: 8, xl: 16 }}
    >
      <Grid
        templateColumns="repeat(10, 1fr)"
        columnGap={18}
        justifyItems={{ base: "center", sm: "center" }}
        alignItems="center"
      >
        <GridItem colSpan={{ base: 10 }}>
          <Flex direction="column" alignItems="center">
            <BreadcrumbWrapper>
              {({ paths, routeTo }) => (
                <Breadcrumb
                  separator=">"
                  mb={6}
                  fontFamily="Open Sans"
                  fontWeight="400"
                  fontSize="xs"
                  color="theme.grey-500"
                  spacing={3}
                >
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  {paths.map((path, index) => {
                    const to = `${routeTo(index)}`;
                    const isLast = index === paths.length - 1;
                    return (
                      <BreadcrumbItem key={index}>
                        <BreadcrumbLink
                          href={to}
                          isCurrentPage={isLast}
                          color={isLast ? "theme.purple" : "theme.grey-500"}
                          fontWeight={isLast ? "500" : "400"}
                        >
                          {path}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    );
                  })}
                </Breadcrumb>
              )}
            </BreadcrumbWrapper>
            <Text as="h4" mb={1} color="theme.purple">
              Lecture 3 : A Correct Sentence
            </Text>
            <Flex
              alignItems="center"
              gap={["8px", 2]}
              color="#8A8894"
              mb={3}
              fontSize={["sm", "md"]}
            >
              <Text className="b5">3 Total Hours</Text>
              <Dot />
              <Text className="b5">7 Lectures</Text>
              <Dot />
              <Text className="b5">Beginner</Text>
            </Flex>

            <Center>
              <Grid templateColumns="repeat(3, 1fr)" mb={8}>
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
                      id === 1
                        ? `2px solid ${theme.colors.theme.purple}`
                        : `2px solid ${theme.colors.theme.grey}`
                    }
                  >
                    <Link href="#">Most Visited</Link>
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
                      id === 2
                        ? `2px solid ${theme.colors.theme.purple}`
                        : `2px solid ${theme.colors.theme.grey}`
                    }
                  >
                    <Link href="#">Just Added</Link>
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
                      id === 3
                        ? `2px solid ${theme.colors.theme.purple}`
                        : `2px solid ${theme.colors.theme.grey}`
                    }
                  >
                    <Link href="#">Favourites</Link>
                  </Text>
                </GridItem>
              </Grid>
            </Center>
          </Flex>
        </GridItem>
        {/* side menu */}
        {/* <GridItem colSpan={{ base: 10, lg: 1 }}>
          <CollapsedMenu>
            <SideMenu />
          </CollapsedMenu>
        </GridItem> */}
        {/* side menu end */}
        {/* main */}
        <GridItem colSpan={10}>{children}</GridItem>
        {/* main end */}
      </Grid>
    </Container>
  );
};

// export
export default UserPageLayout;
