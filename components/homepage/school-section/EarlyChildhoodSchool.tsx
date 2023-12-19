import { FakeButton } from "@/components/FakeButton";
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, BadgeCheckOutline } from "@/components/ui/Icon";
import _ from "lodash";
import { usePathname } from "next/navigation";

const EarlyChildhoodSchool = () => {

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
                Early childhood (ages 3-5)
              </Text>
              <Text as="p" className="b3" fontSize="18px">
                {
                  "Children in our preschool and kindergarten programs study letters, numbers, and will learn how to read and write in preparation for the Academy's elementary school. These sessions will be provided by qualified early childhood teachers and adhere to a set curriculum."
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
                  Our platform is an interactive online learning management
                  system that provides all the essential materials, resources,
                  and assignments. It empowers children to access the platform
                  24/7 and learn at their own pace independently. Our students
                  especially love the multimedia content, such as audio and
                  video lessons, engaging stories, practice exercises, and fun
                  quizzes, which make their learning experience truly enriching.
                </Text>

                <Text as="p" className="b3" fontSize="18px">
                  Moreover, we offer both group and individual classes. In the
                  group sessions, students get a wonderful chance to connect
                  with fellow Academy learners, creating a supportive learning
                  community. Join us at {"Yak's"} Cafe to stay updated on the
                  latest developments in this area.
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
                  src="/placeholder/reading-table.png"
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
                      <Text className="b3" fontSize="22px" mb={3}>
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
                      <UnorderedList className="b3" fontSize="16px">
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
                    <Text as="h2" fontSize="28px" mb="5">
                      Our Teachers
                    </Text>
                    <Link href={`${pathname}?modal=teachers&shift=early-childhood-ages-3-5`}>
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
                        display="inline-block"
                        whiteSpace="nowrap"
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

export default EarlyChildhoodSchool;
