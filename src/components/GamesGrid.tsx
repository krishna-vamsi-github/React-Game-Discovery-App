import { useEffect, useState } from "react";
import gamesServices, { Game } from "../services/games-services";

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    gamesServices
      .getAllGames()
      .then((res) => setGames(res.data.results))
      .catch((err) =>  setError(err.message));
  });
  return (
    <>
      <h3>All Games</h3>
      {error && <h3>{error}</h3>}
      <ul>
        {games.map((game) =><li key={game.id}>
            {game.name}
        </li>)}
      </ul>
    </>
  );
};

export default GamesGrid;