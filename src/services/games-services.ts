import apiClient from "./api-client";

export interface Game {
    id: number,
    name: string,
    background_image: string
}
interface FetchGamesResponse {
    count: number,
    results: Game[]
}
class GameService {
    getAllGames() {
        return apiClient.get<FetchGamesResponse>('/games');
    }
}

export default new GameService();