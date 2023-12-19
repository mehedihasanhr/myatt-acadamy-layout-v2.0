"use client";
import * as React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Flex,
  Text,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  HStack,
  VStack,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  Center,
  Select,
} from "@chakra-ui/react";

import CloseButton from "../ui/CloseButton";
import Link from "next/link";

const SignUp = () => {
  const [name, setName] = React.useState("");
  const [accountType, setAccountType] = React.useState("student");
  const [country, setCountry] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const [err, setErr] = React.useState<{ [key: string]: string } | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const isOpen = searchParams.get("step") === "signup";

  const onClose = () => {
    // remove login from url
    router.push(pathname);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent py={0}>
        <ModalBody
          onClick={(e) => {
            e.stopPropagation();
            router.push(`${pathname}/join-us-at-yaks-cafe`);
          }}
        >
          <Flex>
            <Text mx="auto" as="h3" className="b2" textAlign="center">
              You need to sign up to add a course
            </Text>
            <CloseButton pr={0} onClick={onClose} />
          </Flex>

          <Box py={4}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel className="h2">Your Full Name</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    bg="theme.sand"
                    border="none"
                    focusBorderColor="#dccbc1"
                    placeholder="Andy Wood"
                  />
                  {err && <FormErrorMessage>{err.name}</FormErrorMessage>}
                </FormControl>

                <FormControl>
                  <FormLabel className="h2">Email address</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    bg="theme.sand"
                    border="none"
                    focusBorderColor="#dccbc1"
                    placeholder="exmple@gmail.com"
                  />
                  {err && <FormErrorMessage>{err.email}</FormErrorMessage>}
                </FormControl>

                <FormControl>
                  <FormLabel className="h2">You are a parent/student</FormLabel>
                  <Select
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                  >
                    <option value="student">Student</option>
                    <option value="parent">Parent</option>
                  </Select>
                  {err && (
                    <FormErrorMessage>{err.accountType}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel className="h2">Your country</FormLabel>
                  <Input
                    type="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    bg="theme.sand"
                    border="none"
                    focusBorderColor="#dccbc1"
                    placeholder="Canada"
                  />
                  {err && <FormErrorMessage>{err.email}</FormErrorMessage>}
                </FormControl>

                <FormControl>
                  <FormLabel className="h2">Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    bg="theme.sand"
                    border="none"
                    focusBorderColor="#dccbc1"
                    placeholder="********"
                  />
                  <HStack
                    spacing={4}
                    justify="space-between"
                    align="center"
                    w="full"
                  >
                    <FormHelperText className="h3">
                      Must be at least 8 characters
                    </FormHelperText>
                    <Divider orientation="vertical" />
                    <FormHelperText className="h3" color="theme.primary">
                      Remind Password
                    </FormHelperText>
                  </HStack>
                  {err && <FormErrorMessage>{err.email}</FormErrorMessage>}
                </FormControl>

                <FormControl>
                  <Checkbox borderColor="theme.primary" colorScheme="blue">
                    <Text fontSize="14px">
                      <Text as="span">I agree to the </Text>
                      <Link href="/terms">
                        <Text
                          as="span"
                          color="theme.primary"
                          _hover={{ textDecoration: "underline" }}
                          borderRight="1px"
                          pl="1"
                          pr="2"
                          borderRightColor="theme.primary"
                        >
                          Website terms
                        </Text>
                      </Link>

                      <Link href="/terms">
                        <Text
                          as="span"
                          color="theme.primary"
                          _hover={{ textDecoration: "underline" }}
                          borderRight="1px"
                          px="2"
                          borderRightColor="theme.primary"
                        >
                          Privacy Policy
                        </Text>
                      </Link>

                      <Link href="/terms">
                        <Text
                          as="span"
                          color="theme.primary"
                          _hover={{ textDecoration: "underline" }}
                          pl="2"
                          pr="2"
                        >
                          Cookie Policy
                        </Text>
                      </Link>
                    </Text>
                  </Checkbox>
                </FormControl>

                <FormControl>
                  <Button w="full" size="sm" type="submit" fontSize="sm">
                    Sign Up
                  </Button>
                </FormControl>

                <FormControl>
                  <Center>
                    <Text as="span" className="h2">
                      {"Already have an account? "}
                    </Text>
                    <Link href={pathname + `?step=login`}>
                      <Text
                        as="span"
                        className="h3"
                        fontWeight="bold"
                        ml="2"
                        letterSpacing="2px"
                        _hover={{
                          textDecoration: "underline",
                        }}
                        color="theme.primary"
                      >
                        Sign In
                      </Text>
                    </Link>
                  </Center>
                </FormControl>
              </VStack>
            </form>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignUp;
