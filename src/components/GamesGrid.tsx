import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import SkeletonGameCard from "./SkeletonGameCard";
import GameCardContainer from "./GameCardContainer";
import useData from "../hooks/useData";
import { Game } from "../models/game.model";
import { GameQuery } from "../models/gameQuery.model";

interface Props {
  gameQuery: GameQuery
}

const GamesGrid = ({ gameQuery }: Props) => {
  const { error, data, isLoading } = useData<Game>(
    "/games",
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } },
    [gameQuery]
  );
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <h3>{error}</h3>}
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
            {gameQuery.genre?.name} genre games are not available
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
