import { FakeButton } from "@/components/FakeButton";
import JoinUsButtonDropdown from "@/components/JoinUsButtonDropdown";
import { BadgeCheck, BadgeCheckOutline } from "@/components/ui/Icon";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const subjects = [
  {
    id: "1",
    title: "Language Arts",
    isAvailable: true,
    link: "/courses/elementary-school",
  },
  {
    id: "2",
    title: "Mathematics",
    isAvailable: true,
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

const ElementarySchool = () => {
  const pathname = usePathname(); // Corrected pathname

  
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
                Elementary School (Grades 1-6)
              </Text>
              <Text as="p" className="b3" fontSize="18px">
                {
                  "The Academy's elementary school covers grades 1-6. Our knowledge-rich curriculum and unique learning methodology ensure that our youngest students make confident first steps on their educational journey. Our program is fun, creative, and interactive, which keeps younger students attentive and engaged. Throughout our online elementary school program, children build a solid foundation for middle school."
                }
              </Text>

              <Box py={10}>
                <Text as="h3" className="b3" fontSize="28px" mb={2}>
                  $50 / Course
                </Text>
                {/* <Link href="/enrollment"> */}
                  {/* <FakeButton>
                    <Text as="span" className="b3" fontSize="18px">
                      Join Us
                    </Text>
                  </FakeButton> */}
                  <JoinUsButtonDropdown />
                {/* </Link> */}
              </Box>

              <Box>
                <Text as="p" className="b3" fontSize="18px">
                  The learning process:
                </Text>
                <Text as="p" className="b3" fontSize="18px">
                  {
                    "Primary education is one of the most significant educational levels. The Myatt Academy team is completely committed to developing a top-notch curriculum because this stage equips kids with the abilities, competencies, and knowledge necessary for success in life. The Academy's elementary education program is the second step in a formal education. Students will study the essentials of reading, writing, science, mathematics, and social studies in grades 1-6. There will also be options for music, physical education, art, and languages. Join us at Yak's Cafe for exciting program developments!"
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
                  src="/placeholder/elementory-school-table.png"
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
                      <Text className="b3" fontSize="22px" mb={2}>
                        Subjects
                      </Text>
                      <UnorderedList
                        listStyleType="none"
                        className="b3"
                        fontSize="16px"
                      >
                        {_.map(
                          subjects,
                          ({
                            title,
                            id,
                            link,
                            isAvailable,
                          }: (typeof subjects)[0]) =>
                            isAvailable && (
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
                                      cursor: isAvailable
                                        ? "pointer"
                                        : "default",
                                    }}
                                  >
                                    {title}
                                  </Link>
                                </Text>
                              </ListItem>
                            )
                        )}
                      </UnorderedList>
                      <Text as="div" className="b3" mt={3} mb={3}>
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
                      <UnorderedList
                        listStyleType="none"
                        className="b3"
                        fontSize="16px"
                        mb={3}
                      >
                        {_.map(
                          subjects,
                          ({
                            title,
                            id,
                            link,
                            isAvailable,
                          }: (typeof subjects)[0]) =>
                            !isAvailable && (
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
                                      cursor: isAvailable
                                        ? "pointer"
                                        : "default",
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
                    <Link href={`${pathname}?modal=teachers&shift=elementary-school-grades-1-6`}>
                      <Text
                        as="span"
                        py={4}
                        px={5}
                        bg="theme.orange"
                        color="white"
                        className="b3"
                        borderRadius="xl"
                        fontSize="16px"
                        textDecoration="none"
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

export default ElementarySchool;
