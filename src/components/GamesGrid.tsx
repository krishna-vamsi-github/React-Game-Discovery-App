import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteGames from "../hooks/useInfiniteGames";
import { GameQuery } from "../models/gameQuery.model";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import SkeletonGameCard from "./SkeletonGameCard";

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
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.count, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        //This is important field to render the next data
        next={() => fetchNextPage()}
        hasMore={hasNextPage || false}
        loader={<Spinner />}
        // below props only if you need pull down functionality
        /* refreshFunction={fetchNextPage}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        } */
      >
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
              genre games are not available
            </Text>
          )}

          {/* This code is for Infinite data */}

          {/* {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading..." : "Next"}
          </Button>
        )} */}

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

          {/* this code is for normal data
         {data?.results.map((game) => (
          <div key={game.id}>
            <GameCardContainer>
              <GameCard game={game} />
            </GameCardContainer>
          </div>
        ))} */}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GamesGrid;
