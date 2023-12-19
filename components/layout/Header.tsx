"use client";
import Image from "next/image";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ContactIcon } from "@/components/ui/Icon";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import JoinUsButtonDropdown from "../JoinUsButtonDropdown";

export default function LandingPageHeader() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <Box width="100%" height="16px" background="theme.orange" opacity="1" />
      <Box bg="theme.yellow" w="100%" h={{ lg: "150px" }} color="white" py={3}>
        <Container maxW="container.xl" h="100%">
          <Grid templateColumns="repeat(12, 1fr)" h="100%" alignItems="center">
            <GridItem colSpan={2}>
              <Box>
                <Link href="/">
                  <Image
                    src="/logo.svg"
                    alt="logo"
                    width={150}
                    height={150}
                    priority={true}
                    sizes="150px"
                  />
                </Link>
              </Box>
            </GridItem>

            <GridItem colSpan={{ base: 10, md: 7 }}>
              <Box color="theme.primary" w="fit" maxW="700px" >
                <Center>
                  <Box>
                    <Flex alignItems="center" gap={2}>
                      <Text
                        as="span"
                        className="b4"
                        display={{ base: "none", lg: "inline-block" }}
                      >
                        Welcome to{" "}
                      </Text>
                      <Text
                        as="h1"
                        fontSize={{
                          base: "14px",
                          sm: "18px",
                          lg: "28px",
                          xl: "30px",
                        }}
                        textAlign="center"
                        color="theme.primary"
                      >
                        The Dr. Myatt Academy of Learning
                      </Text>
                    </Flex>

                    <Box
                      as="h3"
                      ml={{
                        md: 28,
                      }}
                      float="left"
                      fontSize={{
                        base: "10px",
                        sm: "13px",
                        lg: "18px",
                        xl: "18px",
                      }}
                    >
                      Your new neighbourhood school
                    </Box>

                    <Box
                      as="h3"
                      mr={{ md: 10 }}
                      float="right"
                      fontSize={{
                        base: "10px",
                        sm: "13px",
                        lg: "18px",
                        xl: "18px",
                      }}
                    >
                      ... built on “traditional” standards
                    </Box>
                  </Box>
                </Center>
              </Box>
            </GridItem>

            <GridItem
              display={{ base: "none", md: "inline-block" }}
              colSpan={3}
            >
              <Box>
                <ButtonGroup gap={2} alignItems="center">
                  <IconButton
                    aria-label="account"
                    isRound={true}
                    bg="transparent !important"
                    icon={<ContactIcon />}
                    p={0}
                    fontSize={{
                      base: "36px",
                      md: "32px",
                    }}
                    onClick={() => router.push("/coming-soon")}
                  />
 
                  <Button
                    aria-label="signUpButton"
                    fontSize={{
                      sm: "13px",
                      md: "14px",
                    }}
                    height={{
                      sm: "36px",
                      md: "auto",
                    }}
                    onClick={() => router.push("/my-courses")}
                  >
                    My Courses
                  </Button>
                  <JoinUsButtonDropdown />
                </ButtonGroup>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

// "use client";
// import Image from "next/image";
// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Center,
//   Container,
//   Flex,
//   Grid,
//   GridItem,
//   Heading,
//   IconButton,
//   Spacer,
//   Text,
// } from "@chakra-ui/react";
// import { ContactIcon } from "@/components/ui/Icon";
// import { useRouter, usePathname } from "next/navigation";

// export default function LandingPageHeader() {
//   const router = useRouter();
//   const pathname = usePathname();

//   return (
//     <Box bg="theme.yellow" w="100%" h={{ lg: "135px" }} py={3} color="white">
//       <Container maxW="container.xl" h="100%">
//         <Grid
//           templateColumns="repeat(12, 1fr)"
//           h="100%"
//           alignItems="center"
//           gap="3"
//         >
//           <GridItem
//             colSpan={{
//               base: 12,
//               md: 2,
//             }}
//             display={{ base: "flex" }}
//           >
//             <Box mx="auto">
//               <Image
//                 src="/logo.png"
//                 alt="logo"
//                 width={100}
//                 height={100}
//                 priority={true}
//                 sizes="100px"
//               />
//             </Box>
//           </GridItem>

//           <GridItem colSpan={{ base: 12, md: 8 }}>
//             <Box color="theme.primary" w="fit" maxW="800px">
//               <Center>
//                 <Box>
//                   <Flex
//                     alignItems="center"
//                     flexDirection={{
//                       base: "column",
//                       lg: "row",
//                     }}
//                     gap={2}
//                   >
//                     <Text as="span" className="b4">
//                       Welcome to{" "}
//                     </Text>
//                     <Text
//                       as="h1"
//                       fontSize={{
//                         base: "16px",
//                         sm: "20px",
//                         lg: "28px",
//                         xl: "36px",
//                       }}
//                       textAlign="center"
//                       color="theme.primary"
//                     >
//                       The Dr. Myatt Academy of Learning
//                     </Text>
//                   </Flex>

//                   <Box
//                     as="h3"
//                     ml={{
//                       base: 5,
//                       sm: 28,
//                       md: 28,
//                     }}
//                     float="left"
//                     fontSize={{
//                       base: "12px",
//                       sm: "14px",
//                       lg: "18px",
//                       xl: "20px",
//                     }}
//                   >
//                     Your new neighbourhood school
//                   </Box>

//                   <Box
//                     as="h3"
//                     mr={10}
//                     float="right"
//                     fontSize={{
//                       base: "12px",
//                       sm: "14px",
//                       lg: "18px",
//                       xl: "20px",
//                     }}
//                   >
//                     ... built on “traditional” standards
//                   </Box>
//                 </Box>
//               </Center>
//             </Box>
//           </GridItem>

//           <GridItem
//             colSpan={{
//               base: 12,
//               md: 2,
//             }}
//           >
//             <Box>
//               <ButtonGroup
//                 gap={2}
//                 alignItems="center"
//                 justifyContent={{
//                   base: "center",
//                   md: "auto",
//                 }}
//                 w={{
//                   base: "full",
//                 }}
//                 flexDir={{
//                   md: "row",
//                 }}
//               >
//                 <IconButton
//                   aria-label="account"
//                   isRound={true}
//                   bg="transparent !important"
//                   icon={<ContactIcon />}
//                   p={0}
//                   fontSize={{
//                     base: "36px",
//                     md: "32px",
//                   }}
//                   onClick={() => router.push(pathname + "?step=login")}
//                 />
//                 <Button
//                   aria-label="signUpButton"
//                   fontSize={{
//                     sm: "13px",
//                     md: "14px",
//                   }}
//                   height={{
//                     sm: "36px",
//                     md: "auto",
//                   }}
//                   onClick={() => router.push(pathname + "?step=signup")}
//                 >
//                   Sign Up
//                 </Button>
//               </ButtonGroup>
//             </Box>
//           </GridItem>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }
