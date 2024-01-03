import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Platform } from "../models/platform.model";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  // useState(null)
  const { data } = usePlatforms();
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedPlatform?.name || <Text>Platforms</Text>}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
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
