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

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  // useState(null)
  const { data } = useData<Platform>("/platforms");
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedPlatform?.name || <Text>Platforms</Text>}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.name}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatformSelector;
