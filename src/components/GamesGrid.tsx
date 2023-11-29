import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonGameCard from "./SkeletonGameCard";

const GamesGrid = () => {
  const { error, games, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <h3>All Games</h3>
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
          skeletons.map((skeleton) => <SkeletonGameCard key={skeleton} />)}
        {games.map((game) => (
          <div key={game.id}>
            <GameCard game={game} />
          </div>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
