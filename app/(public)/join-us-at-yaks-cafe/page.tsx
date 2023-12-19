"use client";
import React, { useEffect } from "react";

import {
  Box,
  Text,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import _ from "lodash";
import Yak from "@/components/homepage/Yak";
import ScrollTop from "@/components/ScrollTop";
import YaksImageLargeScreen from "@/components/join-us-at-yaks-cafe/YaksImageLargeScreen";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Notice } from "@/types";
import { data } from "@/constants/data";

const JoinUsAtYaksCafe = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useScrollToTop();

  const handleBBClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpen();
  };

  useEffect(() => {
    console.log(process.env.DEBUG);

    if (process.env.DEBUG && false) {
      onOpen();
    }
  }, [onOpen]);

  const _innerContent = () => {
    return (
      <Grid templateColumns="repeat(10, 1fr)" gap={3}>
        <GridItem colSpan={10}>
          <Flex
            direction="column"
            gap={2}
            bg="theme.pastelYellow"
            padding={4}
            borderRadius={10}
          >
            <Text
              as="h1"
              fontSize="md"
              fontWeight="400"
              color="theme.dark"
              textAlign={{ base: "left", lg: "center" }}
            >
              The Dr. Myatt Academy of Learning
            </Text>
            <Text
              fontFamily="Open Sans"
              fontSize="md"
              fontWeight="400"
              color="theme.dark"
              textAlign={{ base: "left", lg: "center" }}
            >
              {`December 1, 2023 - Yip yip yippee - we've launched!`}
            </Text>
            <Text
              fontFamily="Open Sans"
              fontSize="md"
              fontWeight="400"
              color="theme.dark"
              textAlign={{ base: "left", lg: "center" }}
            >
              {`Here's what's coming in 2024!`}
            </Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={10}>
          {_.map(data.yaksPageData, (item: Notice, index: number) => {
            return (
              <Grid
                templateColumns="repeat(10, 1fr)"
                bg="theme.pastelYellow"
                padding={4}
                borderRadius={10}
                mb={4}
                justifyItems="start"
                gap={2}
              >
                <GridItem colSpan={{ base: 10, lg: 2 }}>
                  <Text
                    fontFamily="Open Sans"
                    fontSize="md"
                    fontWeight="400"
                    bg="theme.darkGreen"
                    display="inline-block"
                    color="theme.dark"
                    px={2}
                    py={1}
                    borderRadius={3}
                  >
                    {item.date}
                  </Text>
                </GridItem>
                <GridItem colSpan={{ base: 10, lg: 8 }}>
                  <Text
                    fontFamily="Open Sans"
                    fontSize="md"
                    fontWeight="400"
                    color="theme.dark"
                    textAlign="left"
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    alignItems="start"
                  >
                    <Box
                      as="span"
                      bg="theme.darkGreen"
                      display="inline"
                      color="theme.dark"
                      px={2}
                      py={1}
                      borderRadius={3}
                    >
                      {item.type}
                    </Box>
                    <Box as="span" fontWeight="400">
                      {item.message}
                    </Box>
                  </Text>
                </GridItem>
              </Grid>
            );
          })}
        </GridItem>
        <GridItem colSpan={10}>
          <Flex
            direction="column"
            gap={2}
            bg="theme.pastelYellow"
            padding={4}
            borderRadius={10}
            alignItems="start"
          >
            <Text
              fontFamily="Open Sans"
              fontSize="md"
              fontWeight="400"
              color="theme.dark"
              textAlign={{ base: "left", lg: "center" }}
            >
              {`Our team of great teachers are working diligently to complete our
              curriculum. We'll keep you updated as we progress`}
            </Text>
            <Text
              fontFamily="Open Sans"
              fontSize="md"
              fontWeight="400"
              color="theme.dark"
              textAlign={{ base: "left", lg: "center" }}
            >
              {`Stay tuned, friends! Great programs in store! Can't wait!`}
            </Text>
            <Text
              fontFamily="Open Sans"
              fontSize="md"
              fontWeight="400"
              color="theme.dark"
              textAlign="center"
            >
              Yak
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    );
  };

  const _yakAtCafe = (multiplier: number = 0.95) => {
    return (
      <Box as="div" position="relative" textAlign="center">
        <Box
          as="div"
          display={isOpen ? "none" : "block"}
          w={{ base: "1000px", md: "auto" }}
        >
          <Image
            src="/landing/trimmed/about-bb-2.png"
            width={(() => 444 * multiplier)()}
            height={(() => 720 * multiplier)()}
            alt="yaks-cafe-bb"
          />
        </Box>
        <Text
          as="h3"
          fontSize={{ base: "md", md: "2xl" }}
          fontWeight="800"
          color="theme.pastelYellow"
          fontFamily="var(--font-schoolbell)"
          position={isOpen ? "static" : "absolute"}
          top="8%"
          left="38%"
          transform={`rotate(${isOpen ? 0 : 3}deg)`}
          textAlign="center"
          mb={isOpen ? "16px" : "0px"}
        >
          {`Yak's Cafe`}
        </Text>
        <Box
          as="div"
          position={isOpen ? "static" : "absolute"}
          top="20%"
          left={{ base: isOpen ? "25%" : "16%", md: "13%" }}
          transform={`translate(0%, 0%) rotate(${isOpen ? 0 : 3}deg)`}
          w={{ base: isOpen ? "auto" : "190px", md: "auto" }}
          h={{ base: "195px", md: "auto" }}
          maxW={isOpen ? "80%" : "220px"}
          m={"0 auto"}
          border="1px solid transparent"
        >
          {isOpen ? (
            _innerContent()
          ) : (
            <>
              <Text
                as="div"
                fontSize={{ base: "xl", md: isOpen ? "3xl" : "2xl" }}
                color="theme.pastelYellow"
                mb="8px"
                transform={{
                  base: "none",
                  md: `translate(${isOpen ? "0" : "40px"}, 0)`,
                }}
              >
                COMING SOON!
              </Text>
              <Text
                as="div"
                fontSize={{ base: "md", md: isOpen ? "2xl" : "xl" }}
                lineHeight="180%"
                color="theme.pastelYellow"
                mb="8px"
                width={{ base: "150px", md: "300px" }}
                height={{ base: isOpen ? "auto" : "150px", md: "auto" }}
                overflow={isOpen ? "auto" : "hidden"}
              >
                {
                  "We are always updating our content, revising existing lessons, and developing new ones. Click here to find out what we're working on and when it will be available to you. Psst...please be patient, ...magic takes time :-)"
                }
              </Text>
            </>
          )}
        </Box>
        <Box
          display={{ base: isOpen ? "none" : "block", md: "block" }}
          as="div"
          color="theme.pastelYellow"
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          position="absolute"
          top="82%"
          left="40%"
          transform="translate(-50%) rotate(2deg)"
          py={1}
          px={2}
          border="1px solid"
          borderColor="theme.pastelYellow"
          borderRadius="10px"
        >
          {`Read More`}
        </Box>
      </Box>
    );
  };

  return (
    <>
      {/* <YaksImageLargeScreen /> */}
      <Box
        maxWidth="100vw"
        height="100vh"
        overflow="hidden"
        bgImage="url('/landing/yaks-cafe.png')"
        bgSize="cover"
        bgPosition="center"
      >
        <ScrollTop />
        <Flex
          justifyContent="end"
          alignItems={{ base: "center", md: "end" }}
          h="full"
          w="90%"
        >
          <Box
            display={{ base: "none", md: "block" }}
            transform="translateY(-45px)"
          >
            <Yak flip={true} />
          </Box>
          <Box as="div" _hover={{ cursor: "pointer" }} onClick={handleBBClick}>
            {_yakAtCafe(1)}
          </Box>
          <Modal isOpen={isOpen} onClose={onClose} size="full" variant="bb">
            <ModalOverlay />
            <ModalContent bg="transparent">
              <ModalCloseButton color="theme.pastelYellow" />
              <ModalBody w="full" display="flex" justifyContent="center">
                {_yakAtCafe(0.75)}
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Box>
    </>
  );
};

export default JoinUsAtYaksCafe;
