import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

interface CoursePopItemProps {
  isActive: boolean;
}

const CoursePopItem: React.FC<CoursePopItemProps> = ({ isActive }) => {
  return (
    <VStack
      background={isActive ? "theme.yellow" : "theme.sand"}
      borderRadius="13px"
      p="24px 30px"
      shadow="custom"
    >
      <Text as="h3">Early Childhood</Text>
      <Text as="h3" mb={16}>
        (ages 3-5)
      </Text>
      <Box mb={18}>
        <Image
          src="/course/early-childhood.png"
          alt="early-childhood"
          width={218}
          height={172}
        />
      </Box>
      <Flex gap={1}>
        <Button flex="1" variant="outline" size="sm" px="1.5rem">
          Read More
        </Button>
        <Button flex="1" size="sm" px="1.5rem">
          Enroll
        </Button>
      </Flex>
    </VStack>
  );
};

export default CoursePopItem;
