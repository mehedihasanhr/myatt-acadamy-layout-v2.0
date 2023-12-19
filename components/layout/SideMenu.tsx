"use client";

import { Button, Circle, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import QuestionIcon from "../QuestionIcon";


const SideMenu = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [activeMenuItem, setActiveMenuItem] = useState("");

  useEffect(() => {
    const currentPath = pathname;

    const matchingMenuItem = menuItems.find((menuItem) =>
      currentPath.startsWith(menuItem.path)
    );

    if (matchingMenuItem) {
      setActiveMenuItem(matchingMenuItem.label);
    } else {
      setActiveMenuItem("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const menuItems = [
    { label: "My Courses", path: "/my-courses" },
    { label: "Quiz", path: "/my-quizzes" },
    { label: "Assignments", path: "/my-assignments" },
    { label: "Vocabulary", path: "/my-vocabulary" },
    { label: "Story", path: "/story" },

    // Add more menu items as needed
  ];
  return (
    <>
      <Flex
        direction={{ base: "row", md: "column" }}
        gap={4}
        alignItems={`start`}
        width="100%"
        flexWrap="wrap"
        mb={10}
      >
        {menuItems.map((item, index) => {
          return (
            <Button
              key={`${index} + ${item.path}`}
              variant="outlineSM"
              size="xs"
              fontFamily="Open Sans"
              isActive={pathname === item.path}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </Button>
          );
        })}
      </Flex>
      <Circle mb={5} size="30" bg="theme.green">
        <QuestionIcon />
      </Circle>
      <Circle mb={10} size="30" bg="theme.yellow">
        <QuestionIcon />
      </Circle>
      <Flex direction="column" gap={4} alignItems="start" mb={10}>
        <Button variant="outlineTwo" size="xs">
          Lecture 1
        </Button>
        <Button variant="outlineTwo" size="xs">
          Lecture 2
        </Button>
        <Button variant="outlineTwo" size="xs" isActive>
          Lecture 3
        </Button>
        <Button variant="outlineTwo" size="xs">
          Lecture 4
        </Button>
        <Button variant="outlineTwo" size="xs">
          Lecture 5
        </Button>
      </Flex>

      <Text as="span" fontSize="xl">
        Other Subjects
      </Text>
      <Flex direction="column" mb={7} gap={1}>
        <Link href="/">
          <Text as="span" fontSize="md">
            Mathematics
          </Text>
        </Link>

        <Link href="/">
          <Text as="span" fontSize="md">
            Language Arts
          </Text>
        </Link>
      </Flex>
      <Text as="span" fontSize="xl">
        Subjects coming soon:
      </Text>
      <Flex direction="column" gap={1}>
        <Link href="/">
          <Text as="span" fontSize="md">
            Science
          </Text>
        </Link>
        <Link href="/">
          <Text as="span" fontSize="md">
            Social Studies
          </Text>
        </Link>
        <Link href="/">
          <Text as="span" fontSize="md">
            Elective courses
          </Text>
        </Link>
        <Text as="span" fontSize="md">
          Health and Physical Education
        </Text>
        <Link href="/">
          <Text as="span" fontSize="md">
            Art
          </Text>
        </Link>
        <Link href="/">
          <Text as="span" fontSize="md">
            Music
          </Text>
        </Link>
        <Link href="/">
          <Text as="span" fontSize="md">
            Technology
          </Text>
        </Link>
      </Flex>
    </>
  );
};

export default SideMenu;
