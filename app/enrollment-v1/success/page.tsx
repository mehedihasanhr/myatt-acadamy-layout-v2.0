"use client";
import CourseItem from "@/components/CourseItem";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Demo = () => {
  const router = useRouter();

  return (
    <Box pt="2.375rem">
      <Container maxW="container.xl" mb={{ base: 4, lg: 8, xl: 16 }}>
        <Grid templateColumns="repeat(2, 1fr)" gap={`6rem`} mb={`5.5rem`}>
          <GridItem colSpan={1}>
            <Text
              as="h3"
              fontWeight="800"
              mb="1.5rem"
              textTransform="uppercase"
            >
              Enrollment
            </Text>

            <Text
              as="p"
              color="theme.purple"
              fontSize="xl"
              fontWeight="400"
              mb="1rem"
            >
              You have enrolled successfully! You will receive an enrollment
              confirmation by email shortly.
            </Text>
            <Button onClick={()=>router.push('/courses')} variant="outline">Back to course</Button>
          </GridItem>
          <GridItem colSpan={1}>
            <Image
              src="/assets/enrollment/sun.png"
              alt="sun"
              maxWidth="12.5rem"
            />
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(6,1fr)">
          <GridItem colSpan={5}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem>
                <CourseItem />
              </GridItem>
              <GridItem>
                <CourseItem />
              </GridItem>
              <GridItem>
                <CourseItem />
              </GridItem>
              <GridItem>
                <CourseItem />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Demo;
