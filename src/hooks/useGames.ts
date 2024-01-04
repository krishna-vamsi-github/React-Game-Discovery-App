import { useQuery } from "@tanstack/react-query";
import { Game } from "../models/game.model";
import { GameQuery } from "../models/gameQuery.model";
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";

const useGames = (gameQuery: GameQuery) => {
  const apiClient = new APIClient<Game>("/games");
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchQuery,
        },
      });
    },
    // cacheTime: 0,
    staleTime: 60 * 60 * 1000, // 60 minutes
  });
};

export default useGames;
