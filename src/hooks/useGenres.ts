import { useQuery } from "@tanstack/react-query";
import { Genre } from "../models/genre.model";
import apiClient, { FetchResponse } from "../services/api-client";

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    // initialData: { count: 0, results: []}
  });
};

export default useGenres;
