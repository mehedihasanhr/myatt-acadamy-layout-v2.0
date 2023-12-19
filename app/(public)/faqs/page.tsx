"use client";
import * as React from "react";
import {useScrollToTop} from "@/hooks/useScrollToTop";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Text,
} from "@chakra-ui/react";
import { data } from "@/constants/data";
import _ from "lodash";

const FAQsPage = () => {
  useScrollToTop();
  return (
    <Box as="section" bg="theme.yellow" my={7} py={7}>
      <Container maxW="80%" mx="auto" >
        <Box>
          <Text as="h3" mb={4} textAlign="center">
            Frequently asked questions
          </Text>
          <Accordion>
            {_.map(data.faqs, (faq, index) => (
              <AccordionItem key={index} bg={"white"} rounded={8} border="1px solid rgb(0 0 0 / 20%)">
                <h2>
                  <AccordionButton _expanded={{ bg: 'rgb(0 0 0 / 10%)', color: '#131313' }} roundedTop={7}  >
                    <Box flex="1" textAlign="left" fontSize={16}>
                      {faq.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel py={4} fontSize={14} lineHeight="23px">{faq.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Container>
    </Box> 
  );
};

export default FAQsPage;
