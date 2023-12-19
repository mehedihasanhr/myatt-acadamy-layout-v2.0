"use client";

import { Box, Circle, Container, Flex, Image, Link } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import SearchBox from "@/components/SearchBox";

const SearchMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchbarOpen, setSearchbarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleSearchbar = () => {
    setSearchbarOpen(!isSearchbarOpen);
  };

  useEffect(() => {
    if (isSearchbarOpen) {
      setIsVisible(true);
    } else {
      // Add a delay before hiding to allow the fade-out effect
      const timeout = setTimeout(() => {
        setIsVisible(false);
        clearTimeout(timeout);
      }, 300); // Adjust the duration to match your transition duration
    }
  }, [isSearchbarOpen]);

  return (
    <Container
      maxW={{
        xl: "container.xl",
      }}
      mb={{ base: 4, lg: 8, xl: 16 }}
    >
      <Flex py={5} justifyContent="space-between" alignItems="center">
        <Link href="/">
          <Image
            width="auto"
            height={{ base: "25px", md: "42px" }}
            src="/logo-2.png"
            alt="logo"
          />
        </Link>
        {isSearchbarOpen ? (
          <Box
            width="100vw"
            height="100vh"
            position="fixed"
            inset="0"
            background="rgba(0, 0, 0, .25)"
            opacity={isVisible ? 1 : 0}
            visibility={isVisible ? "visible" : "hidden"}
            pointerEvents={isVisible ? "auto" : "none"} // Enable pointer events when visible
            transition="opacity .3s, visibility .3s"
            display="flex"
            justifyContent="center"
            alignItems="center"
            px="24px"
            pb="64px"
            onClick={toggleSearchbar}
          >
            <SearchBox isSearchbarOpen={isSearchbarOpen} />
          </Box>
        ) : (
          <SearchBox isSearchbarOpen={isSearchbarOpen} />
        )}
        <Flex alignItems="center" gap={{ base: 2, md: 4 }}>
          <Image
            src="/icons/search.svg"
            alt="search"
            width={{ base: "20px", md: "36px" }}
            height={{ base: "20px", md: "36px" }}
            display={{
              base: `${!isSearchbarOpen ? "block" : "none"}`,
              lg: "none",
            }}
            onClick={toggleSearchbar}
          />
          <Image
            src="/icons/bell.svg"
            alt="bell"
            width={{ base: "20px", md: "36px" }}
            height={{ base: "20px", md: "36px" }}
          />
          <Image
            src="/icons/cart.svg"
            alt="cart"
            width={{ base: "20px", md: "36px" }}
            height={{ base: "20px", md: "36px" }}
          />
          <Circle
            size={{ base: "20px", md: "44px" }}
            overflow="hidden"
            shadow="custom"
          >
            <Image
              width={{ base: "20px", md: "44px" }}
              height={{ base: "20px", md: "44px" }}
              src="/assets/placeholder.png"
              alt="placeholder"
            />
          </Circle>
        </Flex>
      </Flex>
    </Container>
  );
};

export default SearchMenu;
