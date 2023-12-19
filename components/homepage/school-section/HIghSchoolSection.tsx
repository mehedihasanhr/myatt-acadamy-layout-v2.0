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
  ListIcon,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import _ from "lodash";
import { BadgeCheck, BadgeCheckOutline } from "@/components/ui/Icon";
import { usePathname } from "next/navigation";

const HighSchoolSection = () => {
  const pathname = usePathname(); // Corrected pathname
  
  const subjects = [
    {
      id: "1",
      title: "Language Arts",
      isAvailable: false,
      link: "/courses/elementary-school",
    },
    {
      id: "2",
      title: "Mathematics",
      isAvailable: false,
      link: "/courses/elementary-school",
    },
    {
      id: "3",
      title: "Sciences",
      isAvailable: false,
      link: "#",
    },
    {
      id: "4",
      title: "Social Studies",
      isAvailable: false,
      link: "#",
    },
    {
      id: "5",
      title: "Elective courses",
      isAvailable: false,
      link: "#",
    },
    {
      id: "6",
      title: "Health and Physical Education",
      isAvailable: false,
      link: "#",
    },
    {
      id: "7",
      title: "Art",
      isAvailable: false,
      link: "#",
    },
    {
      id: "8",
      title: "Music",
      isAvailable: false,
      link: "#",
    },
    {
      id: "9",
      title: "Technology",
      isAvailable: false,
      link: "#",
    },
  ];
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
                Upper School (Grades 10-12)
              </Text>
              <Text as="p" className="b3" fontSize="18px">
                {
                  "The senior high school program at the Myatt Academy serves as the basic education finishing school. Our goal is to equip Academy graduates with the skills they need to succeed in the workforce, in business, or in higher education. A comprehensive curriculum covering the essential academic disciplines essential to a high school education will be made available in an effort to attain these objectives. Students will be introduced to the foundational topics of mathematics, social studies, language arts, life sciences, chemistry, and physics under the direction of licensed teachers from around the world. We will also offer courses in entrepreneurship, music, physical education, career-specific and technical education, and more. Join us at Yak's Cafe to keep up with the fantastic developments in our high school program."
                }
              </Text>

              <Box py={10}>
                <Text as="h3" className="b3" fontSize="28px" mb={2}>
                  $50 / Course
                </Text>
                <Link href="/enrollment">
                  <FakeButton>
                    <Text as="span" className="b3" fontSize="18px">
                      Join Us
                    </Text>
                  </FakeButton>
                </Link>
              </Box>

              <Box>
                <Text as="p" className="b3" fontSize="18px">
                  The learning process:
                </Text>
                <Text as="p" className="b3" fontSize="18px">
                  {
                    "Our platform is an interactive online learning management system that provides all the essential materials, resources, and assignments. It empowers children to access the platform 24/7 and learn at their own pace independently. Our students especially love the multimedia content, such as audio and video lessons, engaging stories, practice exercises, and fun quizzes, which make their learning experience truly enriching."
                  }
                </Text>

                <Text as="p" className="b3" fontSize="18px">
                  {
                    "Moreover, we offer both group and individual classes. In the group sessions, students get a wonderful chance to connect with fellow Academy learners, creating a supportive learning community. Join us at Yak's Cafe to stay updated on the latest developments in this area."
                  }
                </Text>
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
                  src="/placeholder/Coursematerialscards.png"
                  alt="reading-table"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </Box>
              <Box py={10}>
                <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                  <GridItem colSpan={{ base: 12, md: 7 }}>
                    <Box as="div">
                      <Text className="b3" fontSize="22px">
                        Subjects coming soon.
                      </Text>
                      <Text as="div" className="b3" mb={3}>
                        We are currently loading{" "}
                        <Box as="span" textDecoration="underline">
                          NEW OR REVISED CONTENT
                        </Box>{" "}
                        for the following subjects. Please be patient. Real
                        magic takes time. Follow developments{" "}
                        <Box as="span" textDecoration="underline">
                          <Link href="/join-us-at-yaks-cafe">here</Link>
                        </Box>{" "}
                        {`Yak's Café on our webpage.`}
                      </Text>
                      <UnorderedList className="b3" fontSize="18px">
                        {_.map(
                          subjects,
                          ({ title, id, link, isAvailable }: any) => (
                            <ListItem
                              key={id}
                              display="flex"
                              alignItems="center"
                            >
                              <ListIcon
                                as={
                                  isAvailable ? BadgeCheck : BadgeCheckOutline
                                }
                                fill={isAvailable ? "green.500" : "gray.500"}
                              />
                              <Text
                                as="span"
                                _hover={{
                                  textDecoration: isAvailable
                                    ? "underline"
                                    : "none",
                                  cursor: isAvailable ? "pointer" : "default",
                                }}
                              >
                                <Link
                                  href={link}
                                  onClick={(e) =>
                                    !isAvailable && e.preventDefault()
                                  }
                                  style={{
                                    cursor: isAvailable ? "pointer" : "default",
                                  }}
                                >
                                  {title}
                                </Link>
                              </Text>
                            </ListItem>
                          )
                        )}
                      </UnorderedList>
                    </Box>
                  </GridItem>

                  <GridItem
                    colSpan={{ base: 12, md: 5 }}
                    order={{
                      base: 3,
                      md: 2,
                    }}
                  >
                    <Text as="h2" fontSize="28px" mb={5}>
                      Our Teachers
                    </Text>
                    <Link href={`${pathname}?modal=teachers&shift=upper-school-grades-10-12`}>
                      <Text
                        as="span"
                        py={4}
                        px={5}
                        bg="theme.orange"
                        color="white"
                        className="b3"
                        borderRadius="xl"
                        textDecoration="none"
                        fontSize="16px"
                        _hover={{
                          bg: "theme.orange",
                          opacity: 0.8,
                        }}
                        _active={{
                          bg: "theme.primary",
                          opacity: 0.8,
                        }}
                      >
                        Meet our teachers
                      </Text>
                    </Link>
                  </GridItem>
                </Grid>
              </Box>
            </GridItem>
          </Grid>
        </Center>
      </Container>
    </Box>
  );
};

export default HighSchoolSection;
