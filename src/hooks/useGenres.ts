import { useQuery } from "@tanstack/react-query";
import { Genre } from "../models/genre.model";
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    // initialData: { count: 0, results: []}
  });
};

export default useGenres;
