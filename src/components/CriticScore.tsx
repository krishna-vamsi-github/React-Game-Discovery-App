import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const CriticScore = ({ rating }: Props) => {
  const color = rating > 75 ? "green" : rating > 60 ? "yellow" : "";
  return (
    <Badge
      float={"right"}
      colorScheme={color}
      fontSize={"14px"}
      borderRadius={6}
      paddingX={2}
    >
      {rating}
    </Badge>
  );
};

export default CriticScore;
