import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/games-services";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card maxW="sm">
        <Image src={game.background_image} alt={game.name} borderRadius="lg" />
        <CardBody>
          <Heading mt="1" size="md">
            {game.name}
          </Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIcons platforms={game.parent_platforms} />
            <CriticScore rating={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
