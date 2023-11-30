import { useEffect, useState } from "react";
import genresService, {
  FetchGenresResponse,
  Genre,
} from "../services/genres-service";

const Genres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    const { request, cancel } = genresService.getAll<FetchGenresResponse>();
    request.then(({ data }) => setGenres(data.results));
    return () => cancel();
  }, []);
  return <></>;
};

export default Genres;
