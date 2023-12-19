import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import Dot from "./Dot";

interface QuizItemProps {
  type?: string;
  attempted?: boolean;
}

const QuizItem: React.FC<QuizItemProps> = ({
  type = "math",
  attempted = false,
}) => {
  return (
    <Circle
      size={{
        base: "18rem",
        sm: "18rem",
        md: "20rem",
        lg: "22rem",
        xl: "24rem",
      }}
      bg={type === "math" ? "theme.yellow" : "theme.green"}
    >
      <VStack alignItems="start" spacing="4px" mx="0" width="80%">
        <Flex gap="8px">
          <Text
            as="h3"
            color="theme.purple"
            fontSize={{ base: "xs", lg: "xl" }}
          >
            {type === "science" && <Box as="span">Science</Box>}
            {type === "math" && <Box as="span">Math</Box>}
            <Box as="span"> Quiz</Box>
          </Text>
          <Text
            as="h3"
            color="theme.purple"
            fontSize={{ base: "xs", lg: "xl" }}
          >
            True False
          </Text>
        </Flex>
        <Flex alignItems="center" gap={["8px"]} color="#8A8894">
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="400"
            fontFamily="Open Sans"
            whiteSpace="nowrap"
          >
            3 Questions
          </Text>
          <Dot />
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="400"
            fontFamily="Open Sans"
            whiteSpace="nowrap"
          >
            7 Minutes
          </Text>
          <Dot />
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight={"400"}
            fontFamily="Open Sans"
          >
            Beginner
          </Text>
        </Flex>
        <Flex justifyContent="space-between" w="100%" mb="16px">
          <Text
            as="h3"
            color="theme.purple"
            fontSize={{ base: "xs", lg: "xl" }}
          >
            0/10
          </Text>
          <Text
            color="theme.purple"
            fontSize={{ base: "xs", lg: "md" }}
            fontFamily="var(--font-schoolbell)"
          >
            0 attempts passed
          </Text>
        </Flex>
        <Flex
          flexDirection={{ base: "row", md: "row" }}
          gap={{ base: "8px", md: "8px" }}
          alignSelf="center"
        >
          <Button
            w={{ base: "5rem", md: "7.875rem" }}
            h={{ base: "40px", md: "62px" }}
          >
            <Text as="span">Start</Text>
            {attempted && <Text as="span">Again</Text>}
          </Button>
          <Button
            w={{ base: "5rem", md: "7.875rem" }}
            h={{ base: "40px", md: "62px" }}
            variant="outline"
          >
            View
          </Button>
        </Flex>
      </VStack>
    </Circle>
  );
};

export default QuizItem;
