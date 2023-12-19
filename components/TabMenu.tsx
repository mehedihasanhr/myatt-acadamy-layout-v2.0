import { Grid, GridItem, Text, theme, useTheme } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const TabMenu = () => {
  const [id, setID] = useState(1);
  const theme = useTheme();

  const pathname = usePathname();

  
  return (
    <Grid
      templateColumns={{ base: "repeat(4, 1fr)", lg: "repeat(4, 1fr)" }}
      mb={8}
    >
      <GridItem>
        <Text
          fontWeight="600"
          color="theme.purple"
          fontSize="xs"
          fontFamily="Open Sans"
          px={4}
          pb={1}
          align="center"
          borderBottom={
            id === 1
              ? `2px solid ${theme.colors.theme.purple}`
              : `2px solid ${theme.colors.theme.grey}`
          }
        >
          <Link href={`${pathname}?type=MCQ`}>MCQ</Link>
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight="600"
          color="theme.purple"
          fontSize="xs"
          fontFamily="Open Sans"
          px={4}
          pb={1}
          align="center"
          borderBottom={
            id === 2
              ? `2px solid ${theme.colors.theme.purple}`
              : `2px solid ${theme.colors.theme.grey}`
          }
        >
          <Link href={`${pathname}?type=true-false`}>True False</Link>
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight="600"
          color="theme.purple"
          fontSize="xs"
          fontFamily="Open Sans"
          px={4}
          pb={1}
          align="center"
          borderBottom={
            id === 3
              ? `2px solid ${theme.colors.theme.purple}`
              : `2px solid ${theme.colors.theme.grey}`
          }
        >
          <Link href={`${pathname}?type=fill-in-the-blanks`}>Fill in the Blanks</Link>
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight="600"
          color="theme.purple"
          fontSize="xs"
          fontFamily="Open Sans"
          px={4}
          pb={1}
          align="center"
          borderBottom={
            id === 4
              ? `2px solid ${theme.colors.theme.purple}`
              : `2px solid ${theme.colors.theme.grey}`
          }
        >
          <Link href={`${pathname}?type=scenario`}>Scenario</Link>
        </Text>
      </GridItem>
    </Grid>
  );
};

export default TabMenu;
