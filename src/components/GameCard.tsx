import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/games-services";
import PlatformIcons from "./PlatformIcons";

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
          <PlatformIcons platforms={game.parent_platforms} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
