import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import Genres from "./components/Genres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { GameQuery } from "./models/gameQuery.model";
import SortSelector from "./components/SortSelector";
import DynamicHeading from "./components/DynamicHeading";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(value: string) =>
            setGameQuery({ ...gameQuery, searchQuery: value })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"} paddingX={5}>
          <Genres
            selectedGenreId={gameQuery.genreId}
            sortByGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
          />
        </GridItem>
      </Show>
      <GridItem pl="2" pr="4" area={"main"}>
        <DynamicHeading gameQuery={gameQuery}/>
        <Stack spacing={5} direction={{
          base: "column",
          lg: "row"
        }}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platformId: platform.id })
            }
            selectedPlatformId={gameQuery.platformId}
          />
          <SortSelector
            onSelectSortOrder={(value) =>
              setGameQuery({ ...gameQuery, sortOrder: value })
            }
            selectedOrder={gameQuery.sortOrder}
          />
        </Stack>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
