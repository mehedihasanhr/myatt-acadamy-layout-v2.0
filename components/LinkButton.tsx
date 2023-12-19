import { Box, useTheme } from "@chakra-ui/react";

interface LinkButtonProps {
  isActive: boolean;
  children: JSX.Element;
}

const LinkButton: React.FC<LinkButtonProps> = ({ isActive, children }) => {
  const theme = useTheme();
  return (
    <Box
      fontSize="md"
      fontWeight="400"
      whiteSpace="nowrap"
      p="10px 20px"
      border={`1px solid`}
      borderColor={isActive ? theme.colors.theme.orange : "black"}
      letterSpacing="1.36px"
      borderRadius="13px"
      background={isActive ? "theme.orange" : "transparent"}
      color={isActive ? "white" : "black"}
    >
      {children}
    </Box>
  );
};

export default LinkButton;
