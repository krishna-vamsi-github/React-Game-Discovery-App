import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonGameCard = () => {
  return (
    <>
      <Card width={"350px"}>
        <Skeleton height={"250px"}></Skeleton>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default SkeletonGameCard;
