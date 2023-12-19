"use client";
import { Flex, Circle, Image, Text, Box } from "@chakra-ui/react";

interface CommentProps {
  item: {
    name: string;
    flag: string;
    image: string;
    comment: string;
  };
}

const Comment: React.FC<CommentProps> = ({ item }) => {
  return (
    <Flex gap="10px" mb={9}>
      <Circle size="44px" overflow="hidden">
        <Image
          src={`/avatar/${item.image}`}
          alt={`${item.name}`}
          width="44px"
          height="44px"
          borderRadius="50%"
        />
      </Circle>
      <Box
        py={5}
        px={6}
        background="theme.sand"
        borderRadius="13px"
        boxShadow="custom"
      >
        <Flex alignItems="center" gap={"10px"} mb={"10px"}>
          <Text as="h3" textTransform="uppercase">
            {item.name}
          </Text>
          <Image
            src={`/flags/${item.flag}`}
            alt="Namibia"
            width="40px"
            height="24px"
          />
        </Flex>
        <Text as="p">{item.comment}</Text>
      </Box>
    </Flex>
  );
};

export default Comment;
