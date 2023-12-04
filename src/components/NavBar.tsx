import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchComponent from "./SearchComponent";

const NavBar = () => {
  return (
    <HStack padding="12px">
      <Image src={logo} boxSize="60px" />
      <SearchComponent />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
