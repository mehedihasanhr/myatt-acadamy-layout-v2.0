import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  Image as ChakraImage,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
// import EducatorsIcon from "@/assets/Icons/educators.png";
// import InternationalEarthIcon from "@/assets/Icons/international.png";
// import CalenderIcon from "@/assets/Icons/calender.png";
// import ScheduleIcon from "@/assets/Icons/schedule.png";
// import TeacherCapIcon from "@/assets/Icons/teacher.png";
// import MulticulturalIcon from "@/assets/Icons/multicultural.png";
// import BeneficiariesIcon from "@/assets/Icons/beneficiaries.png";
// import CharityIcon from "@/assets/Icons/charity.png";
// import LearnCapIcon from "@/assets/Icons/learn.png";
// import MacBookIcon from "@/assets/Icons/macbook.png";
import Image from "next/image";
import Yak from "@/components/homepage/Yak";

export default function Advantages() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const breakpoint = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  const handleBBClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpen();
  };
  const _advantages = (multiplier: number = 0.75) => {
    return (
      <Box
        position="relative"
        _hover={{ cursor: "pointer" }}
        display="flex"
        justifyContent="center"
        w="full"
        mr={isOpen ? "0px" : "0px"}
      >
        <Box maxW="100%" display={{ base: isOpen ? "none" : "block" }}>
          <Image
            src="/landing/advantages-bb-2.png"
            width={(() => 1265 * multiplier)()}
            height={(() => 625 * multiplier)()}
            alt="Advantages you'll find with the Academy"
          />
        </Box>
        <Text
          display={{ base: "none", md: "block" }}
          as="h1"
          fontSize={"2xl"}
          fontWeight="800"
          color="theme.yellow"
          letterSpacing="0.8px"
          align="center"
          position="absolute"
          top={{ base: "10%", md: isOpen ? "0%" : "10%" }}
          left={isOpen ? "50%" : "45%"}
          transform={`translate(-50%, 0%) rotate(${isOpen ? 0 : 2}deg)`}
        >
          <Box as="span">
            <span>{`Advantages you'll find`}</span> <br />
            <span>with the Academy</span>
          </Box>
        </Text>
        <Text
          display={{ base: "block", md: "none" }}
          as="h1"
          fontSize={"sm"}
          fontWeight="800"
          color="theme.yellow"
          letterSpacing="0.8px"
          align="center"
          position="absolute"
          top={{ base: "10%", md: isOpen ? "0%" : "10%" }}
          left={isOpen ? "44%" : "42%"}
          transform={`translate(-50%, 0%) rotate(${isOpen ? 0 : 2}deg)`}
        >
          <Box as="span">
            <span>Advantages</span>
          </Box>
        </Text>
        <Grid
          p={5}
          templateColumns="repeat(10, 1fr)"
          gap={isOpen ? 7 : 5}
          position="absolute"
          top="25%"
          left={isOpen ? "50%" : "43%"}
          transform={`translate(-50%, 0%) rotate(${isOpen ? 0 : 2}deg)`}
          width={(() => (isOpen ? 720 * 1.2 : 720))()}
          maxW="85%"
          maxH={{ base: isOpen ? "auto" : "120px", lg: "100%" }}
          overflow="hidden"
        >
          <GridItem
            colSpan={{
              base: 10,
              lg: 5,
            }}
          >
            <VStack gap={3} alignItems="flex-start">
              <Box display="flex" gap={6} alignItems="center">
                <Image
                  src="/landing/icons/educators.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  style={{ flexBasis: "20px" }}
                />
                <Text
                  as="span"
                  fontSize={{
                    base: isOpen ? "18px" : "16px",
                    md: isOpen ? "18px" : "16px",
                  }}
                  fontWeight="400"
                  lineHeight="160%"
                  color="theme.yellow"
                >
                  team excellence - all professional educators, certified,
                  qualified, experienced, and individually chosen
                </Text>
              </Box>
              <Box display="flex" gap={6} alignItems="center">
                <Image
                  src="/landing/icons/international.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  style={{ flexBasis: "20px" }}
                />
                <Text
                  as="span"
                  fontSize={{
                    base: isOpen ? "18px" : "16px",
                    md: isOpen ? "18px" : "16px",
                  }}
                  fontWeight="400"
                  lineHeight="160%"
                  color="theme.yellow"
                >
                  international in scope
                </Text>
              </Box>
              <Box display="flex" gap={6} alignItems="center">
                <Image
                  src="/landing/icons/calendar.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  style={{ flexBasis: "20px" }}
                />
                <Text
                  as="span"
                  fontSize={{
                    base: isOpen ? "18px" : "16px",
                    md: isOpen ? "18px" : "16px",
                  }}
                  fontWeight="400"
                  lineHeight="160%"
                  color="theme.yellow"
                >
                  standardized content based on US Common Core and Canadian
                  Curriculum
                </Text>
              </Box>
              <Box display="flex" gap={6} alignItems="center">
                <Image
                  src="/landing/icons/schedule.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  style={{ flexBasis: "20px" }}
                />
                <Text
                  as="span"
                  fontSize={{
                    base: isOpen ? "18px" : "16px",
                    md: isOpen ? "18px" : "16px",
                  }}
                  fontWeight="400"
                  lineHeight="160%"
                  color="theme.yellow"
                >
                  progress tracking, on a course-by course basis
                </Text>
              </Box>
              <Box display="flex" gap={6} alignItems="center">
                <Image
                  src="/landing/icons/teacher.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  style={{ flexBasis: "20px" }}
                />
                <Text
                  as="span"
                  fontSize={{
                    base: isOpen ? "18px" : "16px",
                    md: isOpen ? "18px" : "16px",
                  }}
                  fontWeight="400"
                  lineHeight="160%"
                  color="theme.yellow"
                >
                  the Academy is founded and led by experienced and certified
                  teachers with advanced academic qualifications
                </Text>
              </Box>
            </VStack>
          </GridItem>

          <GridItem
            colSpan={{
              base: 10,
              lg: 5,
            }}
          >
            <VStack alignItems="flex-start" gap={6}>
              <Box display="flex" gap={6} alignItems="center">
                <Image
                  src="/landing/icons/multicultural.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  style={{ flexBasis: "20px" }}
                />
                <Text
                  as="span"
                  fontSize={{
                    base: isOpen ? "18px" : "16px",
                    md: isOpen ? "18px" : "16px",
                  }}
                  fontWeight="400"
                  lineHeight="160%"
                  color="theme.yellow"
                >
                  an international, multicultural team of educators who
                  represent our multinational audience and who enrich the
                  learning experience for our students.
                </Text>
              </Box>
              <Box display="flex" gap={6} alignItems="center">
                <Image
                  src="/landing/icons/beneficiaries.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  style={{ flexBasis: "20px" }}
                />
                <Text
                  as="span"
                  fontSize={{
                    base: isOpen ? "18px" : "16px",
                    md: isOpen ? "18px" : "16px",
                  }}
                  fontWeight="400"
                  lineHeight="160%"
                  color="theme.yellow"
                >
                  perfect for homeschooler and kids needing academic support
                </Text>
              </Box>
              <Box display="flex" gap={6} alignItems="center">
                <Image
                  src="/landing/icons/charity.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  style={{ flexBasis: "20px" }}
                />
                <Text
                  as="span"
                  fontSize={{
                    base: isOpen ? "18px" : "16px",
                    md: isOpen ? "18px" : "16px",
                  }}
                  fontWeight="400"
                  lineHeight="160%"
                  color="theme.yellow"
                >
                  respectful of parents and family values - no part of our
                  content reflects social, political or religious
                  activism/extremism
                </Text>
              </Box>
              <Box display="flex" gap={6} alignItems="center">
                <Image
                  src="/landing/icons/learn.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  style={{ flexBasis: "20px" }}
                />
                <Text
                  as="span"
                  fontSize={{
                    base: isOpen ? "18px" : "16px",
                    md: isOpen ? "18px" : "16px",
                  }}
                  fontWeight="400"
                  lineHeight="160%"
                  color="theme.yellow"
                >
                  personalized learning
                </Text>
              </Box>
              <Box display="flex" gap={6} alignItems="center">
                <Image
                  src="/landing/icons/macbook.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  style={{ flexBasis: "20px" }}
                />
                <Text
                  as="span"
                  fontSize={{
                    base: isOpen ? "18px" : "16px",
                    md: isOpen ? "18px" : "16px",
                  }}
                  fontWeight="400"
                  lineHeight="160%"
                  color="theme.yellow"
                >
                  interactive lessons
                </Text>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    );
  };
  return (
    <Box
      as="section"
      py="50px"
      bg={isOpen ? "transparent" : "theme.pastelYellow"}
    >
      <Box as="div" py="4">
        <Container maxW="container.xl">
          <HStack onClick={handleBBClick} align="end">
            <Box display={{ base: "none", md: "block" }}>
              <Yak flip={true} />
            </Box>
            <Box display="flex" flexDirection="column" position="relative">
              {_advantages()}
              <Box
                display={{ base: "block", md: "none" }}
                as="div"
                color="theme.yellow"
                fontSize={{ base: "md", md: "xl" }}
                textAlign="center"
                position="absolute"
                top="78%"
                left="20%"
                transform="rotate(2deg)"
              >
                {`(Click to view more)`}
              </Box>
            </Box>
          </HStack>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={{ base: "full", xl: "bb" }}
            variant="bb"
          >
            <ModalOverlay />
            <ModalContent
              bg={{
                base: "transparent",
                xl: isOpen ? "transparent" : "theme.pastelYellow",
              }}
              height={{ base: "100%", xl: "600px" }} // Set custom height here
            >
              <ModalCloseButton color="theme.pastelYellow" />
              <ModalBody w="full" display="flex" justifyContent="center">
                {_advantages(1.25)}
              </ModalBody>
            </ModalContent>
          </Modal>
        </Container>
      </Box>
    </Box>
  );
}
