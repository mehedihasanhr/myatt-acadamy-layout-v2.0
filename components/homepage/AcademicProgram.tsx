import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function AcademicProgram() {
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

  const _apBBnYak = (multiplier: number = 1) => {
    return (
      <Box
        as="div"
        position="relative"
        onClick={handleBBClick}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Box>
          <Image
            src="/landing/trimmed/academic-program-bb.png"
            width={(() => 560 * multiplier)()}
            height={(() => 620 * multiplier)()}
            alt="academic program blackborad"
          />
        </Box>
        <Text
          as="h1"
          position="absolute"
          top="6%"
          left="50%"
          transform="translate(-50%, 0%) rotate(-2deg)"
          color="theme.yellow"
          fontSize={
            multiplier > 1
              ? { base: "12px", sm: "28px" }
              : { base: "12px", sm: "xl" }
          }
          fontWeight={{ base: 500, md: 800 }}
          align="center"
          lineHeight="1.2"
        >
          <span>Academic</span> <br />
          <span>Programs</span>
        </Text>
        <Box
          position="absolute"
          top="20%"
          left="60%"
          transform="translate(-50%, 0%) rotate(-2deg)"
          w="60%"
        >
          <UnorderedList
            listStyleType="none"
            display="flex"
            flexDir="column"
            gap={{ base: "4px", sm: "16px" }}
            color="theme.yellow"
            fontSize={
              multiplier > 1
                ? { base: "xs", sm: "sm", md: "2xl" }
                : { base: "xs", sm: "sm", md: "xl" }
            }
            fontWeight="400"
            h={{ base: "130px", md: "auto" }}
            overflow="hidden"
          >
            {/* <ListItem>Availability Status</ListItem> */}
            <ListItem>
              <Link href="#school-section" onClick={handleLinkClick}>
                <Text
                  as="span"
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  School Sections
                </Text>
              </Link>
              <UnorderedList>
                <ListItem>
                  <Link
                    href="?school-tab=1#school-section"
                    onClick={handleLinkClick}
                  >
                    <Text as="span">
                      Early Childhood
                      <Box as="span" display={{ base: "none", md: "inline" }}>
                        {" "}
                        (ages 3-5)
                      </Box>
                    </Text>
                  </Link>
                  <UnorderedList pl={5}>
                    <ListItem>
                      <Link
                        href="?school-tab=1#school-section"
                        onClick={handleLinkClick}
                      >
                        Preschool
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link
                        href="?school-tab=1#school-section"
                        onClick={handleLinkClick}
                      >
                        Kindergarten
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </ListItem>

                <ListItem>
                  <Link
                    href="?school-tab=2#school-section"
                    onClick={handleLinkClick}
                  >
                    Elementary School (Grades 1-6)
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="?school-tab=3#school-section"
                    onClick={handleLinkClick}
                  >
                    Middle School (Grades 7-9)
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="?school-tab=4#school-section"
                    onClick={handleLinkClick}
                  >
                    High School (Grades 10-12)
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="?school-tab=5#school-section"
                    onClick={handleLinkClick}
                  >
                    The Reading Tree (all ages)
                  </Link>
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
          <Box
            as="div"
            display={{ md: "none" }}
            color="theme.yellow"
            fontSize={{ base: "xs", sm: "sm", md: "xl" }}
            letterSpacing="4px"
            textAlign="center"
          >
            {`...`}
          </Box>
          <Box
            as="div"
            display={{ md: "none" }}
            color="theme.yellow"
            fontSize={{ base: "xs", sm: "sm", md: "xl" }}
            textAlign="center"
          >
            {`(Click to view more)`}
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box pt="100px" pb="50px" id="programs" bg="theme.pastelYellow">
      <Container maxW="container.xl">
        <Box
          as="div"
          display="flex"
          width="full"
          alignItems="end"
          justifyContent="center"
        >
          {_apBBnYak()}
          <Box ml={"-64px"}>
            <Image
              src="/landing/yak-academic-program.png"
              width={348}
              height={407}
              alt="yak"
            />
          </Box>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={{ base: "full", md: "bb" }}
          >
            <ModalOverlay />
            <ModalContent bg="theme.pastelYellow">
              <ModalCloseButton />
              <ModalBody w="full" display="flex" justifyContent="center">
                {_apBBnYak(1.2)}
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </Container>
    </Box>
  );
}
