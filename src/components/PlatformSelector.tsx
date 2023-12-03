import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import useData from "../hooks/useData";
import { Platform } from "../models/platform.model";

function PlatformSelector() {
  const { data } = useData<Platform>("/platforms");
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          <Text>Platforms</Text>
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id} value={platform.name}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatformSelector;
