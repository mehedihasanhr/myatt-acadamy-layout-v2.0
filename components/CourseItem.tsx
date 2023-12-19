import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const CourseItem = () => {
  return (
    <Box
      bg="theme.sand"
      borderRadius=".8125rem"
      pt="2rem"
      px="1.25rem"
      pb="1.5rem"
    >
      <Flex gap={4} mb={8}>
        <Image
          src="/assets/placeholder.png"
          alt="placeholder"
          w="114px"
          h="85px"
          fit="cover"
          borderRadius="0.8125rem"
        />
        <Box w="100%">
          <Text as="h3" textTransform="uppercase" mb={1}>
            Early Childhood (ages 3-5)
          </Text>
          <Text as="h3" textTransform="uppercase">
            $50 / Course
          </Text>
        </Box>
      </Flex>
      <Button w="100%" size="xl">
        Read More
      </Button>
    </Box>
  );
};

export default CourseItem;
