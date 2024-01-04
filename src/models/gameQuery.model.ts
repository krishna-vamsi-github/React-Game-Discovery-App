import { Genre } from "./genre.model";
import { Platform } from "./platform.model";

export interface GameQuery {
  // genre: Genre | undefined     is best practice
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchQuery: string;
}
