import { Box } from "@chakra-ui/react";

interface FakeButtonProps {
  children: JSX.Element | String;
  [key: string]: any;
}

export const FakeButton: React.FC<FakeButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      as="span"
      bg="theme.orange"
      color="#fff"
      px="5"
      py="3"
      mb="8"
      display="inline-block"
      borderRadius="13px"
      cursor="pointer"
      className="b3"
      _hover={{
        bg: "theme.orange",
        color: "#fff",
        opacity: "0.8",
        textDecoration: "none",
      }}
      _active={{
        bg: "theme.orange",
        color: "#fff",
        opacity: "0.8",
        textDecoration: "none",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
