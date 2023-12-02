import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import Genres from "./components/Genres";

function App() {
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
          <Heading>Genres</Heading>
          <Genres />
        </GridItem>
      </Show>
      <GridItem pl="2" pr="4" area={"main"}>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
