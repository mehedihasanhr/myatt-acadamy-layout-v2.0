import { FakeButton } from "@/components/FakeButton";
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const ReadingTreeSection = () => {
  return (
    <Box mx="auto">
      <Container maxW="container.xl">
        <Center>
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={{
              base: 5,
              md: 10,
            }}
          >
            <GridItem
              colSpan={{
                base: 12,
                md: 10,
                lg: 6,
                xl: 7,
              }}
            >
              <Text as="h2" mb={5}>
                The Reading Tree (all ages)
              </Text>
              <Text as="p" className="b3" fontSize="18px">
                {
                  "Ah, the magic of reading! At the Academy, we offer not only a reading program but a full-fledged reading section called The Reading Tree. This division is devoted to literacy and is where readers can find skill-specific stories and practice exercises. As well, stories are an integral part of our language arts curriculum for kindergarten through sixth grade. At each grade level, students will have the opportunity to read stories, learn new vocabulary, and respond to story questions that not only build their comprehension skills but also reinforce select academic skills for the particular unit they are working on. Please check out The Reading Tree and help your child become a stronger reader. For even more exciting reading program developments, join us at Yak's Cafe."
                }
              </Text>
              <Box py={10}>
                <Text as="h3" mb={2}>
                  $50 / Course
                </Text>
                <Link href="/enrollment">
                  <FakeButton>Join Us</FakeButton>
                </Link>
              </Box>
            </GridItem>

            <GridItem
              colSpan={{
                base: 12,
                md: 10,
                lg: 6,
                xl: 5,
              }}
            >
              <Box as="div">
                <Image
                  src="/placeholder/Course_materials_cards.png"
                  alt="reading-table"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </Box>
            </GridItem>
          </Grid>
        </Center>
      </Container>
    </Box>
  );
};

export default ReadingTreeSection;
