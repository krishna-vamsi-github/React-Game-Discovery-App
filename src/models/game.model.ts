import { Genre } from "./genre.model";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
