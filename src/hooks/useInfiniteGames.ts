import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Game } from "../models/game.model";
import { GameQuery } from "../models/gameQuery.model";
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";

const useInfiniteGames = (gameQuery: GameQuery) => {
  const apiClient = new APIClient<Game>("/games");
  const fetchGames = ({ pageParam = 1 }) => {
    return apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchQuery,
        page: pageParam,
      },
    });
  };
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: fetchGames,
    getNextPageParam: (lastPage, pages) =>
      lastPage.next ? pages.length + 1 : undefined,
    // cacheTime: 0,
    staleTime: 24 * 60 * 60 * 1000, // 60 minutes
  });
};

export default useInfiniteGames;
