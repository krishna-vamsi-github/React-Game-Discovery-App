import useGames from "../hooks/useGames";

const GamesGrid = () => {
  const { error, games } = useGames();
  return (
    <>
      <h3>All Games</h3>
      {error && <h3>{error}</h3>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
