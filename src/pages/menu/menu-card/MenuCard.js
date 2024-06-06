import { Box, Text, Heading, Image, Button } from "@chakra-ui/react";
import CardImg from "../../../assets/food-icon.jpg";
import "./MenuCard.scss";
import starIcon from "../../../assets/star-icon.png";
import rupee from "../../../assets/rupee.png";

const MenuCard = ({
  name,
  description,
  ratings,
  isBestseller,
  price,
  defaultPrice,
  imageId,
}) => {
  return (
    <Box className="item-card" p={4} overflow="hidden" height="224px">
      <Box className="card-text" mb={4} w="72%">
        <Box mb={2}>
          <Text fontSize="md" fontWeight="bold" color="#DD6B20">
            {isBestseller ? "Bestseller" : ""}
          </Text>
        </Box>
        <Box mb={2} className="item-title">
          <Heading as="h3" size="md">
            {name}
          </Heading>
          <Heading as="h3" size="md" className="item-card-price">
            <img src={rupee} alt="rupee" w="10px" />
            <Text>
              {defaultPrice
                ? Math.floor(defaultPrice / 100)
                : Math.floor(price / 100)}
            </Text>
          </Heading>
        </Box>
        <Box className="item-rating" mb={2} w="63px">
          {Object.keys(ratings?.aggregatedRating).length !== 0 ? (
            <>
              <img src={starIcon} alt="rating" />
              <Text fontSize="sm">
                {ratings?.aggregatedRating?.rating} (
                {ratings?.aggregatedRating?.ratingCountV2})
              </Text>
            </>
          ) : (
            " "
          )}
        </Box>
        <Box className="cuisine-menu-card" mb={4} fontSize="14px" color="gray">
          <Text>{description}</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className="item-img-btn"
      >
        {imageId ? (
          <>
            <Box mr={4}>
              <Image
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                alt="img-card-menu"
                boxSize="100px"
                objectFit="cover"
              />
            </Box>
            <Button colorScheme="teal">ADD</Button>
          </>
        ) : (
          <Button colorScheme="teal" mb="10px">
            ADD
          </Button>
        )}
      </Box>
      <hr></hr>
    </Box>
  );
};

export default MenuCard;
