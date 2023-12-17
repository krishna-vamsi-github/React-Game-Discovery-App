import { HStack, Image, Spinner, Button, Heading } from "@chakra-ui/react";
import useData from "../hooks/useData";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../models/genre.model";

interface Props {
  sortByGenre: (selectedGenre: Genre) => void;
  selectedGenre: Genre | null;
}

const Genres = ({ sortByGenre, selectedGenre }: Props) => {
  const { error, data, isLoading } = useData<Genre>("/genres");
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" paddingBottom={3}>
        Genres
      </Heading>
      {data.map((genre) => (
        <HStack marginBottom={5} key={genre.id}>
          <Image
            boxSize="32px"
            borderRadius={"15%"}
            objectFit="cover"
            src={getCroppedImageUrl(genre.image_background, "150", "150")}
            alt="Dan Abramov"
          />
          <Button
            fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            whiteSpace="normal"
            textAlign="left"
            fontSize={"lg"}
            variant="link"
            onClick={() => sortByGenre(genre)}
          >
            {genre.name}
          </Button>
        </HStack>
      ))}
    </>
  );
};

export default Genres;
