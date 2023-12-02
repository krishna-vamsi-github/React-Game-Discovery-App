import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import SkeletonGameCard from "./SkeletonGameCard";
import GameCardContainer from "./GameCardContainer";
import useData from "../hooks/useData";
import { Game } from "../models/game.model";

const GamesGrid = () => {
  const { error, data, isLoading } = useData<Game>("/games");
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
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <SkeletonGameCard />
            </GameCardContainer>
          ))}
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
