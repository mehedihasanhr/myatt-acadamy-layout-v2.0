"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PropType = {
  href: string;
  children?: React.ReactNode;
  icon: React.ReactNode;
};

const MobileFooterButton: React.FC<PropType> = ({
  href = "#",
  children,
  icon,
}) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link href={href}>
      <Box
        as="span"
        fontSize={active ? "20px" : "20px"}
        color="theme.sand"
        fill={active ? "theme.sand" : "#777"}
        borderRadius="50%"
        w={10}
        h={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position={active ? "relative" : "static"}
        bottom={active ? "5px" : "0"}
        bg={active ? "theme.primary" : "transparent"}
        transition="all 0.2s ease-in-out"
        __css={{
          "&:after": {
            content: "''",
            display: active ? "block" : "none",
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "2px solid #fff",
          },

          "&:before": {
            content: "''",
            display: active ? "block" : "none",
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "2px solid #fff",
            animation: "pulse 1s ease-out infinite",
          },

          "@keyframes pulse": {
            "0%": {
              transform: "scale(0.95)",
              boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.7)",
            },

            "70%": {
              transform: "scale(1)",
              boxShadow: "0 0 0 10px rgba(255, 255, 255, 0)",
            },

            "100%": {
              transform: "scale(0.95)",
              boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)",
            },
          },
        }}
        _hover={{
          bg: "theme.primary",
          color: "theme.sand",
          fill: "theme.sand",
        }}
      >
        {icon}
      </Box>
    </Link>
  );
};

export default MobileFooterButton;
