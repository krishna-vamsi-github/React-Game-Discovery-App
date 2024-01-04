import { Text } from "@chakra-ui/react";
import { GameQuery } from "../models/gameQuery.model";
import useGames from "../hooks/useGames";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}
const DynamicHeading = ({ gameQuery }: Props) => {
  const game = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  return (
    <>
      <Text fontWeight="bold" fontSize="xx-large">
        {platform?.name || ""} {game?.name || ""} Games
      </Text>
    </>
  );
};

export default DynamicHeading;
