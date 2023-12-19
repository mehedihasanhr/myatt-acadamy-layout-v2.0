import {
  Box,
  Container,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import { PointerIcon } from "../ui/Icon";

export default function AcademicProgram() {
  return (
    <Box pt="100px" pb="50px" id="programs" bg="theme.sunYellow">
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(10, 1fr)" gap={{ base: 2, md: 5 }}>
          <GridItem
            colStart={{
              base: 2,
              md: 4,
            }}
            colSpan={{
              base: 8,
              md: 4,
            }}
          >
            <Box textAlign="center" mb={6}>
              <Text
                as="h1"
                fontSize={{
                  base: "2xl",
                  lg: "4xl",
                }}
                color="white"
              >
                Academic Program
              </Text>
            </Box>
            <Box
              as="div"
              bg="theme.yellow"
              borderRadius={13}
              py={5}
              px={{
                base: "20px",
                lg: "60px",
              }}
              position="relative"
            >
              <UnorderedList
                listStyleType="none"
                display="flex"
                flexDir="column"
                gap={{ base: 1, lg: 3 }}
                color="#222"
                letterSpacing={{ base: "1.3px", lg: "1.7px" }}
                fontSize={{ base: "13px", sm: "15px", md: "lg", lg: "xl" }}
                fontWeight="400"
              >
                <ListItem> Availability Status</ListItem>

                <ListItem>
                  <Link href="#school-section">
                    <Text
                      as="span"
                      _hover={{
                        textDecoration: "underline",
                      }}
                    >
                      School Sections
                    </Text>
                  </Link>
                  <UnorderedList pl={5}>
                    <ListItem>
                      <Link href="?school-tab=1#school-section">
                        <Text as="span">Early Childhood (ages 3-5)</Text>
                      </Link>
                      <UnorderedList listStyleType="disc" pl={5}>
                        <ListItem>Preschool</ListItem>
                        <ListItem>Kindergarten</ListItem>
                      </UnorderedList>
                    </ListItem>

                    <ListItem>
                      <Link href="?school-tab=2#school-section">
                        Elementary School (Grades 1-6)
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="?school-tab=3#school-section">
                        Middle School (Grades 7-9)
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="?school-tab=4#school-section">
                        High School (Grades 10-12)
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="?school-tab=5#school-section">
                        The Reading Tree (all ages)
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>

              <PointerIcon
                position="absolute"
                bottom={5}
                right="60px"
                fontSize="5xl"
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
