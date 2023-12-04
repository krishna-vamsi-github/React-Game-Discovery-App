import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import Genres from "./components/Genres";
import { useState } from "react";
import { Genre } from "./models/genre.model";
import PlatformSelector from "./components/PlatformSelector";
import { GameQuery } from "./models/gameQuery.model";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  const handleGenreSortSelection = (genre: Genre) => {
    setGameQuery({...gameQuery, genre});
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav"
        "main"`,
        lg: `"nav nav"
        "aside main"`,
      }}
      gridTemplateRows={"80px 1fr"}
      gridTemplateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      gap="1"
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"} paddingX={5}>
          <Genres
            selectedGenre={gameQuery.genre}
            sortByGenre={handleGenreSortSelection}
          />
        </GridItem>
      </Show>
      <GridItem pl="2" pr="4" area={"main"}>
        <PlatformSelector
          onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})}
          selectedPlatform={gameQuery.platform}
        />
        <GamesGrid
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
