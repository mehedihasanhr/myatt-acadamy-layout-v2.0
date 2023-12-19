"use client";

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

const LegalPage = () => {
  return (
    <Container maxW="80%" mx="auto" my={7} py={7}>
      <Box>
        <Text as="h3" mb={4} textAlign="center">
          Legal Page
        </Text>
        <Accordion>
          {_.map(data.faqs, (faq, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize={16}>
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={14} lineHeight="23px">{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Container>
  );
};

export default LegalPage;
