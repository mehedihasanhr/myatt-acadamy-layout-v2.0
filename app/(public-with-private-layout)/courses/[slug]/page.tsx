"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useTheme,
} from "@chakra-ui/react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { data } from "@/constants/data";
import _ from "lodash";

const Courses = () => {
  const [id, setID] = useState(1);
  const theme = useTheme();
  const [title, setTitle] = useState("Early Childhood (ages 3-5)");

  const slug = useParams().slug;

  useEffect(() => {
    if (slug === "early-childhood") {
      setTitle("Early Childhood (ages 3-5)");
    } else if (slug === "elementary-school") {
      setTitle("Elementary School (Grades 1-6)");
    } else if (slug === "middle-school") {
      setTitle("Middle School (Grades 7-9)");
    } else if (slug === "upper-school") {
      setTitle("Upper School (Grades 10-12)");
    } else if (slug === "the-reading-tree") {
      setTitle("The Reading Tree (all ages)");
    }
    console.log(slug);
  }, [slug]);

  return (
    <>
      <GridItem colSpan={2} fontSize="lg">
        <Box mb={8}>
          <Text as="h1" mb={4}>
            {title}
          </Text>
          <Text as="p" mb={4} fontSize="lg">
            Children in our preschool and kindergarten programs study letters,
            numbers, and will learn how to read and write in preparation for the
            {"Academy's"} elementary school. These sessions will be provided by
            qualified early childhood teachers and adhere to a set curriculum.
          </Text>
          <Text as="h3" mb={6}>
            Description
          </Text>
          <Text as="p" mb={4}>
            Our platform is an interactive online learning management system
            that provides all the essential materials, resources, and
            assignments. It empowers children to access the platform 24/7 and
            learn at their own pace independently. Our students especially love
            the multimedia content, such as audio and video lessons, engaging
            stories, practice exercises, and fun quizzes, which make their
            learning experience truly enriching.
          </Text>
          <Text as="p" mb={6}>
            Moreover, we offer both group and individual classes. In the group
            sessions, students get a wonderful chance to connect with fellow
            Academy learners, creating a supportive learning community. Join us
            at {"Yak's"}Cafe to stay updated on the latest developments in this
            area.
          </Text>
          <Text as="h3" mb={4}>
            Our Teachers
          </Text>
          <Text as="p" mb={4}>
            Team excellence - all professional educators, certified, qualified,
            experienced, and individually chosen. At our early childhood school,
            our teaching team embodies excellence in every sense. Comprising
            dedicated and professional educators, each member is certified,
            highly qualified, and brings a wealth of experience to the
            classroom. Every teacher has been individually chosen to be a part
            of our team, ensuring a collective of passionate educators who are
            committed to nurturing and inspiring young minds.
          </Text>
          <Button
            variant="outline"
            mb={6}
            fontFamily="var(--schoolbell)"
            fontWeight="400"
          >
            Read On
          </Button>
        </Box>
        <Box>
          <Text as="h3" mb={4}>
            Frequently asked questions
          </Text>
          <Accordion>
            {_.map(data.faqs, (faq, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {faq.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </GridItem>
      <GridItem colSpan={1} fontSize="md" fontFamily="var(--font-opensans)">
        <Box p={6} boxShadow="custom" borderRadius="0.8125rem" mb={15}>
          <Flex direction="column">
            <Image
              src="/assets/placeholder.png"
              alt="placeholder"
              borderRadius="0.8125rem"
              mb={7}
              maxW="390px"
              height="245px"
              fit="cover"
            />
            <Text as="h1" color="theme.purple" mb={7}>
              $50 / Course
            </Text>
            <Flex gap={2} mb={7}>
              <Button variant="outline" flex="1">
                Buy Now
              </Button>
              <Button flex="1">Add to Cart</Button>
            </Flex>
            <Text as="h3" color="theme.purple" textTransform="uppercase" mb={4}>
              This course includes
            </Text>
            <UnorderedList
              fontFamily="Open Sans"
              fontSize="15px"
              fontWeight="600"
            >
              <ListItem mb={4}>9 subjects</ListItem>
              <ListItem mb={4}>Access on IOS and Android</ListItem>
              <ListItem mb={4}>Full lifetime access</ListItem>
              <ListItem mb={4}>Certificate of completion</ListItem>
            </UnorderedList>
          </Flex>
        </Box>
        <Text as="h3" textTransform="uppercase" mb={4}>
          Subjects offered:
        </Text>
        <Flex gap={5} wrap="wrap" mb={4}>
          <Button
            variant="outline"
            size="sm"
            color="black"
            fontFamily="var(--school-bell)"
          >
            Language Arts
          </Button>
          <Button
            variant="outline"
            size="sm"
            color="black"
            fontFamily="var(--school-bell)"
          >
            Mathematics
          </Button>
        </Flex>
        <Text as="h3" textTransform="uppercase" mb={4}>
          Subjects coming soon:
        </Text>
        <Flex gap={5} wrap="wrap" mb={4}>
          <Button
            variant="outline"
            size="sm"
            color="black"
            fontFamily="var(--school-bell)"
          >
            Science
          </Button>
          <Button
            variant="outline"
            size="sm"
            color="black"
            fontFamily="var(--school-bell)"
          >
            Social Studies
          </Button>
          <Button
            variant="outline"
            size="sm"
            color="black"
            fontFamily="var(--school-bell)"
          >
            Elective courses
          </Button>
          <Button
            variant="outline"
            size="sm"
            color="black"
            fontFamily="var(--school-bell)"
          >
            Social Studies
          </Button>
          <Button
            variant="outline"
            size="sm"
            color="black"
            fontFamily="var(--school-bell)"
          >
            Health and Physical Education
          </Button>
          <Button
            variant="outline"
            size="sm"
            color="black"
            fontFamily="var(--school-bell)"
          >
            Art
          </Button>
          <Button
            variant="outline"
            size="sm"
            color="black"
            fontFamily="var(--school-bell)"
          >
            Technology
          </Button>
          <Button
            variant="outline"
            size="sm"
            color="black"
            fontFamily="var(--school-bell)"
          >
            Music
          </Button>
        </Flex>
      </GridItem>
    </>
  );
};

export default Courses;
