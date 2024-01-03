import { useQuery } from "@tanstack/react-query";
import { Game } from "../models/game.model";
import { GameQuery } from "../models/gameQuery.model";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games",gameQuery],
    queryFn: () => {
       return apiClient.get<FetchResponse<Game>>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchQuery,
        },
      }).then(res => res.data);
    },
    // cacheTime: 0,
    staleTime: 60 * 60 * 1000, // 60 minutes
  });
};

export default useGames;
