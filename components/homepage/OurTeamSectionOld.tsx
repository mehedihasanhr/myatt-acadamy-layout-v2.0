import {
  Box,
  Container,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
  useTheme,
} from "@chakra-ui/react";
import Link from "next/link";
import { lighten } from "polished";
import { PointerIcon } from "../ui/Icon";

export default function OurTeamSectionOld() {
  const { theme } = useTheme().colors;
  const lighterGreen = lighten(0.075, theme.mossGreen);
  return (
    <Box py="50px" id="our-teams" bg={lighterGreen}>
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
                color="white"
                fontFamily="var(--schoolbell)"
                fontWeight="500"
              >
                Our Team
              </Text>
            </Box>
            <Box
              as="div"
              bg="theme.yellow"
              borderRadius={13}
              py={5}
              px={{ base: 5, lg: 15 }}
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
                <ListItem>
                  <Link href="#background">Background: Dr. Tamara Myatt </Link>{" "}
                </ListItem>
                <ListItem>
                  <Link href="?modal=staff" scroll={false}>
                    Our Leadership Team
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="?modal=teachers&shift=early-childhood-ages-3-5"
                    scroll={false}
                  >
                    Teachers
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="?modal=staff" scroll={false}>
                    {" "}
                    Interns{" "}
                  </Link>
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
