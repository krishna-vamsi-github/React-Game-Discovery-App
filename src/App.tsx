import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav"
        "main"`,
        lg: `"nav nav"
        "aside main"`,
      }}
      gridTemplateRows={"50px 1fr"}
      gridTemplateColumns={{
        base: "1fr",
        lg: "150px 1fr"
      }}
      height={"calc(100vh)"}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange" area={"nav"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" bg="pink" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
