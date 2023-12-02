import { HStack, Image, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import getCroppedImageUrl from "../services/image-url";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const Genres = () => {
  const { error, data, isLoading } = useData<Genre>("/genres");
  return (
    <>
      {data.map((genre) => (
        <HStack marginY={5} key={genre.id}>
          <Image
            boxSize="32px"
            borderRadius={"15%"}
            objectFit="cover"
            src={getCroppedImageUrl(genre.image_background, "150", "150")}
            alt="Dan Abramov"
          />
          <Text fontSize="lg">{genre.name}</Text>
        </HStack>
      ))}
    </>
  );
};

export default Genres;
