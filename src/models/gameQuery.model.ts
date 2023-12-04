import { Genre } from "./genre.model";
import { Platform } from "./platform.model";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}
