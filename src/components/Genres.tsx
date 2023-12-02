import useData from "../hooks/useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const Genres = () => {
  const { error, data, isLoading } = useData<Genre>("/genres");
  return <></>;
};

export default Genres;
