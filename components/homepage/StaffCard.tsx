import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import type { Staff } from "@/types";
import StaffAvatar from "@/components/homepage/StaffImage";

const StaffCard = ({ id, name, image, flag, post, team, dept }: Staff) => {
  const [imgSrc, setImgSrc] = useState(
    image ? `/avatar/teachers/${image}` : "/assets/placeholder.png"
  );
  const handleError = () => {
    setImgSrc("/assets/placeholder-user.png");
  };

  return (
    <Flex alignItems="center" gap="6" pb={6}>
      <Box as="div" borderRadius="full" overflow="hidden" w={128} h={128}>
        <> 
          <Image
            src={imgSrc}
            alt={name}
            width={128}
            height={128}
            loading="lazy"
            onError={handleError}
            style={{ 
              objectFit: "cover",
            }}
          />
        </>
      </Box>

      <Box as="div" flex={1}>
        <Flex alignItems="center">
          <Text as="span" mr="3" className="b2">
            {name}
          </Text>
        </Flex>
        <Text as="article" className="b3" mt="1">
          {post}
        </Text>
        {flag && (
          <Image
            src={`/flags/${flag}`}
            alt="Philippines"
            width={30}
            height={20}
            loading="lazy"
            quality="70"
            style={{marginTop: '6px'}}
          />
        )}
      </Box>
    </Flex>
  );
};

export default StaffCard;
