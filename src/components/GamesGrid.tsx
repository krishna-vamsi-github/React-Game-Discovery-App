import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameQuery } from "../models/gameQuery.model";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import SkeletonGameCard from "./SkeletonGameCard";

interface Props {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Props) => {
  const { error, data, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <h3>{error.message}</h3>}
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
        {data?.results?.length === 0 && (
          <Text fontSize={30}>
            {" "}
            {gameQuery.genre?.name} genre games are not available
          </Text>
        )}
        {data?.results.map((game) => (
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
