import { HStack, Image, Spinner, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../models/genre.model";

const Genres = () => {
  const { error, data, isLoading } = useData<Genre>("/genres");
  if(error) return null; 
  if(isLoading) return <Spinner />;
  return (
    <>
      {data.map((genre) => (
        <HStack marginBottom={5} key={genre.id}>
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
