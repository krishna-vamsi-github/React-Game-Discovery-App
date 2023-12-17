import { FaSearch } from "react-icons/fa";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchQuery: string) => void;
}

const SearchComponent = ({ onSearch }: Props) => {
  const value = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // if condition because argument of type string | undefined is not assignable to string
        if (value.current) onSearch(value.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <FaSearch />
        </InputLeftElement>
        <Input
          variant="filled"
          placeholder="Search Games..."
          borderRadius={20}
          name="Search"
          ref={value}
          // onChange={(event) => onSearch(event.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default SearchComponent;
