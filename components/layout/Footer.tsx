"use client";
import React from "react";
import { footerLinks } from "@/constants/footer";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Grid,
  GridItem,
  Show,
  Text,
} from "@chakra-ui/react";
import _ from "lodash";
import { useWindowSize } from "react-use";
import Link from "next/link";

const Footer = () => {
  const { width } = useWindowSize();

  return (
    <Box as="section" py="16" bg="theme.yellow">
      <Container maxW="container.xl">
        <Accordion
          allowToggle
          defaultIndex={width <= 768 ? 0 : [0, 1, 2, 3, 4]}
          border="none"
          shadow="none"
        >
          <Grid templateColumns="repeat(10, 1fr)" gap={{ base: 1, lg: 5 }}>
            {_.map(footerLinks, (links, index) => (
              <GridItem
                key={index}
                colSpan={{
                  base: 10,
                  md: 2,
                  lg: 2,
                  xl: 2,
                }}
              >
                <AccordionItem border="none" shadow="none">
                  <Box
                    as="h3"
                    fontSize="16px"
                    fontWeight="800"
                    textTransform="uppercase"
                    mb={{ base: "4", md: "8" }}
                  >
                    <AccordionButton
                      cursor={{ base: "pointer", md: "default" }}
                      _hover={{
                        bg: { md: "transparent" },
                      }}
                      fontSize="sm"
                    >
                      {links.header}
                      <Show breakpoint="(max-width: 768px)">
                        <AccordionIcon />
                      </Show>
                    </AccordionButton>
                  </Box>
                  <AccordionPanel border="none">
                    <Box>
                      <Box as="div" listStyleType="none" fontSize="sm">
                        {_.map(links.links, (link, index) => (
                          <Box as="li" key={index} mb="6">
                            <Link href={link.url} scroll={link.scroll}>
                              <Text
                                as="span"
                                _hover={{
                                  color: "theme.dark",
                                  textDecoration: "underline",
                                }}
                                ml={{ base: 3, md: 0 }}
                                fontSize="md"
                              >
                                {link.name}
                              </Text>
                            </Link>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </GridItem>
            ))}
          </Grid>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Footer;
