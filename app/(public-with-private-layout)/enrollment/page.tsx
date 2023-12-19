"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import * as React from "react";
// next
import { useRouter } from "next/navigation";
import Image from "next/image";

// chakra-ui
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Text,
  VStack,
  Image as ChakraImage,
  useToast,
} from "@chakra-ui/react";

// formic
import { useFormik } from "formik";
import OrderItem from "@/components/OrderItem";
import { useLocalStore } from "@/hooks/useLocalStore";
import {
  useGradesQuery,
  useOrderMutation,
} from "@/redux/features/course/courseApiSlice";
import { CartSubmitDataType, Country, Grade } from "@/types";
import { useCountriesQuery } from "@/redux/features/country/countryApiSlice";
import _ from "lodash";

const EnrollmentPage = () => {
  const router = useRouter();
  const [totalPrice, setTotalPrice] = React.useState(0);
  const { data: grades, isFetching } = useGradesQuery("");
  // fetch grades from localStore
  const [store] = useLocalStore("grade");

  const [countryCodeMap, setCountryCodeMap] = React.useState({
    1: "+880",
    2: "+1",
    3: "+44",
    4: "+1",
  });

  const [currentPhoneCode, setCurrentPhoneCode] = React.useState("+880");

  // fetch countries from DB
  const { data: countries, isFetching: countriesStateIsLoading } =
    useCountriesQuery("");

  React.useEffect(() => {
    if (!countriesStateIsLoading) {
      setCountryCodeMap(() => {
        return countries?.data?.forEach((country: Country) => {
          return {
            [country.id]: country.phonecode,
          };
        });
      });
    }
  }, [countries, countriesStateIsLoading]);

  // get grades data
  const getGradesSerializedData = () => {
    const grades = store?.grades.map((gradeId: number) => {
      const subjects = store.subjects[gradeId];
      return {
        gradeId,
        subjects,
      };
    });

    return grades;
  };

  const serializedData = () => {
    let gradesData = [] as any;
    let total = 0;

    const data = getGradesSerializedData();

    // const { gradeId, subjects } = getGradesSerializedData();

    data?.map(({ gradeId, subjects }: any) => {
      const grade = grades?.data?.find((grade: Grade) => grade.id === gradeId);

      subjects?.map((subjectId: string | number) => {
        const subject = grade?.subcategories?.find(
          (subject: any) => subject.id === subjectId
        );

        // calculate total price
        const price = subject?.price;
        total += Number(price);

        gradesData.push({
          grade,
          ...subject,
        });
      });
    });

    return { gradesData, total };
  };

  const { gradesData, total } = serializedData();

  React.useEffect(() => {
    setTotalPrice(total);
  }, [total]);

  // formik
  const formik = useFormik({
    initialValues: {
      country_id: "",
      name: "",
      email: "",
      gender: "",
      phone: "",
      payment_method: "stripe",
      phone_number: "",
    },
    onSubmit: (values) => {
      const orderItems = gradesData?.map((d: any) => {
        return {
          category_id: d.grade.id,
          subcategory_id: d.id,
          unit_price: d.price,
        };
      });

      const data = {
        ...values,
        total_price: totalPrice,
        amount: 50,
        project_name: 'test',
        order_items: orderItems,
      };

      // handle submit
      handleSubmit(data);
    },
  });

  const handleCountryChange = (event: any) => {
    setCurrentPhoneCode(event?.target?.value);
  };

  // handle submit function

  const toast = useToast();

  const [orderMutation, { data: resData, isLoading, isError }] =
    useOrderMutation();

  const handleSubmit = async (data: CartSubmitDataType) => {
    console.log(data);

    try {
      await orderMutation(data);
      console.log({ resData });
      toast({
        title: "Purchase Successful",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    } catch (err: any) {
      console.error(err);
      toast({
        title: err.message || "Error",
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    }
  };

  return (
    <Box pt="2.375rem">
      <Container maxW="container.xl" mb={{ base: 4, lg: 8, xl: 16 }}>
        <form>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(6, 1fr)" }}
            gap={`6rem`}
            mb={8}
          >
            <GridItem colSpan={3}>
              <VStack mb={8} gap={4}>
                <Text
                  as="h3"
                  fontWeight="800"
                  mb="1.5rem"
                  textTransform="uppercase"
                  alignSelf="flex-start"
                >
                  Order Details
                </Text>
                {/* Card Items */}
                {gradesData?.map((d: any, index: number) => (
                  <OrderItem key={index} item={d} isLoading={isFetching} />
                ))}
              </VStack>

              {/* Form */}
              <Text
                as="h3"
                fontWeight="800"
                mb="1.5rem"
                textTransform="uppercase"
              >
                Enrollment
              </Text>

              {/* Name */}
              <FormControl mb={5}>
                <FormLabel>Your Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  variant="filled"
                  bg="theme.sand"
                  fontSize="16"
                  px="5"
                  h="58"
                  borderRadius="12px"
                  _focus={{
                    bg: "theme.sand",
                  }}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </FormControl>

              {/* Email */}
              <FormControl mb={5}>
                <FormLabel>Your Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                  bg="theme.sand"
                  fontSize="16"
                  px="5"
                  h="58"
                  borderRadius="12px"
                  _focus={{
                    bg: "theme.sand",
                  }}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </FormControl>

              {/* Gender */}
              <FormControl mb={5}>
                <FormLabel>Choose Gender</FormLabel>

                <RadioGroup
                  defaultValue="stripe"
                  mb="1.5rem"
                  name="gender"
                  onChange={(e) => {
                    formik.setFieldValue("gender", e);
                  }}
                  value={formik.values.gender}
                >
                  <SimpleGrid columns={2} spacing={4}>
                    <Radio value="male" variant="custom" size="custom">
                      Male
                    </Radio>
                    <Radio value="female" variant="custom" size="custom">
                      Female
                    </Radio>
                  </SimpleGrid>
                </RadioGroup>
              </FormControl>

              {/* phone */}
              <FormControl mb={5}>
                <FormLabel>Your Phone Number</FormLabel>
                <Input
                  name="phone"
                  type="tel"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  bg="theme.sand"
                  fontSize="16"
                  px="5"
                  h="58"
                  borderRadius="12px"
                  _focus={{
                    bg: "theme.sand",
                  }}
                />
              </FormControl>

              {/* Country */}
              <FormControl mb={5}>
                <FormLabel>Your Country</FormLabel>
                <Select
                  w="100%"
                  size="custom"
                  variant="brandPrimary"
                  mb="1.5rem"
                  name="country_id"
                  onChange={(event) => {
                    handleCountryChange(event);
                    formik.handleChange(event);
                  }}
                  value={formik.values.country_id}
                  fontSize={{ base: "0.875rem", lg: "1rem" }}
                >
                  {countries?.data?.map((country: Country) => (
                    <option value={country.id} key={country.id}>
                      {country.country_name}
                    </option>
                  ))}
                </Select>
              </FormControl>

              {/* Payment Method */}
              <FormControl mb={5}>
                <FormLabel>Choose a Payment Method</FormLabel>

                <RadioGroup
                  defaultValue="stripe"
                  mb="1.5rem"
                  name="payment_method"
                  onChange={(e) => {
                    formik.setFieldValue("payment_method", e);
                  }}
                  value={formik.values.payment_method}
                >
                  <SimpleGrid columns={2} spacing={4}>
                    <Radio value="stripe" variant="custom" size="custom">
                      <Image
                        src="/stripe.svg"
                        alt="stripe"
                        width="150"
                        height="100"
                      />
                    </Radio>
                    <Radio value="paypal" variant="custom" size="custom">
                      <Image
                        src="/paypal.svg"
                        alt="paypal"
                        width="150"
                        height="100"
                      />
                    </Radio>
                  </SimpleGrid>
                </RadioGroup>
              </FormControl>
            </GridItem>

            {/* Order Summary */}
            <GridItem colSpan={3}>
              <Box
                px={{ base: "1.5rem", md: "2.5rem", xl: "6.25rem" }}
                pb={{ base: "1.5rem", md: "2.5rem", xl: "6.25rem" }}
                pt={{ base: "1.5rem", md: "2.5rem", xl: "3.25rem" }}
                bg="theme.sand"
                borderRadius="0.75rem"
                position={{ base: "relative", lg: "sticky" }}
                top={{ base: "0", lg: "5rem" }}
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                <Center mb="1.5rem">
                  <Image
                    src="/assets/enrollment/sun.png"
                    alt="sun"
                    width={300}
                    height={300}
                    sizes="(max-width: 768px) 180px, 300px"
                  />
                </Center>
                <Text as="h3" mb="0.75rem" textTransform="uppercase">
                  Summary
                </Text>
                <Flex
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb="1.5rem"
                >
                  <Text as="h5" fontWeight="600">
                    Subtotal
                  </Text>
                  <Text as="h5" fontWeight="600">
                    $ {totalPrice}
                  </Text>
                </Flex>
                <Flex
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb="1.5rem"
                >
                  <Text as="h5" fontWeight="600">
                    $ 0
                  </Text>
                </Flex>

                <Divider mb="1.5rem" borderBlock="1px solid #aaa" />
                <Flex
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb="1.5rem"
                >
                  <Text as="h5" fontWeight="600">
                    Total
                  </Text>
                  <Text as="h5" fontWeight="600">
                    $ {totalPrice}
                  </Text>
                </Flex>
                <Button
                  w="100%"
                  variant="primaryLarge"
                  size="custom"
                  borderRadius="12px"
                  fontSize={{ base: "0.875rem", lg: "1rem" }}
                  onClick={() => formik.handleSubmit()}
                >
                  Continue to Payment
                </Button>
              </Box>
            </GridItem>
          </Grid>
        </form>
        <Text as="h3" mb={6}>
          Releated Products
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {_.times(4, (i) => {
            return (
              <GridItem
                colSpan={1}
                bg="theme.pastelYellow"
                borderRadius={10}
                overflow="hidden"
                shadow="soft"
                key={i}
              >
                <VStack gap={4} borderRadius={2} align="start" w="full">
                  <ChakraImage
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    src="/assets/placeholder.png"
                    alt="placeholder"
                  />
                  <Box as="div" px={4} mb={4} w="full">
                    <Text as="h2" mb={1} fontSize="2rem">
                      Product Name
                    </Text>
                    <Text as="h2" mb={4} fontSize="1rem">
                      Grade Name
                    </Text>
                    <Text as="h2" mb={4} fontSize="1.5rem">
                      $50
                    </Text>
                    {!(i % 2) ? (
                      <Button variant="primary" w="full">
                        Add to Cart
                      </Button>
                    ) : (
                      <Button variant="primary" bg="theme.eraseActive" w="full">
                        Remove From Cart
                      </Button>
                    )}
                  </Box>
                </VStack>
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default EnrollmentPage;
