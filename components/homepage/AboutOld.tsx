import {
  Box,
  Container,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";

export default function About() {
  return (
    <Box py="50px" id="about-us" bg="theme.magenta">
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(10, 1fr)" gap={{ base: 2, md: 5 }}>
          <GridItem
            colStart={{
              base: 2,
              md: 4,
            }}
            colSpan={{
              base: 8,
              md: 4,
            }}
          >
            <Box textAlign="center" mb={6}>
              <Text as="h1" color="white">
                About the Academy
              </Text>
            </Box>
            <Box
              as="div"
              bg="theme.yellow"
              borderRadius={13}
              py={5}
              px={{
                base: "20px",
                lg: "60px",
              }}
              position="relative"
            >
              <Link href="#welcome_message_form_dr_myatt">
                <Text
                  as="span"
                  mb={5}
                  display="block"
                  color="#222"
                  letterSpacing={{ base: "1.3px", lg: "1.7px" }}
                  fontSize={{ base: "13px", sm: "15px", md: "lg", lg: "xl" }}
                  fontWeight="400"
                >
                  Welcome message from Dr. Myatt
                </Text>
              </Link>

              <Text
                as="span"
                display="block"
                color="#222"
                letterSpacing={{ base: "1.3px", lg: "1.7px" }}
                fontSize={{ base: "13px", sm: "15px", md: "lg", lg: "xl" }}
                fontWeight="400"
              >
                About the Academy
              </Text>
              <UnorderedList
                listStyleType="none"
                display="flex"
                flexDir="column"
                gap={{ base: 1, lg: 3 }}
                color="#222"
                letterSpacing={{ base: "1.3px", lg: "1.7px" }}
                fontSize={{ base: "13px", sm: "15px", md: "lg", lg: "xl" }}
                fontWeight="400"
              >
                <ListItem>
                  <Link href="#background">
                    <Text as="span">- Background</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#vision">
                    <Text as="span">- Vision </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  - <Link href="#mission">Mission</Link>
                </ListItem>
                <ListItem>
                  - <Link href="#quality-assurance">Quality Assurance</Link>
                </ListItem>

                <ListItem>
                  -
                  <Link href="#contribution-to-the-global-good">
                    Contribution to the Global Good
                  </Link>
                </ListItem>
                <ListItem mb={5}>
                  - <Link href="#our-promise">Our Promise</Link>
                </ListItem>
                <ListItem>
                  <Link href="contact-us">Contact Us</Link>
                </ListItem>
                <ListItem>
                  <Link href="#testimonials">Testimonials</Link>
                </ListItem>
                <ListItem>
                  <Link href="?modal=staff" scroll={false}>
                    Our Leadership Team
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
