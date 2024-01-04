import { Text } from "@chakra-ui/react";
import { GameQuery } from "../models/gameQuery.model";
import useGames from "../hooks/useGames";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}
const DynamicHeading = ({ gameQuery }: Props) => {
  const game = useGenres().data?.results.find(
    (genre) => genre.id === gameQuery.genreId
  );
  return (
    <>
      <Text fontWeight="bold" fontSize="xx-large">
        {gameQuery.platform?.name || ""} {game?.name || ""} Games
      </Text>
    </>
  );
};

export default DynamicHeading;
