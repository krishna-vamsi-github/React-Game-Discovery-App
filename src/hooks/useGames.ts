import { useEffect, useState } from "react";
import gamesServices, { Game } from "../services/games-services";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const { request, cancel } = gamesServices.getAllGames();
    request
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => cancel();
  }, []);
  return { games, error };
};

export default useGames;
