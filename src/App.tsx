import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav"
        "main"`,
        lg: `"nav nav"
        "aside main"`,
      }}
      gridTemplateRows={"60px 1fr"}
      gridTemplateColumns={{
        base: "1fr",
        lg: "150px 1fr",
      }}
      height="100vh"
      gap="1"
      fontWeight="bold"
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
