import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiAccordion } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('white', 'gray.800')
  return (
    <HStack spacing={10} align="center" bg={bg} color={color}>
      <GiAccordion size={35} />

      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch size={20} />
        </InputLeftElement>
        <Input placeholder="Search" />
      </InputGroup>
      <Switch size="md" onClick={toggleColorMode} width={40}>
      Toggle {colorMode === 'light' ? 'dark' : 'light'}
      </Switch>
    </HStack>
  );
};

export default NavBar;
