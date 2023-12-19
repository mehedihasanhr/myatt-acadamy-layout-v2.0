"use client";

import {
  Box,
  Button,
  Flex,
  Slide, useDisclosure,
  useMediaQuery
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { theme } from "@/themes/themes";

interface CollapsedMenuProps {
  children: JSX.Element;
  side?: string;
}

const CollapsedMenu: React.FC<CollapsedMenuProps> = ({
  side = "left",
  children,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  // Access breakpoints from theme
  const { breakpoints } = theme;

  // Define media queries using the breakpoints
  const mediaQueries = {
    xs: `(max-width: ${breakpoints.xs})`,
    sm: `(max-width: ${breakpoints.sm})`,
    md: `(max-width: ${breakpoints.md})`,
    lg: `(max-width: ${breakpoints.lg})`,
    xl: `(max-width: ${breakpoints.xl})`,
  };

  // Use the media queries with useMediaQuery
  const [isXs] = useMediaQuery(mediaQueries.xs);
  const [isSm] = useMediaQuery(mediaQueries.sm);
  const [isMd] = useMediaQuery(mediaQueries.md);
  const [isLg] = useMediaQuery(mediaQueries.lg);
  const [isXl] = useMediaQuery(mediaQueries.xl);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (isLg) {
    return (
      <>
        <Slide
          direction={side == "right" ? "right" : "left"}
          in={isOpen}
          style={{ zIndex: 10 }}
        >
          <Flex
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, .85)"
            onClick={onToggle}
          >
            <Flex
              width="250px"
              height="100%"
              maxHeight="100dvh"
              color="white"
              bg="white"
              p={4}
              justifyContent="space-between"
              align-items="top"
              onClick={handleClick}
              ml={side === "right" ? "auto" : "0px"}
            >
              <Box>{children}</Box>
              <Button
                onClick={onToggle}
                size="sm"
                bg={isOpen ? "theme.orange" : "theme.purple"}
              >
                {isOpen ? <CloseIcon /> : <HamburgerIcon />}
              </Button>
              x
            </Flex>
          </Flex>
        </Slide>
        <Box
          position={{ base: "absolute" }}
          top={{ base: "calc(16px)", lg: "calc(84px + 8px)" }}
          left={side === "left" ? "16px" : "unset"}
          right={side === "right" ? "16px" : "unset"}
        >
          <Button
            onClick={onToggle}
            size="sm"
            bg={isOpen ? "theme.orange" : "theme.purple"}
          >
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </Button>
        </Box>
      </>
    );
  } else return <>{children}</>;
};

export default CollapsedMenu;
