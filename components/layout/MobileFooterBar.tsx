"use client";
import { Box, Button, HStack } from "@chakra-ui/react";
import * as React from "react";
import MobileFooterButton from "../MobileFooterButton";
import {
  CircleUser,
  HomeIcon,
  SettingIcon,
  ShippingCardIcon,
} from "../ui/Icon";
import { useWindowSize } from "react-use";
import { SearchIcon } from "@chakra-ui/icons";

const MobileFooter = () => {
  const { width } = useWindowSize();

  if (width > 768) {
    return null;
  } else {
    return (
      <Box position="fixed" bottom="0" left="0" w="full" zIndex={10}>
        <Box
          as="section"
          bg="theme.green"
          height="12"
          borderTop="1px"
          borderColor="#f5e5da"
        >
          <HStack justifyContent="space-around" alignItems="center">
            <MobileFooterButton href="/setting" icon={<SettingIcon />} />
            <MobileFooterButton href="/landing" icon={<HomeIcon />} />
            <MobileFooterButton href="#user" icon={<CircleUser />} />
            <MobileFooterButton href="#about" icon={<ShippingCardIcon />} />
          </HStack>
        </Box>
      </Box>
    );
  }
};

export default MobileFooter;
