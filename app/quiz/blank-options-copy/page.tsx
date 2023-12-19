"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Grid,
  GridItem,
  ListItem,
  OrderedList,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const columnStyles = {
  MozColumnCount: 2,
  MozColumnGap: 10,
  WebkitColumnCount: 2,
  WebkitColumnGap: 10,
  columnCount: 2,
  columnGap: 10,
};

interface QuizItem {
  question: string;
  options: string[];
}

// for demo
let items: any = [];
for (let i = 1; i <= 10; i++) {
  items.push(i);
}
// for demo

// static data

const quiz: QuizItem[] = [
  {
    question:
      "Geometry Emma wants to fence her rectangular garden. The length of the garden is 12 meters, and the width is 8 meters. What is the perimeter of her garden?",
    options: ["32 meters", "80 meters", "40 meters", "56 meters"],
  },
  {
    question:
      "Geometry Emma wants to fence her rectangular garden. The length of the garden is 12 meters, and the width is 8 meters. What is the perimeter of her garden?",
    options: ["32 meters", "80 meters", "40 meters", "56 meters"],
  },
  {
    question:
      "Geometry Emma wants to fence her rectangular garden. The length of the garden is 12 meters, and the width is 8 meters. What is the perimeter of her garden?",
    options: ["32 meters", "80 meters", "40 meters", "56 meters"],
  },
  {
    question:
      "Geometry Emma wants to fence her rectangular garden. The length of the garden is 12 meters, and the width is 8 meters. What is the perimeter of her garden?",
    options: ["32 meters", "80 meters", "40 meters", "56 meters"],
  },
  {
    question:
      "Geometry Emma wants to fence her rectangular garden. The length of the garden is 12 meters, and the width is 8 meters. What is the perimeter of her garden?",
    options: ["32 meters", "80 meters", "40 meters", "56 meters"],
  },
  {
    question:
      "Geometry Emma wants to fence her rectangular garden. The length of the garden is 12 meters, and the width is 8 meters. What is the perimeter of her garden?",
    options: ["32 meters", "80 meters", "40 meters", "56 meters"],
  },
  {
    question:
      "Geometry Emma wants to fence her rectangular garden. The length of the garden is 12 meters, and the width is 8 meters. What is the perimeter of her garden?",
    options: ["32 meters", "80 meters", "40 meters", "56 meters"],
  },
  {
    question:
      "Geometry Emma wants to fence her rectangular garden. The length of the garden is 12 meters, and the width is 8 meters. What is the perimeter of her garden?",
    options: ["32 meters", "80 meters", "40 meters", "56 meters"],
  },
  {
    question:
      "Geometry Emma wants to fence her rectangular garden. The length of the garden is 12 meters, and the width is 8 meters. What is the perimeter of her garden?",
    options: ["32 meters", "80 meters", "40 meters", "56 meters"],
  },
  {
    question:
      "Geometry Emma wants to fence her rectangular garden. The length of the garden is 12 meters, and the width is 8 meters. What is the perimeter of her garden?",
    options: ["32 meters", "80 meters", "40 meters", "56 meters"],
  },
];

// static data end

const Quiz = () => {
  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
      mb={{ base: 4, lg: 8, xl: 16 }}
    >
      <Grid templateColumns="repeat(10, 1fr)" gap={18}>
        <GridItem colSpan={1}>
          <Flex direction="column" gap={4} alignItems={`start`}>
            <Button
              variant="outlineSM"
              size="xs"
              fontFamily="Open Sans"
              isActive={false}
            >
              <Link href="/#">My Courses</Link>
            </Button>
            <Button
              variant="outlineSM"
              size="xs"
              fontFamily="Open Sans"
              isActive={true}
            >
              <Link href="/#">Quiz</Link>
            </Button>
            <Button
              variant="outlineSM"
              size="xs"
              fontFamily="Open Sans"
              isActive={false}
            >
              <Link href="/#">Assignments</Link>
            </Button>
            <Button
              variant="outlineSM"
              size="xs"
              fontFamily="Open Sans"
              isActive={false}
            >
              <Link href="/#">Vocabulary</Link>
            </Button>
            <Button
              variant="outlineSM"
              size="xs"
              fontFamily="Open Sans"
              isActive={false}
            >
              <Link href="/#">Story</Link>
            </Button>
          </Flex>
        </GridItem>
        <GridItem colSpan={9} fontFamily="Open Sans">
          <Flex
            w="100%"
            justifyContent="space-between"
            borderRadius="0.8125rem"
            bg="yellow"
            py={1}
            px={5}
            mb={11}
          >
            <Box>
              <Text as="h3" mb={1}>
                Math Quiz True False
              </Text>
              <Flex gap={2} alignItems="center">
                <Text as="span" fontSize="sm">
                  10 Questions
                </Text>
                <Box w={1} h={1} bg="theme.purple" borderRadius="50%">
                  &nbsp;
                </Box>
                <Text as="span" fontSize="sm">
                  5 Mintues
                </Text>
                <Box w={1} h={1} bg="theme.purple" borderRadius="50%">
                  &nbsp;
                </Box>
                <Text as="span" fontSize="sm">
                  Beginner
                </Text>
              </Flex>
            </Box>
            <Box>
              <Text as="h3" mb={1}>
                Date
              </Text>
              <Text as="span" fontSize="sm">
                10.05.2023
              </Text>
            </Box>
            <Box>
              <Text as="h3" mb={1}>
                Date
              </Text>
              <Text as="span" fontSize="sm">
                10.05.2023
              </Text>
            </Box>
            <Box>
              <Text as="h3" mb={1}>
                Score
              </Text>
              <Text as="span" fontSize="sm">
                Score
              </Text>
            </Box>
            <Box>
              <Text as="h3" mb={1}>
                Time
              </Text>
              <Text as="span" fontSize="sm">
                2 : 35
              </Text>
            </Box>
          </Flex>
          <Grid templateColumns="repeat(2, 1fr)" gap={8}>
            <GridItem></GridItem>
          </Grid>
          <Box style={columnStyles}>
            <OrderedList variant="customNoMark">
              {quiz.map((item: QuizItem, i: number) => {
                return (
                  <ListItem key={i}>
                    <Flex gap={4}>
                      <Text
                        as="span"
                        fontSize={36}
                        fontWeight="400"
                        fontFamily="var(--font-schoolbell)"
                      >
                        {++i}.
                      </Text>
                      <Box>
                        <Text
                          as="div"
                          letterSpacing="0.54px"
                          mb={5}
                          fontSize="xs"
                        >
                          {item.question}.
                        </Text>
                        <RadioGroup mb="1.5rem">
                          <Flex
                            gap="60px"
                            justify="space-between"
                            align="center"
                            flexWrap="wrap"
                          >
                            {item.options.map((option: any, i: number) => {
                              return (
                                <Radio
                                  value="0"
                                  variant="custom"
                                  size="customBold"
                                  key={i}
                                  width="40%"
                                >
                                  {option}
                                </Radio>
                              );
                            })}
                          </Flex>
                        </RadioGroup>
                      </Box>
                    </Flex>
                  </ListItem>
                );
              })}
            </OrderedList>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Quiz;
