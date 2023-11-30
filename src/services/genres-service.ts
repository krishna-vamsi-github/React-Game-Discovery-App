import httpService from "./http-service";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
export interface FetchGenresResponse {
  results: Genre[];
}
export default httpService("/genres");
