import { Text } from "@chakra-ui/react";
import { GameQuery } from "../models/gameQuery.model";
import useGames from "../hooks/useGames";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const DynamicHeading = ({ gameQuery }: Props) => {
  const game = useGenres().data?.results.find(
    (genre) => genre.id === gameQuery.genreId
  );
  const platform = usePlatforms().data?.results.find(
    (platform) => platform.id === gameQuery.genreId
  );
  return (
    <>
      <Text fontWeight="bold" fontSize="xx-large">
        {platform?.name || ""} {game?.name || ""} Games
      </Text>
    </>
  );
};

export default DynamicHeading;
