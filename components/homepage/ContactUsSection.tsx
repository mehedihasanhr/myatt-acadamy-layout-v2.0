import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
  useTheme,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { lighten, darken } from "polished";

export default function ContactUsSectoin() {
  const { theme } = useTheme().colors;
  const lighterGreen = lighten(0.075, theme.mossGreen);
  return (
    <Box as="section" py="50px" id="contact" bg={"theme.darkGreen"}>
      <Box as="div" py="50px">
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(10, 1fr)" gap={5}>
            <GridItem
              colStart={{ base: 0, md: 2 }}
              colSpan={{ base: 10, lg: 6 }}
              p={5}
              order={{ base: 2, md: 1 }}
              bg="theme.yellow"
              borderRadius="8px"
            >
              <Text as="h2" mb={5}>
                Contact Us
              </Text>

              <Text as="p" className="b2" mb={6}>
                We at the Academy are delighted to hear from our constituents.
                Please contact us for any queries at{" "}
                <Box as="span" textDecoration="underline" fontWeight="600">
                  <Link href="mailto:inquiries@myattacademy.com">
                    inquiries@myattacademy.com
                  </Link>
                </Box>{" "}
                and we will respond as quickly as possible.
              </Text>

              <FormControl mb={6}>
                <FormLabel
                  fontSize="xl"
                  fontWeight="bold"
                  letterSpacing="1.5px"
                  className="b3"
                >
                  Email address
                </FormLabel>
                <Input
                  type="email"
                  py={5}
                  px={5}
                  boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                  bg="white"
                  borderRadius="13px"
                  borderColor="theme.yellow"
                  placeholder="Enter your email here..."
                  className="b3"
                  _placeholder={{ fontSize: "xl", color: "#333" }}
                  color="black"
                />
              </FormControl>
              <FormControl mb={6}>
                <FormLabel
                  fontSize="xl"
                  fontWeight="bold"
                  letterSpacing="1.5px"
                  className="b3"
                >
                  {`We'd love to hear your thoughts. Please share them with us!`}
                </FormLabel>
                <Textarea
                  py={5}
                  px={5}
                  boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                  bg="white"
                  borderRadius="13px"
                  borderColor="theme.yellow"
                  placeholder="Enter your thoughts, questions, or feedback here..."
                  className="b3"
                  _placeholder={{ fontSize: "xl", color: "#333" }}
                  color="black"
                  height="150px"
                  resize="none"
                />
              </FormControl>

              <Button
                float={{
                  base: "none",
                  md: "right",
                }}
                px={8}
              >
                Send
              </Button>
            </GridItem>

            <GridItem
              order={{
                base: 1,
                md: 2,
              }}
              colStart={{
                base: 0,
                lg: 8,
              }}
              colSpan={{ base: 10, lg: 3 }}
              px={5}
            >
              <Box as="div" maxW="300px" maxH="300px">
                <Image
                  src="/hero/sun.png"
                  alt="Sun"
                  width={250}
                  height={250}
                  loading="lazy"
                  quality={80}
                  sizes="
                            (max-width: 768px) 250px,
                            (max-width: 1024px) 250px,
                        "
                />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
