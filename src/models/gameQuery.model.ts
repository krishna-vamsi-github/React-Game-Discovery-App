import { Genre } from "./genre.model";
import { Platform } from "./platform.model";

export interface GameQuery {
  // genre: Genre | undefined     is best practice
  genreId?: number;
  platform: Platform | null;
  sortOrder: string;
  searchQuery: string;
}
