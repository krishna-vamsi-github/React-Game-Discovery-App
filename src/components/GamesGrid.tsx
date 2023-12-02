import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import SkeletonGameCard from "./SkeletonGameCard";
import GameCardContainer from "./GameCardContainer";
import useData from "../hooks/useData";
import { Game } from "../models/game.model";
import { useState } from "react";

interface Props {
  selectedGenre: string;
}
const GamesGrid = ({ selectedGenre }: Props) => {
  const { error, data, isLoading } = useData<Game>("/games");
  selectedGenre = selectedGenre ? selectedGenre : "";
  const skeletons = [1, 2, 3, 4, 5, 6];
  const filteredExpenses = selectedGenre
    ? data.filter(
        (dat) => dat.genres.filter((gen) => gen.name === selectedGenre).length
      )
    : data;

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
        {filteredExpenses.length === 0 && (
          <Text fontSize={30}>
            {" "}
            {selectedGenre} genre games are not available
          </Text>
        )}
        {filteredExpenses.map((game) => (
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
