"use client";
import { Box, Text, Button, HStack, VStack } from "@chakra-ui/react";
import * as React from "react";

type Props = {
  text: string;
  maxLength: number;
  mt?: string;
};

const ReadMoreController: React.FC<Props> = ({
  text = "",
  maxLength = 120,
  mt = "0",
}) => {
  const [hidden, setHidden] = React.useState(true);
  const resultString = hidden ? text.slice(0, maxLength) : text;
  const toggleReadMore = () => {
    setHidden(!hidden);
  };

  return (
    <VStack alignItems="flex-start" gap={5} h="100%">
      <Text
        fontSize="lg"
        as="p"
        className="b3"
        dangerouslySetInnerHTML={{
          __html: resultString.replace(/\\n/g, "<br>") + (hidden ? "..." : ""),
        }}
      />

      <Button variant="outline" onClick={toggleReadMore} mt={mt}>
        {hidden ? "Read more" : " Show less"}
      </Button>
    </VStack>
  );
};

export default ReadMoreController;
