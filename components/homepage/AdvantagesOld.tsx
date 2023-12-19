import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import EducatorsIcon from "@/assets/Icons/educators.png";
import InternationalEarthIcon from "@/assets/Icons/international.png";
import Calender from "@/assets/Icons/calender.png";
import ScheduleIcon from "@/assets/Icons/schedule.png";
import TeacherCapIcon from "@/assets/Icons/teacher_cap.png";
import MulticulturalIcon from "@/assets/Icons/multicultural.png";
import BeneficiariesIcon from "@/assets/Icons/beneficiaries.png";
import CharityIcon from "@/assets/Icons/charity.png";
import LearnCapIcon from "@/assets/Icons/learn.png";
import MacBookIcon from "@/assets/Icons/macbook.png";
import Image from "next/image";

export default function Advantages() {
  return (
    <Box as="section" py="50px" bg="theme.pastelYellow">
      <Box as="div" py="4">
        <Container maxW="container.xl">
          <Box as="div" py={16}>
            <Text
              as="h1"
              fontSize={{
                base: "xl",
                md: "3xl",
                lg: "4xl",
              }}
              mb={7}
              color="white"
            >
              {"Advantages you'll find with the Academy"}
            </Text>

            <Grid templateColumns="repeat(10, 1fr)" gap={5}>
              <GridItem
                colSpan={{
                  base: 10,
                  md: 6,
                  lg: 4,
                }}
              >
                <VStack gap={6} alignItems="flex-start">
                  <HStack gap={6}>
                    <Box w={24} h={14}>
                      <Image
                        src={EducatorsIcon}
                        alt="Icon"
                        width={60}
                        height={60}
                      />
                    </Box>
                    <Text as="span" className="b2">
                      team excellence - all professional educators, certified,
                      qualified, experienced, and individually chosen
                    </Text>
                  </HStack>
                  <HStack gap={6}>
                    <Box w={12} h={12}>
                      <Image
                        src={InternationalEarthIcon}
                        alt="Icon"
                        width={60}
                        height={60}
                      />
                    </Box>
                    <Text as="span" className="b2">
                      international in scope
                    </Text>
                  </HStack>

                  <HStack gap={6}>
                    <Box as="div" w={14} h={9}>
                      <Image src={Calender} alt="Icon" />
                    </Box>
                    <Text as="span" className="b2">
                      standardized content based on US Common Core and Canadian
                      Curriculum
                    </Text>
                  </HStack>

                  <HStack gap={6}>
                    <Box as="div" w="42px" h="42px">
                      <Image src={ScheduleIcon} alt="Icon" />
                    </Box>
                    <Text as="span" className="b2">
                      progress tracking, on a course-by course basis
                    </Text>
                  </HStack>

                  <HStack gap={6}>
                    <Box as="div" minW="42px" w="42px" h="60px">
                      <Image
                        src={TeacherCapIcon}
                        alt="Icon"
                        width={60}
                        height={60}
                      />
                    </Box>
                    <Text as="span" className="b2">
                      the Academy is founded and led by experienced and
                      certified teachers with advanced academic qualifications
                    </Text>
                  </HStack>
                </VStack>
              </GridItem>

              <GridItem
                colSpan={{
                  base: 10,
                  md: 6,
                  lg: 4,
                }}
              >
                <VStack alignItems="flex-start" gap={6}>
                  <HStack gap={6}>
                    <Box as="div" minW="42px" w="42px" h="42px">
                      <Image src={MulticulturalIcon} alt="Icon" />
                    </Box>
                    <Text as="span" className="b2">
                      an international, multicultural team of educators who
                      represent our multinational audience and who enrich the
                      learning experience for our students.
                    </Text>
                  </HStack>
                  <HStack gap={6}>
                    <Box as="div" minW="42px" w="42px" h="42px">
                      <Image src={BeneficiariesIcon} alt="Icon" />
                    </Box>
                    <Text as="span" className="b2">
                      perfect for homeschooler and kids needing academic support
                    </Text>
                  </HStack>

                  <HStack gap={6}>
                    <Box as="div" minW="42px" w="42px" h="42px">
                      <Image src={CharityIcon} alt="Icon" />
                    </Box>
                    <Text as="span" className="b2">
                      respectful of parents and family values - no part of our
                      content reflects social, political or religious
                      activism/extremism
                    </Text>
                  </HStack>

                  <HStack gap={6}>
                    <Box as="div" minW="42px" w="42px" h="42px">
                      <Image src={LearnCapIcon} alt="Icon" />
                    </Box>
                    <Text as="span" className="b2">
                      personalized learning
                    </Text>
                  </HStack>

                  <HStack gap={6}>
                    <Box as="div" minW="42px" w="42px" h="42px">
                      <Image src={MacBookIcon} alt="Icon" />
                    </Box>
                    <Text as="span" className="b2">
                      interactive lessons
                    </Text>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
