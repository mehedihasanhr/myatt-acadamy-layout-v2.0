"use client";
import OrderItem from "@/components/OrderItem";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Demo = () => {
  const router = useRouter();
  return (
    <Box pt="2.375rem">
      <Container maxW="container.xl" mb={{ base: 4, lg: 8, xl: 16 }}>
        <Grid templateColumns="repeat(2, 1fr)" gap={`6rem`}>
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
              You have paid successfully! You will receive an payment
              confirmation by email shortly.
            </Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Image
              src="/assets/enrollment/sun.png"
              alt="sun"
              maxWidth="12.5rem"
            />
          </GridItem>
        </Grid>
        <Box color="theme.purple">
          <Text as="h2" color="theme.purple">
            The last step remains
          </Text>
          <Text fontSize="xl" mb="8">
            Please fill in information about the student!
          </Text>
        </Box>
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={4}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem>
                <FormControl isRequired>
                  <FormLabel fontSize="xs" fontWeight="600">
                    Student name
                  </FormLabel>
                  <Input type="text" variant="custom" size="xl" />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isRequired>
                  <FormLabel fontSize="xs" fontWeight="600">
                    Student gender
                  </FormLabel>
                  <Select
                    w="100%"
                    size="custom"
                    variant="brandPrimary"
                    placeholder="Male / Female"
                  >
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isRequired>
                  <FormLabel fontSize="xs" fontWeight="600">
                    Student country
                  </FormLabel>
                  <Select
                    w="100%"
                    size="custom"
                    variant="brandPrimary"
                    mb="1.5rem"
                  >
                    <option value="1">Spain</option>
                    <option value="2">France</option>
                    <option value="2">United Kingdom</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isRequired>
                  <FormLabel fontSize="xs" fontWeight="600">
                    Student date of birth
                  </FormLabel>
                  <Input type="date" variant="custom" size="xl" />
                </FormControl>
              </GridItem>
            </Grid>
            <Box textAlign="right">
              <Button onClick={() => router.push('/enrollment/success')}>Submit</Button>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Demo;
