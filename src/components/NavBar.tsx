import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchComponent from "./SearchComponent";

interface Props {
  onSearch: (searchQuery: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding="12px">
      <Image src={logo} boxSize="60px" />
      <SearchComponent onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
