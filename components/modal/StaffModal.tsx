"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import * as React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import CloseButton from "../ui/CloseButton";
import _ from "lodash";
import { data } from "@/constants/data";
import type { Staff } from "@/types";
import StaffCard from "../homepage/StaffCard";
import FullscreenButton from "../ui/FullscreenButton";

const StaffModal = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isOpen = searchParams.get("modal") === "staff";
  const [isFullScreen, setIsFullscreen] = React.useState(false);

  const onClose = () => {
    router.push(pathname, { scroll: false });
  };

  const onFullscreen = () => {
    setIsFullscreen(!isFullScreen);
  };

  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={!!isOpen}
        scrollBehavior="inside"
        size={
          !isFullScreen
            ? {
                base: "lg",
                md: "xl",
                lg: "3xl",
                xl: "6xl",
              }
            : "full"
        }
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent borderRadius="13px" bg="theme.darkGreen" pt="0" pb="10">
          <ModalHeader>
            <Flex alignItems="center">
              <Text as="h2" fontSize="4xl" fontWeight="bold" mb="7">
                Staff
              </Text>
              <FullscreenButton onClick={onFullscreen} ml="auto" />
              <CloseButton onClick={onClose} />
            </Flex>
          </ModalHeader>
          <ModalBody bg="theme.darkGreen" py="9" px="9">
            <Grid
              templateColumns="repeat(1, 1fr)"
              gap="6"
              gridAutoRows="min-content"
            >
              {_.map(
                data.staff,
                (staff: { id: string; team: string; employee: Staff[] }) => (
                  <React.Fragment key={staff.id}>
                    <GridItem colSpan={{ base: 2, lg: 1 }}>
                      <Text as="h3">{staff.team}</Text>
                      {staff &&
                        staff.employee &&
                        _.map(staff.employee, (employee: Staff) => (
                          <Flex
                            key={employee.id}
                            flexDirection="column"
                            gap={10}
                            alignItems="flex-start"
                          >
                            <StaffCard
                              id={employee.id}
                              name={employee.name}
                              image={employee.image}
                              flag={employee.flag}
                              post={employee.post}
                              team={employee.team}
                              dept={employee.dept}
                            />
                          </Flex>
                        ))}
                    </GridItem>
                  </React.Fragment>
                )
              )}
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StaffModal;
