"use client";
import * as React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  HStack,
  VStack,
  Checkbox,
  Button,
  Center,
} from "@chakra-ui/react";

import CloseButton from "../ui/CloseButton";
import Link from "next/link";
import { useLoginMutation } from "@/redux/features/auth/authApiSlice";
import { useAppSelector } from "@/redux/store";
import Loader from "../ui/LoaderComponent";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const [err, setErr] = React.useState<{ [key: string]: string } | null>(null);

  const { token, status } = useAppSelector((state) => state.auth);

  // call auth state
  // const auth = useAppSelector(state => state.auth);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const isOpen = searchParams.get("step") === "login";

  const onClose = () => {
    // remove login from url
    router.push(pathname);
  };

  // if token, redirect to user comes from
  React.useLayoutEffect(() => {
    if (token && status === "fulfilled" && isOpen) {
      router.back();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, status]);

  // login hook
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      if (res.data) {
        // redirect to dashboard
        router.push("/my-courses");
      }
    } catch (error) {
      console.log(error);
    }
  };


  console.log({
    status,
  })




  if (isOpen && status !== "fulfilled" && status !== "rejected") {
    return <Loader />;
  }
  return (
    <Modal
      isOpen={isOpen && !token && status === "rejected"}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent py={0}>
        <ModalBody>
          <Flex>
            <Text mx="auto" as="h2" letterSpacing="3.06px" className="h2">
              Welcome
            </Text>
            <CloseButton pr={0} onClick={onClose} />
          </Flex>

          <Box
            py={4}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
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
                  {err && <FormErrorMessage>{err.email}</FormErrorMessage>}
                </FormControl>

                <FormControl>
                  <HStack w="100%" justify="space-between" align="center">
                    <Checkbox borderColor="theme.primary" colorScheme="blue">
                      Remember Me
                    </Checkbox>
                    <Link href="/forgot-password">
                      <Text as="span" className="h2" color="theme.primary">
                        Forgot Password?
                      </Text>
                    </Link>
                  </HStack>
                </FormControl>

                <FormControl>
                  <Button w="full" size="sm" type="submit" fontSize="sm">
                    Login
                  </Button>
                </FormControl>

                <FormControl>
                  <Center>
                    <Text as="span" className="h2">
                      {"Don't have an account?"}{" "}
                    </Text>
                    <Link href={pathname + `?step=signup`}>
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
                        Register
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

export default Login;
