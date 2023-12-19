"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Container,
  Flex,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box
      as="nav"
      bg="theme.darkGreen"
      h="40px"
      display={{ base: "none", md: "flex" }}
      alignItems="center"
    >
      <Container maxW="container.xl" centerContent>
        <Flex alignItems="center">
          <UnorderedList
            display="flex"
            alignItems="center"
            listStyleType="none"
            gap="58px"
            className="b4"
            fontSize="16px"
          >
            <ListItem>
              <Link href="/landing/#programs">PROGRAMS</Link>
            </ListItem>

            <ListItem>
              <Link href="/landing/#about-us">ABOUT US</Link>
            </ListItem>

            <ListItem>
              <Link href="/landing/#our-teams">OUR TEAM</Link>
            </ListItem>

            <ListItem>
              <Link href="/landing/#special-programs">SPECIAL PROJECTS</Link>
            </ListItem>

            <ListItem>
              <Link href="/landing/#contact">CONTACT</Link>
            </ListItem>

            <ListItem>
              <Link href="/landing/#our-promise">OUR PROMISE</Link>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
