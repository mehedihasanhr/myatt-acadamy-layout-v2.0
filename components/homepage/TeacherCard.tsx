import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import type { Teacher } from "@/types";

const TeacherCard = ({
  id,
  name,
  image,
  shift,
  flag,
  message,
  shift_title,
}: Teacher) => {
  return (
    <Flex gap="6">
      <Box as="div" borderRadius="full" overflow="hidden" w={16} h={16}>
        <>
          <Image
            src={`/avatar/teachers/${image}`}
            alt="Ms. Joonie Infonte"
            width={64}
            height={64}
            loading="lazy"
            quality="70"
          />
        </>
      </Box>

      <Box as="div" flex={1}>
        <Flex alignItems="center">
          <Text as="span" mr="3" className="b2">
            {name}
          </Text>
          {flag && (
            <Image
              src={`/flags/${flag}`}
              alt="Philippines"
              width={30}
              height={20}
              loading="lazy"
              quality="70"
            />
          )}
        </Flex>
        <Text
          as="article"
          className="b3"
          mt="1"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </Box>
    </Flex>
  );
};

export default TeacherCard;
