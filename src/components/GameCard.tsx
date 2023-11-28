import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/games-services";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card maxW="sm">
        <Image src={game.background_image} alt={game.name} borderRadius="lg" />
        <CardBody>
          <Heading mt="6" size="md">
            {game.name}
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;