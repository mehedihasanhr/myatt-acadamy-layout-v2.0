import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
  Image as ChakraImage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useTheme,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Yak from "./Yak";
import { lighten } from "polished";

export default function About() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleBBClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOpen) {
      onClose();
    }
  };

  const _aboutBBnYak = (multiplier: number = 1) => {
    return (
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems={isOpen ? "center" : "end"}
        flexDirection={isOpen ? "column" : "row"}
        mr={"-8px"}
        onClick={handleBBClick}
        _hover={{
          cursor: "pointer",
        }}
        transform={{
          base: "translate(0,0)",
          md: isOpen ? "translate(0px, 0)" : "translate(0,0)",
        }}
      >
        <Box
          as="div"
          display={isOpen ? "none" : "block"}
          transform="scaleX(-1)"
        >
          <Image
            src="/landing/trimmed/about-bb.png"
            width={(() => 735 * 0.75)()}
            height={(() => 703 * 0.75)()}
            alt="about-the-academy-bb"
          />
        </Box>
        <Box
          as="div"
          position={isOpen ? "static" : "absolute"}
          top="10%"
          left={{ base: "38%", md: `${isOpen ? "0" : "38%"}` }}
          transform={{
            base: `translate(0%, -50%) rotate(${isOpen ? 0 : -2}deg)`,
            md: `translate(0%, -50%) rotate(${isOpen ? 0 : -2}deg)`,
          }}
          color="theme.yellow"
          fontSize={{ base: "md", md: "2xl" }}
          fontWeight={{ base: "500", md: "800" }}
          lineHeight="1.2"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
        >
          <Box as="span">About</Box>
          <Box as="span">the Academy</Box>
        </Box>
        <UnorderedList
          position={isOpen ? "static" : "absolute"}
          top={`${isOpen ? "58%" : "20%"}`}
          left={{ base: isOpen ? "0px" : "25%", md: "25%" }}
          transform={{
            base: `translate(0%, ${isOpen ? "0" : "0"}%) rotate(${
              isOpen ? 0 : -3
            }deg)`,
            md: `translate(0%, 0%) rotate(${isOpen ? "0" : "-3"}deg)`,
          }}
          listStyleType="none"
          display="flex"
          flexDir="column"
          gap={{ base: "4px", sm: "8px" }}
          color="theme.yellow"
          fontSize={{ base: "sm", md: isOpen ? "2xl" : "xl" }}
          fontWeight="400"
          w={{ base: "180px", md: "350px" }}
          h={{ base: `${isOpen ? "auto" : "240px"}`, md: "auto" }}
          overflow="hidden"
        >
          <ListItem>
            <Link
              href="#welcome_message_form_dr_myatt"
              onClick={handleLinkClick}
            >
              <Text
                as="span"
                display="block"
                color="theme.yellow"
                letterSpacing={{ base: "1.3px", lg: "1.7px" }}
                fontWeight="400"
              >
                Welcome message from Dr. Myatt
              </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#background" onClick={handleLinkClick}>
              <Text as="span">- Background</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#vision" onClick={handleLinkClick}>
              <Text as="span">- Vision </Text>
            </Link>
          </ListItem>
          <ListItem>
            -{" "}
            <Link href="#mission" onClick={handleLinkClick}>
              Mission
            </Link>
          </ListItem>
          <ListItem>
            -{" "}
            <Link href="#quality-assurance" onClick={handleLinkClick}>
              Quality Assurance
            </Link>
          </ListItem>

          <ListItem>
            -
            <Link
              href="#contribution-to-the-global-good"
              onClick={handleLinkClick}
            >
              Contribution to the Global Good
            </Link>
          </ListItem>
          <ListItem mb={5}>
            -{" "}
            <Link href="#our-promise" onClick={handleLinkClick}>
              Our Promise
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#contact" onClick={handleLinkClick}>
              Contact Us
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#testimonials" onClick={handleLinkClick}>
              Testimonials
            </Link>
          </ListItem>
          <ListItem>
            <Link href="?modal=staff" scroll={false} onClick={handleLinkClick}>
              Our Leadership Team
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    );
  };

  const { theme } = useTheme().colors;
  const lighterGreen = lighten(0.075, theme.mossGreen);

  return (
    <Box py="50px" id="about-us" bg={"theme.darkGreen"}>
      <Container maxW="container.xl">
        <Box
          as="div"
          display="flex"
          width="full"
          alignItems="end"
          justifyContent={{ base: "start", lg: "center" }}
          position="relative"
        >
          {_aboutBBnYak()}
          <Box
            display={{ base: "block", md: "none" }}
            as="div"
            color="theme.yellow"
            fontSize={{ base: "md", md: "xl" }}
            textAlign="center"
            position="absolute"
            top="82%"
            left="35%"
            transform="rotate(-2.5deg)"
          >
            {`(Click to view more)`}
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Yak flip={false} />
          </Box>
        </Box>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={{ base: "full", md: "bb" }}
          variant="bb"
        >
          <ModalOverlay />
          <ModalContent bg={isOpen ? "transparent" : "theme.pastelYellow"}>
            <ModalCloseButton color="theme.pastelYellow" />
            <ModalBody w="full" display="flex" justifyContent="center">
              {_aboutBBnYak(1.5)}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
}
