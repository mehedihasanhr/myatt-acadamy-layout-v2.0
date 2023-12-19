"use client";
 
import { Box, Text } from "@chakra-ui/react";
import * as React from "react";
 
export const HeroSectionLoading = () => { 
    return (
        <Box
            as="section"
            bg="theme.sand"
            w="full"
            h="full"
            aspectRatio="16/8"
            display="flex"
            alignItems="center"
            justifyContent="center" 
        >
            <Text 
                fontSize="lg" 
                color="theme.darkBrown" 
                fontWeight="bold" 
            > Loading... </Text>
        </Box>
    );
};
