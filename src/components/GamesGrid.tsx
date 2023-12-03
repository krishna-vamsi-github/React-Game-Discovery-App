import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import SkeletonGameCard from "./SkeletonGameCard";
import GameCardContainer from "./GameCardContainer";
import useData from "../hooks/useData";
import { Game } from "../models/game.model";
import { Genre } from "../models/genre.model";
import PlatformSelector from './PlatformSelector';

interface Props {
  selectedGenre: Genre | null;
}
const GamesGrid = ({ selectedGenre }: Props) => {
  const { error, data, isLoading } = useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id } },
    [selectedGenre?.id]
  );
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <h3>{error}</h3>}
      <PlatformSelector />
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        spacing={10}
        marginY={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <SkeletonGameCard />
            </GameCardContainer>
          ))}
        {data.length === 0 && (
          <Text fontSize={30}>
            {" "}
            {selectedGenre?.name} genre games are not available
          </Text>
        )}
        {data.map((game) => (
          <div key={game.id}>
            <GameCardContainer>
              <GameCard game={game} />
            </GameCardContainer>
          </div>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
