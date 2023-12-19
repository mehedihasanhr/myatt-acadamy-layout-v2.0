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
import { PointerIcon } from "./components/ui/Icon";

export default function SpecialProjectSectionOld() {
  return (
    <Box py="50px" id="special-programs" bg="theme.seafoamGreen">
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
              <Text as="h1" color="black" fontFamily="var(--schoolbell)">
                Special Projects
              </Text>
            </Box>
            <Box
              as="div"
              bg="theme.yellow"
              borderRadius={13}
              py={5}
              px={{ base: 5, lg: "60px" }}
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
                  <Link href="#introduction-by-andy-wood">
                    Introduction by Andy Wood
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#the-global-story-writing-project">
                    The Global Story Writing Project
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#educational-documentaries-series">
                    Educational Documentaries Series
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#global-partnerships-project">
                    Global Partnerships Project
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#esl-english-language-training">
                    ESL - English Language Training
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
