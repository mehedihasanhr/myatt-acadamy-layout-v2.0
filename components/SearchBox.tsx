import { Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface SearchBoxProps {
  isSearchbarOpen: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = ({ isSearchbarOpen }) => {
  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    // this prevents the click event from propagating to parent
    e.stopPropagation();
  };
  return (
    <InputGroup
      maxW={{ lg: "400px", xl: "600px" }}
      display={{
        base: `${isSearchbarOpen ? "block" : "none"}`,
        lg: "block",
      }}
    >
      <InputLeftElement pointerEvents="none">
        <Image
          src="/icons/search.svg"
          alt="search"
          width={{ base: "20px", md: "24px" }}
          height={{ base: "20px", md: "24px" }}
        />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search Course"
        bg="theme.sand"
        borderRadius="13px"
        fontFamily="var(--font-opensans)"
        fontSize="md"
        fontWeight="400"
        py={4}
        pr={5}
        focusBorderColor="theme.purple"
        onClick={handleInputClick}
      />
    </InputGroup>
  );
};

export default SearchBox;
