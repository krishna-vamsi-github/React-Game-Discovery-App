import { Text } from "@chakra-ui/react";
import { GameQuery } from "../models/gameQuery.model";

interface Props {
  gameQuery: GameQuery;
}
const DynamicHeading = ({ gameQuery }: Props) => {
  return (
    <>
      <Text fontWeight="bold" fontSize="xx-large">
        {gameQuery.platform?.name || ""} {gameQuery.genre?.name || ""} Games
      </Text>
    </>
  );
};

export default DynamicHeading;
