"use client";

import CloseIcon from "@/components/CloseIcon";
import CoursePopItem from "@/components/CoursePopItem";
import LinkButton from "@/components/LinkButton";
import Popup from "@/components/Popup";
import {
  Center,
  Button,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Image,
  Box,
  Circle,
} from "@chakra-ui/react";
import Link from "next/link";

const PopupPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // for demo
  let items: any = [];
  for (let i = 1; i <= 10; i++) {
    items.push(i);
  }
  // for demo

  const CoursesHeader = () => {
    return (
      <>
        <Text align="center" fontWeight="400" as="h2">
          School Sections
        </Text>
        <Text align="center" fontWeight="400" as="p" mb={6}>
          Select the section that best suits your needs
        </Text>
        <Flex
          justifyContent="center"
          gap={"20px"}
          flexWrap="wrap"
          maxW="80%"
          mx="auto"
          mb={6}
        >
          <LinkButton isActive={true}>
            <Link href="/">Early Childhood (ages 3-5)</Link>
          </LinkButton>
          <LinkButton isActive={false}>
            <Link href="/">Elementary School (Grades 1-6)</Link>
          </LinkButton>
          <LinkButton isActive={false}>
            <Link href="/">Middle School (Grades 7-9)</Link>
          </LinkButton>
          <LinkButton isActive={false}>
            <Link href="/">Upper School (Grades 10-12)</Link>
          </LinkButton>
          <LinkButton isActive={false}>
            <Link href="/">The Reading Tree (all ages)</Link>
          </LinkButton>
        </Flex>
      </>
    );
  };

  const CoursesBody = () => {
    return (
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        justifyContent="center"
        gap={5}
      >
        {items.map((item: any, index: number) => {
          return (
            <GridItem key={item}>
              <CoursePopItem isActive={index % 2 ? true : false} />
            </GridItem>
          );
        })}
      </Grid>
    );
  };

  const testimonialBody = () => {
    return (
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2,1fr)" }}
        columnGap={4}
        rowGap={6}
      >
        {items.map((item: any) => {
          return (
            <GridItem key={item}>
              <Flex gap={3}>
                <Circle size="46" overflow="hidden">
                  <Image
                    src="/assets/placeholder.png"
                    width="46px"
                    height="46px"
                    fit="cover"
                    alt="placeholder"
                  />
                </Circle>

                <Box>
                  <Flex gap={3} mb={2}>
                    <Text as="div">Ms. Joanie Infante</Text>
                    <Image src="/flags/Philippines.png" alt="Philippines" />
                  </Flex>
                  <Text as="div">
                    With a master’s degree in educational management and an
                    undergraduate degree in elementary education from the
                    Polytechnic University of the Philippines, as well as
                    teacher licensure by the Philippine Regulation Commission
                    for Teacher Education, Ms. Joanie is well-qualified to lead
                    the {"Academy's"} students through the early childhood education
                    experience. She is currently teaching in the Lucena area of
                    the Philippines, where her students are inspired by her
                    enthusiasm for teaching and boundless energy. Ms. Joanie is
                    eager to welcome new students to her early childhood classes
                    and lead them on an exciting academic journey.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    );
  };

  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        p="100px"
        gap={8}
      >
        <Popup
          header={CoursesHeader()}
          body={CoursesBody()}
          btnText="Courses"
          variant="main"
        />
        <Popup
          header={<Text as="h3">Early Childhood Teachers (ages 3-5)</Text>}
          body={testimonialBody()}
          btnText="Testimonials"
          variant="green"
        />
      </Flex>
    </>
  );
};

export default PopupPage;
