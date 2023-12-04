import { FaSearch } from "react-icons/fa";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchComponent = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement>
          <FaSearch />
        </InputLeftElement>
        <Input
          variant="filled"
          placeholder="Search Games..."
          borderRadius={20}
        />
      </InputGroup>
    </>
  );
};

export default SearchComponent;
