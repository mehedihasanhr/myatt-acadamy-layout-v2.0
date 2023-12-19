import { Button } from "@chakra-ui/react";
import React from "react";

type FullscreenButtonProps = {
  onClick: () => void;
  [key: string]: any;
};

const FullscreenButton = ({ onClick, ...props }: FullscreenButtonProps) => {
  return (
    <Button
      bg="transparent"
      _hover={{
        bg: "transparent",
        cursor: "pointer",
      }}
      onClick={onClick}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
      </svg>
    </Button>
  );
};

export default FullscreenButton;