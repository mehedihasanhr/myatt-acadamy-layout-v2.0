import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import * as React from "react";
import Image from "next/image";

interface StaffMessageProps {
  imageSRC: string;
  name: string;
  details: string;
  countryFlag: string;
  countryName: string;
  message: string;
}

const StaffMessage: React.FC<StaffMessageProps> = ({
  imageSRC,
  name,
  details,
  countryFlag,
  countryName,
  message,
}) => {
  return (
    <Flex
      w="full"
      minH={{ base: "fit-content", lg: "300px" }}
      gap={8}
      px={{ base: "5", lg: "20" }}
      alignItems="center"
      flexDir={{ base: "column", lg: "row" }}
    >
      <Box>
        <Image
          src={imageSRC}
          alt={name}
          width={115}
          height={115}
          loading="lazy"
          quality={70}
          style={{ borderRadius: "50%" }}
        />
      </Box>
      <Box
        as="div"
        height="100%"
        flex={1}
        py="5"
        px="7"
        borderRadius="13px"
        bg="theme.pastelYellow"
      >
        <HStack mb="3">
          <Text as="h3" fontSize="xl" fontWeight="bold" casing="uppercase">
            {details}
          </Text>
          <Image
            src={countryFlag}
            alt={countryName}
            width={40}
            height={40}
            loading="lazy"
            quality="50"
          />
        </HStack>
        <Text as="article" className="b3" fontSize="lg">
          {message}
        </Text>
      </Box>
    </Flex>
  );
};

export default StaffMessage;
