import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import Genres from "./components/Genres";
import { useState } from "react";
import { Genre } from "./models/genre.model";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./models/platform.model";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const handleGenreSortSelection = (genre: Genre) => {
    setSelectedGenre(genre);
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
            selectedGenre={selectedGenre}
            sortByGenre={handleGenreSortSelection}
          />
        </GridItem>
      </Show>
      <GridItem pl="2" pr="4" area={"main"}>
        <PlatformSelector
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GamesGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
