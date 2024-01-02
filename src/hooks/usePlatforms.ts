import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Platform } from "../models/platform.model";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours,
    // initialData: { count: 0, results: []}
  });
};

export default usePlatforms;
