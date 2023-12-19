"use client";
 
import { Box, Center, Container, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const ComingSoonPage = () => {
  return (
    <Container maxW="80%" mx="auto" mt={7}>
      <Center>
        <Box>
          <Image src="/hero/sun.png" alt="404" width={500} height={500} />
        </Box>
        <VStack spacing={3}>
          <Text
            as="h3"
            fontSize="5xl"
            fontWeight="bold"
            fontFamily="var(--font-schoolbell)"
          >
            Coming soon!
          </Text>
          <Text as="div" className="b3" textAlign="center" maxW={600} mb="3.5">
            {`We are currently loading `}
            <Box as="span" textDecoration="underline">
              NEW OR REVISED CONTENT
            </Box>{" "}
            {`for the following subjects. Please be patient. Real magic takes
            time. Follow developments `}
            <Box as="span" textDecoration="underline">
              <Link href="/join-us-at-yaks-cafe">here</Link>
            </Box>{" "}
            {`Yak's Café on our webpage.`}
          </Text>

          <Link href="/">
            <Text
              as="span"
              fontSize="1.2rem"
              color="white"
              bg="theme.orange"
              display="block"
              py={3}
              px={5}
              borderRadius="13px"
            >
              Go back home
            </Text>
          </Link>

        </VStack>
      </Center>
    </Container>
  );
};

export default ComingSoonPage;
