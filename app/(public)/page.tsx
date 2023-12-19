"use client";
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  ListItem,
  Spinner,
  Text,
  UnorderedList,
  VStack,
  useTheme,
} from "@chakra-ui/react";
// import ProductCardSliders from '@/components/homepage/ProductCardSliders'
import Image from "next/image";
import dynamic from "next/dynamic";
import StaffMessages from "@/components/homepage/StaffMessages";
import TeacherSection from "@/components/homepage/TeacherSection";
// import Hero from "@/components/homepage/Hero";
import ReadMoreController from "@/components/homepage/ReadMoreController";
import Link from "next/link";
import SchoolSection from "@/components/homepage/SchoolSection";
import AcademicProgram from "@/components/homepage/AcademicProgram";
import Advantages from "@/components/homepage/Advantages";
import ContactUsSection from "@/components/homepage/ContactUsSection";

import About from "@/components/homepage/About";
import { darken, lighten } from "polished";

import { HeroSectionLoading } from "@/components/homepage/HeroSectionLoading";

const Hero = dynamic(() => import("@/components/homepage/Hero"), {
  ssr: false,
  loading: () => <HeroSectionLoading />,
});
import OurTeamSection from "@/components/homepage/OurTeamSection";
import SpecialProjectSection from "@/components/homepage/SpecialProjectSection";

const ProductCardSliders = dynamic(
  () => import("@/components/homepage/ProductCardSliders"),
  {
    ssr: false,
    loading: () => (
      <Center>
        <Spinner />
      </Center>
    ),
  }
);
const Home = () => {
  const { theme } = useTheme().colors;
  const lighterGreen = lighten(0.075, theme.mossGreen);
  const ligterCopperRed = darken(0.1, theme.copperRed);
  return (
    <Box>
      <Box as="div">
        <Hero />
      </Box>
      <Box
        width="100%"
        height="40px"
        background={theme.darkGreen}
        opacity="1"
      />
      {/* Academic Program board */}
      <AcademicProgram />
      {/* End Academic Program board */}

      {/* Category Section */}
      <SchoolSection />
      <Box py="50px" bg="theme.pastelYellow">
        <Text as="h2" textAlign="center" mb={5}>
          Our Courses
        </Text>

        <ProductCardSliders />
      </Box>
      {/* End Category Section */}

      {/* advantage  */}
      <Advantages />
      {/* advantages end */}

      {/* Testimonial Section */}
      <Box as="section" py="50px" bg="theme.pastelYellow">
        <Container maxW="container.xl">
          <Grid
            templateColumns="repeat(10, 1fr)"
            gap={5}
            bg="theme.darkGreen"
            borderRadius="8px"
            px={5}
            py={6}
          >
            <GridItem colStart={{ lg: 2 }} colSpan={{ base: 10, lg: 4 }}>
              <Box mb={6}>
                <Text as="h2">US and Canadian Curricula</Text>

                <Text as="p" mt={1.5} className="b3" fontSize="lg">
                  The program follows the US and Canadian Curricula which are
                  very closely aligned.
                </Text>
              </Box>

              <Box mb={6}>
                <Text as="h2">Academic Program</Text>

                <ReadMoreController
                  text="The Dr. Myatt Academy of Learning is based on a framework of quality academic standards that draw on the competencies outlined in the Canadian and USA Common Core Curricula. \n \n Our early childhood center (preschool and kindergarten) and elementary school (grades 1- 6) emphasize the development of reading, writing, speaking, and academic skills development. Areas of study include the 4 core subjects of science, math, language arts, and social studies to which we expand to include reading, writing, art, music, physical education, and with more being added."
                  maxLength={320}
                />
              </Box>
            </GridItem>

            <GridItem colStart={{ lg: 7 }} colSpan={{ base: 10, lg: 4 }}>
              <Box mb={6}>
                <Text as="h2">Courses Currently Available</Text>

                <Text as="p" mt={1.5} className="b3" fontSize="lg">
                  {`The Academy currently offers courses in mathematics and
                  language arts for grades 1-6. Our science and social studies
                  courses for grades 1-6, as well as our Early Childhood Program
                  will start soon. Our middle and upper school courses are
                  scheduled for access in 2024. Please join us at Yak's Café for
                  updates.`}
                </Text>
              </Box>

              <Box mb={6}>
                <Text as="h2">Quality and the Academy</Text>

                <Text as="p" mt={1.5} mb={5} className="b3" fontSize="lg">
                  The Academy has incorporated technology into its entire
                  program. Yet, the Academy also applies a hands-on approach to
                  education in which qualified educators lead every lesson using
                  instructional videos. This type of technology-teacher
                  combination retains the ever vital personal and human touch in
                  education.
                </Text>

                <Text
                  as="p"
                  mt={1.5}
                  mb={5}
                  className="b3"
                  noOfLines={4}
                  fontSize="lg"
                >
                  {
                    "Furthermore, parents or guardians can follow the learner's progress through academic updates, performance highlights, and areas for needed reinforcement."
                  }
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      {/* End Testimonial Section */}

      {/* About the academy */}
      <About />

      {/* About the academy letter*/}
      <Box
        as="section"
        py="50px"
        id="welcome_message_form_dr_myatt"
        bg="theme.darkGreen"
      >
        <Container maxW="container.xl">
          <Flex gap={5} justifyContent="center">
            <Box
              w={{ base: "90%", md: "50%" }}
              p={5}
              bg="theme.yellow"
              borderRadius={"8px"}
            >
              <Text as="p" mb={5} className="b2">
                Dear friends,
              </Text>

              <Text as="p" mt={1.5} mb={5} className="b2">
                My spouse, fellow educator, co-founder, and corporate counsel,
                Andrew (Andy) Wood and I are honored that you have taken time to
                visit the Academy.
              </Text>

              <Text as="p" mt={1.5} mb={5} className="b2">
                For parents, we know that finding the right education for your
                child is paramount, and we respect and value the trust that
                parents and students show when enrolling in the Dr. Myatt
                Academy of Learning.
              </Text>

              <Text as="p" mt={1.5} mb={5} className="b2">
                We hope that the lessons and learning materials presented will
                exceed your expectations.
              </Text>

              <Text as="p" mt={1.5} mb={5} className="b2">
                {
                  "We're excited and proud to tell you more about our programs so please read on!"
                }
              </Text>

              <Text as="p" mt={1.5} mb={5} className="b2">
                Yours very sincerely, <br />
                Dr. Tamara Myatt
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      {/* End advantage  */}

      <Box as="section" py="50px" bg="theme.darkGreen">
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(10, 1fr)" gap={5}>
            {/* Card */}
            <GridItem colSpan={{ base: 10, lg: 5 }}>
              <VStack
                minH="270px"
                p={5}
                bg="theme.yellow"
                borderRadius="13px"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Text as="h2" fontWeight="500">
                  Background
                </Text>

                <ReadMoreController
                  text="One of the greatest outcomes of the tech revolution has been the democratization of education - global access to quality learning. As never before, children and adults everywhere can now access quality education and with it, achieve dreams never before thought possible. \n
                                    Our team of professional (certified and experienced) teachers are not just qualified, but more importantly, are certified and experienced in their specific area of instruction."
                  maxLength={120}
                />
              </VStack>
            </GridItem>
            {/* End Card */}

            {/* Card */}
            <GridItem colSpan={{ base: 10, lg: 5 }} id="vision">
              <VStack
                minH="270px"
                p={5}
                bg="theme.yellow"
                borderRadius="13px"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Text as="h2">Vision</Text>
                <ReadMoreController
                  text="We are particularly mindful of the millions of children who don't have access to a quality education. As a result, their future is limited and the world community is robbed of potential leaders in science, medicine, engineering and yes, education. Our teaching team is dedicated to helping change this! "
                  maxLength={120}
                />
              </VStack>
            </GridItem>
            {/* End Card */}
            {/* Card */}
            <GridItem colSpan={{ base: 10, lg: 5 }} id="our-promise">
              <VStack
                minH="270px"
                p={5}
                bg="theme.yellow"
                borderRadius="13px"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Text as="h2">Our Unwavering Promise to You</Text>
                <ReadMoreController
                  text="We know that much of the world is experiencing troubled times and social upheaval. This is no more evident than with the state of many government schools. The great divide between education as it was and the intrusion of woke ideology into many of our schools, does not lend itself to appeasement. They are diametrically opposed. \n\n As such, we are obliged to state where we stand on the issue. \n\n We respect the right of parents to raise their children according to their beliefs and we uphold the sanctity of the family. We do not engage in any form of social, religious or political activism. Woke gender indoctrination will not be allowed to creep into the Academy. \n\n This is our promise to you.\n\n Thank you. \n All of us at the Academy."
                  maxLength={120}
                />
              </VStack>
            </GridItem>
            {/* End Card */}
            {/* Card */}
            <GridItem colSpan={{ base: 10, lg: 5 }} id="mission">
              <VStack
                minH="270px"
                p={5}
                bg="theme.yellow"
                borderRadius="13px"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Text as="h2">Mission</Text>

                <ReadMoreController
                  text="The shared dream and purpose of every member of our team is “To provide the gold standard of affordable, flexible, quality online preschool, elementary, and secondary education to youth worldwide”."
                  maxLength={120}
                />
              </VStack>
            </GridItem>
            {/* End Card */}
            {/* Card */}
            <GridItem colSpan={{ base: 10, lg: 5 }} id="quality-assurance">
              <VStack
                minH="270px"
                p={5}
                bg="theme.yellow"
                borderRadius="13px"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Text as="h2">Quality Assurance</Text>

                <ReadMoreController
                  text="The Academy has incorporated technology into its entire program. Yet, we also apply a hands-on approach to education in which qualified teachers lead every lesson through the use of instructional videos. This type of technology-teacher combination retains the ever vital personal and human touch in education. \n \n

                                    Additionally, even though some concepts may be challenging, our educational format provides a sense of fun, adventure, and humor for learners. In adhering to both the American and Canadian curricula, associated skills and concepts at each grade level will be offered via instructional videos. These instructional videos will incorporate practice exercises and interactive quizzes and more as fully discussed under Academic Programs. \n \n 
                                    Furthermore, parents or guardians can follow the learner's progress through academic updates, performance highlights, and areas for needed reinforcement.  \n \n 

                                    The Academy's model is subscription-based. We recognize that affordability is important to families everywhere, so we strive to meet the needs of students and parents at an affordable cost. We also offer no-cost access to those in need and in places where there is limited access to quality education through our scholarship program. \n"
                  maxLength={120}
                />
              </VStack>
            </GridItem>
            {/* End Card */}
            {/* Card */}
            <GridItem
              colSpan={{ base: 10, lg: 5 }}
              id="contribution-to-the-global-good"
            >
              <VStack
                minH="270px"
                p={5}
                bg="theme.yellow"
                borderRadius="13px"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Text as="h2">Contribution to the Global Good</Text>

                <ReadMoreController
                  text="The Dr. Myatt Academy of Learning believes passionately in high quality learning opportunities at an affordable price. The Academy believes that accessibility to educational opportunities is best supported through affordability. This aspect of quality and affordability in education is the Academy's contribution to greater global good."
                  maxLength={120}
                />
              </VStack>
            </GridItem>
            {/* End Card */}
          </Grid>
        </Container>
      </Box>

      {/* Contact Us */}
      <ContactUsSection />

      {/* our teams */}
      <OurTeamSection />
      {/* end our team section */}

      {/* dr. tam's letter */}
      <Box as="section" py="50px" id="background" bg="theme.copperRed">
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(10, 1fr)" gap={5}>
            <GridItem
              colSpan={{ base: 10, md: 8, lg: 6 }}
              p={6}
              borderRadius={"8px"}
              bg="theme.yellow"
            >
              <Text as="h2" mb={3}>
                Background
              </Text>
              <Text as="p" mb={5} className="b2">
                Dear friends,
              </Text>

              <Text as="p" mt={1.5} mb={5} className="b2">
                {
                  "On Canada's east coast, in a small fishing community in rural Nova Scotia, are where my roots originate. My parents and extended family and their parents before them worked long hours fishing the ocean, a dangerous occupation in those days of the family-owned Cape-Islander fishing boats. Some of my family were highly skilled craftsmen who built boats that sailed the rough waters of the Atlantic coast. They worked long hours to raise their families. While the men were fishing at sea, the women prepared the fish to ship to markets. Like many of you, I've never forgotten my roots and the life lessons my sea faring family taught me, amongst them,"
                }
              </Text>

              <UnorderedList ml={10} className="b2" mb={5}>
                <ListItem>fear nothing</ListItem>
                <ListItem>
                  expect rough seas in life but sail fiercely until you reach
                  safe harbors.
                </ListItem>
                <ListItem>
                  {"always lend a hand to those who've fallen overboard."}
                </ListItem>
              </UnorderedList>

              <Text as="p" mt={1.5} mb={5} className="b2">
                {
                  "Hard work, honesty, and a big heart are three qualities we look for when we seek out teachers and staff. Those who love helping kids (of all ages) and have trained diligently in their chosen area of education, are amongst the greatest teachers. We are very proud of the incredible team of teachers who have wholeheartedly agreed to be part of your new neighborhood school - The Dr. Myatt Academy of Learning."
                }
              </Text>

              <Text as="p" mt={1.5} mb={5} className="b2">
                Yours very sincerely, <br />
                Dr. Tamara Myatt
              </Text>
            </GridItem>

            <GridItem colSpan={{ base: 10, lg: 4 }} px={5}>
              <Box as="div" my="auto">
                <Box
                  bg="theme.yellow"
                  rounded="13px"
                  p={{
                    base: 3,
                    sm: 4,
                    md: 6,
                    lg: 8,
                    xl: 10,
                  }}
                >
                  <Text
                    as="h3"
                    fontSize="4xl"
                    mb={10}
                    fontFamily="var(--schoolbell)"
                    fontWeight="500"
                  >
                    Leadership Team
                  </Text>
                  <Image
                    src="/placeholder/reading-table.png"
                    alt="Reading Table"
                    width={400}
                    height={400}
                    quality={70}
                  />

                  <Link href="?modal=staff" scroll={false}>
                    <Text
                      as="span"
                      display="block"
                      py="3"
                      px="8"
                      bg="theme.orange"
                      className="b3"
                      rounded="13px"
                      letterSpacing="1.5px"
                      textAlign="center"
                      textColor="white"
                      mt={10}
                      fontSize={{
                        base: "15px",
                        md: "lg",
                        lg: "xl",
                      }}
                      _hover={{
                        bg: "#e64c00",
                        textColor: "white",
                        textDecoration: "none",
                      }}
                    >
                      Meet Our Leadership Team
                    </Text>
                  </Link>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      {/* dr tams' letter end */}

      {/* teachers */}
      <TeacherSection />
      {/* staff messages */}
      <Box
        py={{
          base: "20px",
          md: "35px",
          lg: "50px",
        }}
        bg="theme.copperRed"
      >
        <StaffMessages />
      </Box>

      {/* Special Project */}
      <SpecialProjectSection />
      {/* End Special Project */}

      <Box
        as="section"
        py="50px"
        bg="theme.seafoamGreen"
        id="introduction-by-andy-wood"
      >
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(10, 1fr)" gap={5}>
            <GridItem
              colSpan={{ base: 10, md: 8, lg: 6 }}
              p={{ base: 0, lg: 6 }}
              borderRadius={"8px"}
              bg="theme.yellow"
              color="black"
            >
              <Text as="p" mb={5} className="b2" color="black">
                Dear friends,
              </Text>

              <Text as="p" mt={1.5} mb={5} className="b2" color="black">
                When my spouse, Dr. Tam and I embarked on this adventure, we
                were motivated to help kids improve their lives through
                education, at home in Canada, the United States, and globally.
              </Text>

              <Text as="p" mt={1.5} mb={5} className="b2" color="black">
                Our travels abroad were punctuated by the poverty we witnessed
                and the correlation between that poverty and the absence of
                quality, formalized education.
              </Text>

              <Text as="p" mt={1.5} mb={5} className="b2" color="black">
                {
                  "It is an indictment of global leadership that in this era of space travel and global access to computer and cell phone connectivity, that millions of children worldwide are being held back for want of what is surely a human right - education."
                }
              </Text>
            </GridItem>

            <GridItem
              colSpan={4}
              px={5}
              display={{ base: "none", lg: "block" }}
            >
              <Box as="div" my="auto">
                <Image
                  src="/placeholder/special_pr_building.png"
                  alt="Special Project"
                  width={400}
                  height={400}
                  quality={70}
                  loading="lazy"
                />
              </Box>
            </GridItem>

            <GridItem colSpan={10} px={{ base: 0, lg: 5 }}>
              <Box as="div" py="10px">
                <Center>
                  <Box
                    position="relative"
                    w={{
                      base: "100%",
                      lg: "800px",
                    }}
                    h={{
                      base: "fit-content",
                      lg: "375",
                    }}
                    textAlign="center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 840 375"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M398.823 10.9028C490.932 5.88679 593.04 -11.3428 670.355 11.7117C748.015 34.8693 750.928 84.2241 778.768 124.199C806.24 163.648 861.283 203.763 831.319 242.843C801.467 281.778 703.579 298.187 627.679 321.257C554.796 343.409 486.488 370.933 398.823 374.3C306.845 377.833 207.315 368.231 139.664 340.002C74.7473 312.914 76.9312 268.511 53.3381 230.136C31.0764 193.927 -16.5035 158.494 5.81316 122.291C28.4923 85.5012 99.3817 59.2561 171.229 38.8927C239.428 19.5636 318.782 15.2616 398.823 10.9028Z"
                        fill="#FFE168"
                      />
                    </svg>

                    <Text
                      as="p"
                      position="absolute"
                      top="50%"
                      left="0"
                      transform="translateY(-50%)"
                      mx="10%"
                      className="b2"
                      fontSize={{
                        base: "11px",
                        sm: "16px",
                        md: "lg",
                        lg: "xl",
                      }}
                      color="black"
                    >
                      {`UNICEF (N.D.) -600,000,000 children are unable to attain
                      minimum proficiency levels in reading and mathematics
                      UNESCO Institute for Statistics – 250,000,000 to
                      270,000,000 children are not attending school.`}
                    </Text>
                  </Box>
                </Center>
              </Box>
            </GridItem>

            <GridItem
              colSpan={{ base: 10, md: 8, lg: 6 }}
              p={{ lg: 5 }}
              borderRadius="13px"
              bg="theme.yellow"
            >
              <Box>
                <Text as="p" mt={1.5} mb={5} className="b2" color="black">
                  Through our special projects, the Academy will invest in
                  programs to help kids and communities find their potential
                  through education. Follow our progress on these initiatives
                  with the latest updates at {`Yak's`} Café. We and the
                  wonderful people who have similarly dedicated themselves to
                  the work of the Academy hope to enhance the lives of many: one
                  child at a time.
                </Text>

                <Text as="p" mt={1.5} mb={5} className="b2" color="black">
                  Yours very sincerely, <br />
                  Andy Wood
                </Text>
              </Box>
            </GridItem>

            <GridItem
              colSpan={{ base: 8, lg: 4 }}
              px={5}
              display={{ base: "block", lg: "none" }}
            >
              <Box as="div" my="auto">
                <Image
                  src="/placeholder/special_pr_building.png"
                  alt="Special Project"
                  width={400}
                  height={400}
                  quality={70}
                  loading="lazy"
                />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Box as="section" py="50px" bg={"theme.darkGreen"}>
        <Container maxW="container.xl">
          <Box mb="5">
            <Text as="h2" color="black">
              Special Projects
            </Text>
          </Box>
          <Grid templateColumns="repeat(10, 1fr)" gap={5}>
            {/* Card */}
            <GridItem
              colSpan={{ base: 10, lg: 5 }}
              id="the-global-story-writing-project"
            >
              <VStack
                h={{ base: "360px", md: "308px" }}
                p={5}
                bg="theme.yellow"
                borderRadius="13px"
                alignItems="flex-start"
              >
                <Text as="h2" mb="6">
                  The Global Story Writing Project
                </Text>

                <ReadMoreController
                  text="Stories are far more than entertainment. Written with heart and fascination, they have an alluring quality that we cling to throughout our lives, and they enable teachers and parents alike to guide children in the learning process."
                  maxLength={120}
                  mt="auto"
                />
              </VStack>
            </GridItem>
            {/* End Card */}

            {/* Card */}
            <GridItem
              colSpan={{ base: 10, lg: 5 }}
              id="educational-documentaries-series"
            >
              <VStack
                h="fit"
                minH="270px"
                p={5}
                bg="theme.yellow"
                borderRadius="13px"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Text as="h2" mb="6">
                  Educational Documentaries Series
                </Text>

                <ReadMoreController
                  text="From our most highly qualified teachers has emerged a desire to exceed basic curriculum content and delivery by producing world class documentaries on subjects of great interest that will benefit children (big and small) who are inspired to learn more about the world around them. We hope you'll join us - keep track with postings at Yak's Café."
                  maxLength={120}
                />
              </VStack>
            </GridItem>
            {/* End Card */}
            {/* Card */}
            <GridItem
              colSpan={{ base: 10, lg: 5 }}
              id="global-partnerships-project"
            >
              <VStack
                minH="270px"
                p={5}
                bg="theme.yellow"
                borderRadius="13px"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Text as="h2" mb="6">
                  Global Partnerships Project
                </Text>

                <ReadMoreController
                  text="Many NGOs and community organizations work diligently to enhance the lives of youth who find themselves institutionalized by poverty and war. We're reaching out to orphanages and refugee communities to offer assistance with formalized education only possible through online learning. We hope to enhance the self-image of these kids by developing personal pride, a sense of cohesion, and belonging reminiscent of the world's most highly rated boarding schools."
                  maxLength={120}
                />
              </VStack>
            </GridItem>
            {/* End Card */}
            {/* Card */}
            <GridItem
              colSpan={{ base: 10, lg: 5 }}
              id="esl-english-language-training"
            >
              <VStack
                h="fit"
                minH="270px"
                p={5}
                bg="theme.yellow"
                borderRadius="13px"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Text as="h2" mb="6">
                  ESL - English Language Training
                </Text>

                <ReadMoreController
                  text="Our staff includes several teachers who are state certified (USA) as TESOL educators. Once K-12 is fully operational, we will focus on building this program. We'll keep you posted at Yak's Café as we progress."
                  maxLength={120}
                />
              </VStack>
            </GridItem>
            {/* End Card  */}
          </Grid>
        </Container>
      </Box>

      {/* Stories */}
      <Box as="section" py="50px" bg={"theme.darkGreen"}>
        <Container maxW="container.xl">
          <Grid
            templateColumns="repeat(10, 1fr)"
            gap={{ base: 5, lg: 8 }}
            bg="theme.yellow"
            p={5}
            borderRadius="8px"
          >
            <GridItem colSpan={{ base: 12 }}>
              <Text as="h2" maxW="4xl">
                The Global Story Writing Project: An Introduction by Andy Wood
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 4 }}>
              <Text as="article" mb="6" className="b2">
                {`Amongst my fondest memories of early childhood (other than those things little boys do that we're not supposed to), are the occasions when my mother read bedside stories to me . . . tales of mesmerizing adventures told to a young mind who was absolutely certain that each word was true! After all these years, I can still picture the three bears coming home to find an unwanted visitor who'd helped herself to their bowls of delicious porridge! I can still picture the three little pigs building their homes and the big bad wolf threatening, “I'll huff and I'll puff and I'll blow your house down!”`}
              </Text>

              <Text as="article" mb="6" className="b2">
                You can probably remember the stories your mother or father read
                to you.
              </Text>

              <Text as="article" mb="6" className="b2">
                That we remember those moments speaks to the importance of early
                learning. What little sponges we are!
              </Text>

              <Text as="article" mb="6" className="b2">
                I can also recall the nightly ritual of reading bedtime stories
                to my son and how we both cherished those magical moments.
              </Text>

              <Text as="article" mb="6" className="b2">
                {
                  "The stories read to me weren't part of my kindergarten or elementary school curriculum. However, as sure as bears love big bowls of steaming porridge, the Academy has made certain to enhance our kindergarten and elementary school lessons with hearty helpings of charming stories. Our patented library has come together through the extraordinary efforts and creativity of students of all ages and unique backgrounds from around the world."
                }
              </Text>
            </GridItem>

            <GridItem colSpan={{ base: 12, md: 4 }}>
              <Text as="article" mb="6" className="b2">
                The accompanying graphics were drawn by refugees who we proudly
                employ as part of our passionate team.
              </Text>

              <Text as="article" mb="6" className="b2">
                {
                  "This project launch is as much about the charm and impact of these stories as it is about the good, innocent hearts of our lovable team (of mostly young students) who we've engaged to write them."
                }
              </Text>

              <Text as="article" mb="6" className="b2">
                {
                  "You'll meet our talented authors when you read these special stories to your children."
                }
              </Text>

              <Text as="article" mb="6" className="b2">
                {
                  "Unlike the children's books you find on bookstore shelves, our children's stories and their respective themes have been designed by Dr. Tam herself, reviewed by our diligent teachers, and professionally edited by certified editors. All this to meet specific curriculum objectives while also sending hungry young minds on fantastical journeys around the globe and beyond."
                }
              </Text>

              <Text as="article" mb="6" className="b2">
                Our students will learn English, phonetics, punctuation,
                vocabulary, sentence structure, and subject-specific content,
                all while being totally awed by the globe-trotting adventures of
                flying elephants and dancing cows.
              </Text>

              <Text as="article" mb="6" className="b2">
                On behalf of our writers, graphic designers, reviewing teachers
                and editors, welcome to The Global Story Writing Project!
              </Text>

              <Text as="article" mb="6" className="b2">
                Andy Wood
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      {/* end stories */}

      <Box
        as="section"
        id="join-yaks-cafe"
        py="50px"
        mb={{ base: 50, lg: 0 }}
        bg="theme.roseDust"
      >
        <Container maxW="container.xl">
          <Text as="h2" maxW="90%" mb="3" color="white">
            {
              "Join us at Yak's Café for announcements about developments and new courses being offered or revised and when you can access the new releases."
            }
          </Text>
          <Link href="/join-us-at-yaks-cafe" scroll={true}>
            <Box
              as="span"
              bg="theme.orange"
              color="#fff"
              px="5"
              py="3"
              mb="8"
              display="inline-block"
              borderRadius="13px"
              cursor="pointer"
              _hover={{
                bg: "theme.orange",
                color: "#fff",
                opacity: "0.8",
                textDecoration: "none",
              }}
              _active={{
                bg: "theme.orange",
                color: "#fff",
                opacity: "0.8",
                textDecoration: "none",
              }}
            >
              {`Let's yak!`}
            </Box>
          </Link>

          <Grid templateColumns="repeat(12, 1fr)" gap="8" mt="7">
            <GridItem colSpan={4}>
              <Image
                src="/placeholder/girl_scientist.png"
                alt="Girl Scientist"
                width={400}
                height={400}
                quality="70"
                loading="lazy"
              />
            </GridItem>

            <GridItem colSpan={4}>
              <Image
                src="/placeholder/African_Boy_Standing_in_Rain.png"
                alt="Girl Scientist"
                width={400}
                height={400}
                quality="70"
                loading="lazy"
              />
            </GridItem>

            <GridItem colSpan={4}>
              <Image
                src="/placeholder/Girl_Farmer.png"
                alt="Girl Scientist"
                width={400}
                height={400}
                quality="70"
                loading="lazy"
              />
            </GridItem>

            <GridItem colSpan={12}>
              <Image
                src="/placeholder/mexico_students.png"
                alt="Girl Scientist"
                width={400}
                height={400}
                quality="70"
                loading="lazy"
                style={{
                  borderRadius: "13px",
                  width: "100%",
                  height: "100%",
                  aspectRatio: "16/8",
                }}
              />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
