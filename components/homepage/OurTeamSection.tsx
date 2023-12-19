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
  UnorderedList,
  ListItem,
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
import Link from "next/link";

export default function OurTeamSection() {
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

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOpen) {
      onClose();
    }
  };
  const _ourTeam = (multiplier: number = 0.75) => {
    return (
      <Box
        position="relative"
        _hover={{ cursor: "pointer" }}
        display="flex"
        justifyContent="center"
        w="full" 
        mr={isOpen ? "0px" : "0px"}
      >
        <Box
          maxW="100%"
          display={{ base: isOpen ? "none" : "block", xl: "block" }}
        >
          <Image
            src="/landing/trimmed/about-bb-2.png"
            width={(() => 735 * 0.65)()}
            height={(() => 703 * 0.65)()}
            alt="our-team-blackboard"
          />
        </Box>
        <Text
          as="h1"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="800"
          color="theme.yellow"
          letterSpacing="0.8px"
          align="center"
          position="absolute"
          top={{ base: "6%", md: isOpen ? "0%" : "8%" }}
          left={isOpen ? "50%" : "50%"}
          transform={`translate(-50%, 0%) rotate(${isOpen ? 0 : 2}deg)`}
        >
          <Box as="span">Our Team</Box>
        </Text>

        <UnorderedList
          position={isOpen ? "absolute" : "absolute"}
          top={`${isOpen ? "15%" : "20%"}`}
          left={{ base: isOpen ? "50%" : "22%", md: "20%" }}
          transform={{
            base: `translate(${isOpen ? "-50" : "0"}%, ${
              isOpen ? "0" : "0"
            }%) rotate(${isOpen ? 0 : 2}deg)`,
            md: `translate(0%, 10%) rotate(${isOpen ? "0" : "2"}deg)`,
          }}
          listStyleType="none"
          display="flex"
          flexDir="column"
          gap={{ base: "4px", sm: "8px" }}
          color="theme.yellow"
          fontSize={{ base: "md", md: isOpen ? "2xl" : "xl" }}
          fontWeight="400"
          w={{ base: "180px", md: "350px" }}
          h={{ base: `${isOpen ? "auto" : "240px"}`, md: "auto" }}
          overflow="hidden"
        >
          <ListItem>
            <Link href="#background" onClick={handleLinkClick}>
              Background: Dr. Tamara Myatt{" "}
            </Link>{" "}
          </ListItem>
          <ListItem>
            <Link href="?modal=staff" scroll={false} onClick={handleLinkClick}>
              Our Leadership Team
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="?modal=teachers&shift=early-childhood-ages-3-5"
              scroll={false}
              onClick={handleLinkClick}
            >
              Teachers
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="?modal=staff" scroll={false} onClick={handleLinkClick}>
              {" "}
              Interns{" "}
            </Link>
          </ListItem> */}
        </UnorderedList>
      </Box>
    );
  };
  return (
    <Box as="section" py="50px" bg="theme.copperRed" id="our-teams">
      <Box as="div" py="4">
        <Container maxW="container.xl">
          <HStack onClick={handleBBClick} align="end" justify="center">
            <Box display={{ base: "none", md: "block" }}>
              <Yak flip={true} />
            </Box>
            <Box display="flex" flexDirection="column" position="relative">
              {_ourTeam()}
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
              bg={{ base: "transparent", xl: "theme.pastelYellow" }}
              height={{ base: "100%", xl: "500px" }} // Set custom height here
            >
              <ModalCloseButton color="theme.pastelYellow" />
              <ModalBody w="full" display="flex" justifyContent="center">
                {_ourTeam(1.25)}
              </ModalBody>
            </ModalContent>
          </Modal>
        </Container>
      </Box>
    </Box>
  );
}
