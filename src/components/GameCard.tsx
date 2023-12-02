import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "./GamesGrid";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image
          src={getCroppedImageUrl(game.background_image,"600","400")}
          alt={game.name}
          borderRadius="lg"
        />
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
