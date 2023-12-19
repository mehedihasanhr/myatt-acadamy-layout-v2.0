"use client";
import * as React from "react";
import Comment from "@/components/Comment";
import PDFIcon from "@/components/PDFIcon";
import QuizItem from "@/components/QuizItem";
import _ from "lodash";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Circle,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  ListItem,
  Progress,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

import { useState } from "react";

import dynamic from "next/dynamic";
import { VideoPlayerLoading } from "@/components/VideoPlayerLoading";
import {
  useCourseQuery,
  useLectureQuery,
} from "@/redux/features/course/courseApiSlice";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
  ssr: false,
  loading: () => <VideoPlayerLoading />,
});

// import VideoPlayer from "@/components/VideoPlayer";

/**
 * * This is the page for the course details
 */

interface courseDetailsPageProps {
  params: {
    gradeId: string;
    subjectId: string;
  }; // params from getStaticPaths
}

type LectureItemType = {
  duration: string;
  lecture_id: number;
  video_link: string;
  video_type: string;
};

const CourseDetailsPage: React.FC<courseDetailsPageProps> = ({
  params,
}: any) => {
  const { gradeId, subjectId } = params;
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // fetch course details from api
  const { data: course, isFetching: isCourseStatusIsLoading } = useCourseQuery(
    `/0?grade_id=${gradeId}&subject_id=${subjectId}`
  );

  // get lecture from query params
  const lectureId = searchParams.get("lecture");

  const { data: lecture, isFetching: isLectureStatusIsLoading } =
    useLectureQuery(`/${lectureId}`);

  console.log({ lecture });

  // for demo
  let items: any = [];
  for (let i = 1; i <= 10; i++) {
    items.push(i);
  }
  // for demo

  // static content
  const comments = [
    {
      name: "Anna (Namibia)",
      flag: "Namibia.png",
      image: "ANNA.png",
      comment:
        "Working with Dr. Tam, Mr. Andy, and the Dr. Myatt Academy of Learning team is nothing less than MAGICAL. An absolute pleasure! The Academy team is a group of highly skilled professionals. Dr. Tam and Mr. Andy take their time to get to know every member on an individual level. They support each employee and are always available. Working for the Academy exceeded all of my expectations. It is a wonderful experience to be part of a world changing mission and to know that we will touch the lives of future generations.",
    },
    {
      name: "Kolin (Namibia)",
      flag: "Namibia.png",
      image: "KOLIN.png",
      comment:
        "Working with Dr. Tam, Mr. Andy, and the Dr. Myatt Academy of Learning team is nothing less than MAGICAL. An absolute pleasure! The Academy team is a group of highly skilled professionals. Dr. Tam and Mr. Andy take their time to get to know every member on an individual level. They support each employee and are always available. Working for the Academy exceeded all of my expectations. It is a wonderful experience to be part of a world changing mission and to know that we will touch the lives of future generations.",
    },
    {
      name: "Orest (Namibia)",
      flag: "Namibia.png",
      image: "OREST.png",
      comment:
        "Working with Dr. Tam, Mr. Andy, and the Dr. Myatt Academy of Learning team is nothing less than MAGICAL. An absolute pleasure! The Academy team is a group of highly skilled professionals. Dr. Tam and Mr. Andy take their time to get to know every member on an individual level. They support each employee and are always available. Working for the Academy exceeded all of my expectations. It is a wonderful experience to be part of a world changing mission and to know that we will touch the lives of future generations.",
    },
  ];
  // static content end

  const [text, setText] = useState("");
  const maxLength = 200; // Set your desired character limit here

  const handleTextChange = (event: any) => {
    const inputText = event.target.value;
    if (inputText.length >= maxLength) {
      setText(inputText.substring(0, maxLength));
    } else {
      setText(inputText);
    }
  };

  return (
    <>
      {/* video section */}
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(3, 1fr)" }}
        gap={10}
        mb="60px"
      >
        <GridItem colSpan={{ base: 1, sm: 2 }}>
          <VideoPlayer data={lecture?.data} />
        </GridItem>
        <GridItem colSpan={1}>
          <Flex justifyContent="space-between">
            <Text className="footer-h1" fontFamily="Open Sans" mb={2}>
              Course Content
            </Text>
            <Text className="footer-h1">34% Done</Text>
          </Flex>
          <Progress
            value={34}
            h="2px"
            bgColor="color.grey"
            colorScheme="purple"
            mb={6}
          />

          <Box position="relative">
            <VStack
              spacing={5}
              align="stretch"
              mb="5"
              maxH="330px"
              overflowY="auto"
            >
              <Accordion allowToggle border="none">
                {_.orderBy(course?.data?.lessons, "lesson_id")?.map(
                  (lesson: any, i: number) => (
                    <React.Fragment key={i}>
                      {/* <Link href={`${pathname}?lesson=${}`}> */}

                      <AccordionItem
                        border="none"
                        shadow="none"
                        borderRadius={0}
                        mb="0"
                      >
                        <AccordionButton
                          display="flex"
                          textAlign="left"
                          alignItems="flex-start"
                          gap={3}
                        >
                          <Circle size="18px" backgroundColor="theme.green" />
                          <Text
                            className="fw-600"
                            fontFamily="Open Sans"
                            fontSize="xs"
                            pr="3"
                          >
                            {lesson?.name}
                          </Text>
                        </AccordionButton>
                        <AccordionPanel>
                          <UnorderedList>
                            {_.map(
                              lesson?.lectures,
                              (lecture: LectureItemType, index: number) =>
                                lecture && (
                                  <ListItem
                                    key={index}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    pl="5"
                                    fontSize="xs"
                                  >
                                    <HStack>
                                      <Circle
                                        size="6px"
                                        backgroundColor="theme.dark"
                                      />
                                      <Text
                                        _hover={{ textDecoration: "underline" }}
                                      >
                                        <Link
                                          href={`${pathname}?lecture=${lecture.video_link}`}
                                        >
                                          Lecture {index + 1}
                                        </Link>
                                      </Text>
                                    </HStack>
                                    <Text>{lecture.duration}</Text>
                                  </ListItem>
                                )
                            )}
                          </UnorderedList>
                        </AccordionPanel>
                      </AccordionItem>
                      {/* </Link> */}
                    </React.Fragment>
                  )
                )}
              </Accordion>

              {/* <Flex gap={5}>
              <Circle size="32px" backgroundColor="theme.green"></Circle>
              <Text className="fw-600" fontFamily="Open Sans" fontSize="xs">
                Vocabulary
              </Text>
            </Flex>
            <Flex gap={5}>
              <Circle size="32px" backgroundColor="theme.green"></Circle>
              <Text className="fw-600" fontFamily="Open Sans" fontSize="xs">
                Practice
              </Text>
            </Flex>
            <Flex gap={5}>
              <Circle size="32px" backgroundColor="theme.yellow"></Circle>
              <Text className="fw-600" fontFamily="Open Sans" fontSize="xs">
                Discussion
              </Text>
            </Flex>
            <Flex gap={5}>
              <Circle size="32px" backgroundColor="theme.yellow"></Circle>
              <Text className="fw-600" fontFamily="Open Sans" fontSize="xs">
                Live Classes
              </Text>
            </Flex>
            <Flex gap={5}>
              <Circle size="32px" backgroundColor="theme.yellow"></Circle>
              <Text className="fw-600" fontFamily="Open Sans" fontSize="xs">
                Quiz
              </Text>
            </Flex>
            <Flex gap={5}>
              <Circle size="32px" backgroundColor="theme.yellow"></Circle>
              <Text className="fw-600" fontFamily="Open Sans" fontSize="xs">
                Certificate
              </Text>
            </Flex> */}
            </VStack>
            <Box
              h="30px"
              w="100%"
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              bgGradient="linear(to-b, rgba(255,255,255,0), rgba(255,255,255,0.5))"
              zIndex="1"
            />
          </Box>
        </GridItem>
      </Grid>
      {/* video section end */}
      <Text color="theme.purple" fontSize="md" mb={4} as="div">
        Introduction
      </Text>
      <Tabs
        variant="custom"
        defaultIndex={0}
        fontWeight="400"
        fontFamily="Open Sans"
        isLazy
      >
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Recourses (PDF)</Tab>
          <Tab>Review</Tab>
          <Tab>Quiz</Tab>
          <Tab>Assignment</Tab>
          <Tab>Notice</Tab>
          <Tab>Live Class</Tab>
          <Tab>Discussion</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text
              as="p"
              fontSize="md"
              fontFamily="var(--font-schoolbell)"
              letterSpacing="1.36px"
            >
              English Language Arts (ELA) students are better communicators,
              enjoy using language individually, and learn in a variety of
              contexts. Through opportunities to listen and talk, read and
              write, watch and portray in a variety of combinations and
              pertinent situations, learners gain confidence and proficiency as
              language arts users. {"It's"} crucial to comprehend the grammar
              principles of our language. Our language arts curriculum for grade
              6 covers tenses, commas, capitalization, punctuation, and a
              variety of other topics. Students will gradually improve their
              grammar usage through practice without even realizing it.
            </Text>
          </TabPanel>
          <TabPanel>
            <Flex alignItems="center" gap={4} mb={10}>
              <Text as="h4" color="theme.purple">
                Download Resources:
              </Text>
              <PDFIcon />
            </Flex>
            <Text
              as="p"
              fontSize="md"
              fontFamily="var(--font-schoolbell)"
              letterSpacing="1.36px"
            >
              English Language Arts (ELA) students are better communicators,
              enjoy using language individually, and learn in a variety of
              contexts. Through opportunities to listen and talk, read and
              write, watch and portray in a variety of combinations and
              pertinent situations, learners gain confidence and proficiency as
              language arts users. {"It's"} crucial to comprehend the grammar
              principles of our language. Our language arts curriculum for grade
              6 covers tenses, commas, capitalization, punctuation, and a
              variety of other topics. Students will gradually improve their
              grammar usage through practice without even realizing it.
            </Text>
          </TabPanel>
          <TabPanel>
            <Flex alignItems="center" gap={"10px"} mb={"10px"}>
              <Text as="h3" textTransform="uppercase">
                Andy (canada)
              </Text>
              <Image
                src="/flags/Canada.png"
                alt="canada"
                width="40px"
                height="24px"
              />
            </Flex>
            <VStack alignItems="stretch" mb={9}>
              <Flex gap="10px">
                <Circle size="44px" boxShadow="custom" overflow="hidden">
                  <Image
                    src="/assets/placeholder.png"
                    alt="placeholder"
                    width="100%"
                    height="100%"
                    borderRadius="50%"
                  />
                </Circle>
                <Flex direction="column" gap="8px" mb="8px" w="100%">
                  <Textarea
                    placeholder="Write here"
                    variant="custom"
                    onChange={handleTextChange}
                    value={text}
                  />
                  <Text
                    alignSelf="end"
                    mt={2}
                    fontSize="sm"
                    color={text.length > maxLength ? "theme.orange" : "black"}
                    as="div"
                    fontFamily="var(--font-schoolbell)"
                  >
                    {text.length}/{maxLength} characters
                  </Text>
                </Flex>
              </Flex>
              <Button
                isDisabled={!text.length || text.length > maxLength}
                size="xs"
                w="180px"
                ml="auto"
              >
                Submit
              </Button>
            </VStack>
            {comments.map((item, i: any) => {
              return <Comment key={i} item={item} />;
            })}
          </TabPanel>
          {/* quiz tab */}
          <TabPanel>
            <TableContainer maxW={{ base: "280px", sm: "100%" }} mb={7}>
              <Table fontFamily="Open Sans" fontSize="xs" color="theme.purple">
                <Thead>
                  <Tr>
                    <Th
                      fontFamily="Open Sans"
                      fontSize="sm"
                      letterSpacing="1.26px"
                      textTransform="uppercase"
                    >
                      Date
                    </Th>
                    <Th
                      fontFamily="Open Sans"
                      fontSize="sm"
                      letterSpacing="1.26px"
                      textTransform="uppercase"
                    >
                      Title
                    </Th>
                    <Th
                      fontFamily="Open Sans"
                      fontSize="sm"
                      letterSpacing="1.26px"
                      textTransform="uppercase"
                    >
                      Result
                    </Th>
                    <Th
                      fontFamily="Open Sans"
                      fontSize="sm"
                      letterSpacing="1.26px"
                      textTransform="uppercase"
                    >
                      Action
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items.slice(0, 5).map((item: any, index: any) => {
                    return (
                      <Tr key={item} p={4}>
                        <Td
                          backgroundColor={
                            index === 3 ? "theme.green" : "transparent"
                          }
                          borderTopLeftRadius="13px"
                          borderBottomLeftRadius="13px"
                          color="theme.dark"
                        >
                          Tue Aug 23, 2023
                        </Td>
                        <Td
                          backgroundColor={
                            index === 3 ? "theme.green" : "transparent"
                          }
                        >
                          Language Arts Quiz True False
                        </Td>
                        <Td
                          backgroundColor={
                            index === 3 ? "theme.green" : "transparent"
                          }
                          fontWeight="800"
                        >
                          6 / 10
                        </Td>
                        <Td
                          backgroundColor={
                            index === 3 ? "theme.green" : "transparent"
                          }
                          borderTopRightRadius="13px"
                          borderBottomRightRadius="13px"
                        >
                          <Button variant="outline" size="xxs">
                            View
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
              }}
              justifyItems="center"
              gap={4}
            >
              {items.slice(0, 8).map((item: any) => {
                return (
                  <GridItem key={item}>
                    <QuizItem />
                  </GridItem>
                );
              })}
            </Grid>
          </TabPanel>
          {/* quiz tab end */}
          <TabPanel>
            <p>Review!</p>
          </TabPanel>
          <TabPanel>
            <p>Review!</p>
          </TabPanel>
          <TabPanel>
            <p>Review!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default CourseDetailsPage;
