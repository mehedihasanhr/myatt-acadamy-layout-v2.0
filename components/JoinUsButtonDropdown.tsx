import * as React from "react";
import { useGradesQuery } from "@/redux/features/course/courseApiSlice";

// chakra-ui
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Flex,
  HStack,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Grade } from "@/types";
import { useLocalStore } from "@/hooks/useLocalStore";
import { useRouter } from "next/navigation";

// interface
interface JoinUsButtonDropdownProps {
  //   toggleButton: React.ReactNode;
}

const JoinUsButtonDropdown: React.FC<JoinUsButtonDropdownProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: grades, isFetching } = useGradesQuery("");
  const [store, setLocalStorage] = useLocalStore("grade", {
    grades: [],
    subjects: {} as { [key: number]: number[] },
  });

  // router
  const router = useRouter();

  // handle select grade
  const handleSelectGrade = (
    gradeId: string | number,
    subcategoryId: string | number
  ) => {
    const isGradeExist = store.grades.includes(gradeId);
    const isSubjectExist = store.subjects.hasOwnProperty(gradeId);
    const isSubcategoryExist = isSubjectExist
      ? store.subjects[gradeId].includes(subcategoryId)
      : false;
    const subjects = isSubjectExist ? store.subjects[gradeId] : [];

    // cook new store
    const newStore = {
      grades: isGradeExist ? [...store.grades] : [...store.grades, gradeId],
      subjects: {
        ...store.subjects,
        [gradeId]: isSubjectExist
          ? isSubcategoryExist
            ? subjects
            : [...subjects, subcategoryId]
          : [subcategoryId],
      },
    };

    // set localStore
    setLocalStorage(newStore);

    // redirect to course page

    router.push("/enrollment");
  };

  return (
    <Box onMouseLeave={() => setIsOpen(false)}>
      <Menu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        closeOnSelect={false}
        autoSelect={false}
        offset={[0, 0]}
      >
        <MenuButton
          onMouseOver={() => setIsOpen(true)}
          as={Button}
          className="b3"
          fontSize="14px"
          rightIcon={<ChevronDownIcon />}
        >
          Join Us
        </MenuButton>
        <MenuList
          className="b3"
          fontSize="16px"
          minWidth="240px"
          onMouseOver={() => setIsOpen(true)}
        >
          {isFetching ? (
            <MenuItem color="#1a202c">
              <Spinner size="sm" color="theme.orange" mr="2" />
              Loading...
            </MenuItem>
          ) : (
            grades?.data?.map((grade: Grade) => (
              <MenuItemWrapper
                key={grade.id}
                grade={grade}
                handleSelectGrade={handleSelectGrade}
              />
            ))
          )}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default JoinUsButtonDropdown;

// Menu Item

// type
interface MenuItemWrapperProps {
  grade: Grade;
  handleSelectGrade: (
    gradeId: string | number,
    subcategoryId: string | number
  ) => void;
}

const MenuItemWrapper: React.FC<MenuItemWrapperProps> = ({
  grade,
  handleSelectGrade,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box onMouseLeave={() => setIsOpen(false)}>
      <Menu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        placement="right-start"
        flip={true}
        offset={[0, 0]}
      >
        <MenuButton
          w="full"
          py="1.5"
          borderBottom="1px solid #e2e8f0"
          onMouseOver={() => setIsOpen(true)}
          color="#1a202c"
          _hover={{
            bg: "theme.orange",
            color: "white",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <HStack w="full" px="3">
            <Text display="block" w="full" textAlign="left">
              {grade.name}
            </Text>
            <ChevronRightIcon />
          </HStack>
        </MenuButton>
        <MenuList onMouseOver={() => setIsOpen(true)} minWidth="240px">
          {grade?.subcategories?.map((subcategory) => (
            <MenuItem
              key={subcategory.id}
              className="b3"
              fontSize="16px"
              onClick={() => handleSelectGrade(grade.id, subcategory.id)}
              onMouseOver={() => setIsOpen(true)}
              color="#1a202c"
              _hover={{
                bg: "theme.orange",
                color: "white",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {subcategory.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
