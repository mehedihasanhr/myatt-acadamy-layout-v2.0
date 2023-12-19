"use client";

import { Center, Container, VStack } from "@chakra-ui/react";
import Link from "next/link";

const SA = () => {
  return (
    <Container maxW="80%" mx="auto" mt={7}>
      <Center>
        <VStack spacing={4} fontSize="lg" fontFamily="Open Sans">
          <Link href="/courses">Courses (r)</Link>
          <Link href="/courses-details">Courses-Details</Link>
          <Link href="/enrollment">Enrollment (r)</Link>
          <Link href="/enrollment/last-step">Enrollment/Last-Step (r)</Link>
          <Link href="/enrollment/success">Enrollment/Last-Step (r)</Link>
          <Link href="/enrollment/success">Enrollment/Last-Step (r)</Link>
          <Link href="/quiz">Quiz (r)</Link>
          <Link href="/quiz/image-labels">Quiz/Image-Labels (r)</Link>
          <Link href="/quiz/image-options">Quiz/Image-Options (r)</Link>
          <Link href="/user/my-courses">User/My-Courses</Link>
          <Link href="/user/my-quizzes">User/My-Quizzes</Link>
          <Link href="/popup-page">Popup Page</Link>
        </VStack>
      </Center>
    </Container>
  );
};

export default SA;
