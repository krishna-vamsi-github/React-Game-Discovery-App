import { HStack, Image, Spinner, Button, Heading } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../models/genre.model";
import useGenres from "../hooks/useGenres";

interface Props {
  sortByGenre: (selectedGenre: Genre) => void;
  selectedGenreId?: number;
}

const Genres = ({ sortByGenre, selectedGenreId }: Props) => {
  // const { error, data, isLoading } = useData<Genre>("/genres");
  const { error, data, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" paddingBottom={3}>
        Genres
      </Heading>
      {data?.results.map((genre) => (
        <HStack marginBottom={5} key={genre.id}>
          <Image
            boxSize="32px"
            borderRadius={"15%"}
            objectFit="cover"
            src={getCroppedImageUrl(genre.image_background, "150", "150")}
            alt="Dan Abramov"
          />
          <Button
            fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
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
