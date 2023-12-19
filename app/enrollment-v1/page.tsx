"use client";
import OrderItem from "@/components/OrderItem";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
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
        <Grid templateColumns="repeat(6, 1fr)" gap={`6rem`}>
          <GridItem colSpan={3}>
            <Text
              as="h3"
              fontWeight="800"
              mb="1.5rem"
              textTransform="uppercase"
            >
              Enrollment
            </Text>

            <Text as="h5" fontWeight="600" mb="1.5rem">
              Your country
            </Text>
            <Select w="100%" size="custom" variant="brandPrimary" mb="1.5rem">
              <option value="1">Spain</option>
              <option value="2">France</option>
              <option value="2">United Kingdom</option>
            </Select>

            <Text
              as="h3"
              fontWeight="800"
              mb="0.75rem"
              textTransform="uppercase"
            >
              Payment Method
            </Text>
            <RadioGroup defaultValue="1" mb="1.5rem">
              <SimpleGrid columns={2} spacing={4}>
                <Radio value="1" variant="custom" size="custom">
                  Stripe
                </Radio>
                <Radio value="2" variant="custom" size="custom">
                  Square
                </Radio>
                <Radio value="3" variant="custom" size="custom">
                  Paypal
                </Radio>
                <Radio value="4" variant="custom" size="custom">
                  Wepay
                </Radio>
              </SimpleGrid>
            </RadioGroup>
            <Text
              as="h3"
              fontWeight="800"
              mb="0.75rem"
              textTransform="uppercase"
            >
              Order Details
            </Text>
            {/* Loop Here */}
            <OrderItem itemName="Mathematics" />
            <OrderItem itemName="Language Arts" />
          </GridItem>
          <GridItem colSpan={2}>
            <Box p="6.25rem" bg="theme.sand" borderRadius="0.75rem">
              <Text as="h3" mb="0.75rem" textTransform="uppercase">
                Summary
              </Text>
              <Flex justify="space-between" w="100%" mb="0.5rem">
                <Text fontSize="xs" fontWeight="600">
                  Square
                </Text>
                <Text fontSize="xs" fontWeight="600">
                  $100
                </Text>
              </Flex>
              <Flex justify="space-between" w="100%" mb="0.5rem">
                <Text fontSize="xs" fontWeight="600">
                  Discounts
                </Text>
                <Text fontSize="xs" fontWeight="600">
                  $0
                </Text>
              </Flex>
              <Divider mb="0.5rem" colorScheme="twitter" />
              <Flex justify="space-between" w="100%" mb="1rem">
                <Text fontSize="xs" fontWeight="800">
                  Total
                </Text>
                <Text fontSize="xs" fontWeight="800">
                  $100
                </Text>
              </Flex>
              <Button
                onClick={() => router.push("/enrollment/last-step")}
                variant="primaryLarge"
                w="100%"
                size="lg"
              >
                Submit
              </Button>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Image src="/assets/enrollment/sun.png" alt="sun" width="100%" />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Demo;
