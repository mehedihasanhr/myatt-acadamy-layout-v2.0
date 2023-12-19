import Image from "next/image";
import {
  Box,
  Button,
  HStack,
  Stack,
  Text,
  VStack,
  useTheme,
} from "@chakra-ui/react";
import _ from "lodash";
import { useRouter } from "next/navigation";
import { lighten, darken } from "polished";
import { useEffect } from "react";

type ProductCardProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  readMoreUrl?: string;
  enrollHereUrl?: string;
  classProps?: { [key: string]: any };
  [key: string]: any;
};

export default function ProductCard({
  id = "course-1",
  title = "title here...",
  subtitle = "subtitle here..",
  image = "/placeholder/reading-table.png",
  classProps = {},
  readMoreUrl = "/courses/early-childhood",
  enrollHereUrl = "/enrollment",
  ...props
}: ProductCardProps) {
  const router = useRouter();
  const { theme } = useTheme().colors;

  const darkerMagenta = darken(0.2, theme.magenta);
  const lighterPumpkinOrange = lighten(0.1, theme.pumpkinOrange);
  const lighterAzureBlue = lighten(0.1, theme.azureBlue);

  const bgColorMap: any = {
    "course-1": lighterPumpkinOrange,
    "course-2": "theme.periwinklePurple",
    "course-3": "theme.dragonGreen",
    "course-4": lighterAzureBlue,
    "course-5": darkerMagenta,
  };

  return (
    <Box
      flexShrink={0}
      // w='442px'
      height="462px"
      bg={bgColorMap[id]}
      className="snap-start"
      rounded="13px"
      p={{
        base: 3,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10,
      }}
      {...props}
    >
      <VStack
        justifyContent="space-between"
        height="100%"
        gap={{
          base: 2,
          sm: 3,
          md: 4,
          lg: 5,
          xl: 6,
        }}
        align="center"
      >
        <Text
          as="h3"
          fontSize={{
            base: "14px",
            sm: "16px",
            md: "18px",
            lg: "20px",
          }}
          color="white"
          {...classProps}
        >
          {title}
        </Text>

        <Box w="full">
          <Image
            src={image}
            alt="Picture of the author"
            width={320}
            height={230}
            loading="lazy"
            quality={80}
            sizes="400px"
            style={{ margin: "0 auto" }}
          />
        </Box>

        <HStack
          // flex={{
          //   base: "1 1 80%",
          // }}
          flexWrap={{
            base: "wrap",
            md: "wrap",
            lg: "nowrap",
          }}
          w="full"
          justifyContent="center"
          gap="1rem"
        >
          <Button
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            w={{ base: "full", lg: "fit-content" }}
            flex={{ base: "auto", lg: "1" }}
            variant="outlineWhite"
            onClick={() => router.push(readMoreUrl)}
          >
            Read More
          </Button>

          <Button
            onClick={() => router.push(enrollHereUrl)}
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            w={{ base: "full", lg: "fit-content" }}
            flex={{ base: "auto", lg: "1" }}
          >
            Join Us
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
