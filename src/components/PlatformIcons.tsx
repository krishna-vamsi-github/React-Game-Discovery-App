import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../models/platform.model";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { SiPlaystation } from "react-icons/si";
import { SiXbox } from "react-icons/si";
import { FaApple } from "react-icons/fa6";
import { VscTerminalLinux } from "react-icons/vsc";
import { SiNintendo } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: { platform: Platform }[];
}
const PlatformIcons = ({ platforms }: Props) => {
  const obj: { [key: string]: IconType } = {
    PC: MdOutlinePersonalVideo,
    PlayStation: SiPlaystation,
    Xbox: SiXbox,
    "Apple Macintosh": FaApple,
    Linux: VscTerminalLinux,
    Nintendo: SiNintendo,
    Android: IoLogoAndroid,
  };
  return (
    <HStack marginY={1}>
      {platforms.map(({ platform }) => (
        <Icon as={obj[platform.name]} key={platform.id} color="grey.500" />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
