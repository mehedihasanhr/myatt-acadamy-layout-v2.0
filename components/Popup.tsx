"use client";

import CloseIcon from "@/components/CloseIcon";
import CoursePopItem from "@/components/CoursePopItem";
import LinkButton from "@/components/LinkButton";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";

interface PopupProps {
  children?: JSX.Element;
  header: JSX.Element;
  body: JSX.Element;
  btnText: string;
  variant: string;
}

const Popup: React.FC<PopupProps> = ({
  children,
  header,
  body,
  btnText,
  variant,
}) => {

  // const [isXs, isSm, isMd, isLg, isXl] = [
  //   "(max-width: 360px)",
  //   "(min-width: 361px) and (max-width: 480px)",
  //   "(min-width: 481px) and (max-width: 768px)",
  //   "(min-width: 769px) and (max-width: 1000px)",
  //   "(min-width: 1001px)",
  // ].map((query) => useMediaQuery(query));

  // const modalSize = isSm
  //   ? "modalSm"
  //   : isMd
  //     ? "modalMd"
  //     : isLg
  //       ? "modalLg"
  //       : isXl
  //         ? "modalXl"
  //         : "modal2xl";

  const { isOpen, onOpen, onClose } = useDisclosure();
  // for demo
  let items: any = [];
  for (let i = 1; i <= 10; i++) {
    items.push(i);
  }
  // for demo

  return (
    <>
      <Button onClick={onOpen} size="custom">
        {btnText}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        // size={modalSize}
        variant={variant}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton>
            <CloseIcon />
          </ModalCloseButton>
          <ModalBody>{body}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Popup;
