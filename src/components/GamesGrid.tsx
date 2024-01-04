import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameQuery } from "../models/gameQuery.model";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import SkeletonGameCard from "./SkeletonGameCard";
import useInfiniteGames from "../hooks/useInfiniteGames";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Props) => {
  const {
    error,
    data,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteGames(gameQuery);
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
        {data?.pages.length === 0 && (
          <Text fontSize={30}>
            {" "}
            {gameQuery.genre?.name} genre games are not available
          </Text>
        )}

        {/* This code is for Infinite data */}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <div key={game.id}>
                <GameCardContainer>
                  <GameCard game={game} />
                </GameCardContainer>
              </div>
            ))}
          </React.Fragment>
        ))}
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading..." : "Next"}
          </Button>
        )}

        {/* this code is for normal data
         {data?.results.map((game) => (
          <div key={game.id}>
            <GameCardContainer>
              <GameCard game={game} />
            </GameCardContainer>
          </div>
        ))} */}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
