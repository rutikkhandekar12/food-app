import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  Button,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  Modal,
  useDisclosure,
  Box,
  Image,
  Text,
  Radio,
  Checkbox,
  WrapItem,
} from "@chakra-ui/react";
import Button from "../../components/button/Button";
import filterIcon from "../../assets/filterIcon.png";
import "./Filter.scss";
import { useState } from "react";

const Filter = ({ title }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [activeType, setActiveType] = useState("");

  const handleTypeClick = (filter) => {
    setActiveType((prev) => (prev === filter ? prev : filter));
  };

  const renderTypeFilter = () => {
    switch (activeType) {
      case "deliveryTime":
        return (
          <Box display="flex" flexDirection="column" gap="4px">
            <Text>FILTER BY</Text>
            <Checkbox>Fast Delivery</Checkbox>
          </Box>
        );
        break;

      case "cuisine":
        return (
          <Box
            display="flex"
            flexDirection="column"
            gap="4px"
            width="359px"
            height="208px"
            overflow="auto"
          >
            <Text>FILTER BY CUISINE</Text>
            <Checkbox>Afghani</Checkbox>
            <Checkbox>American</Checkbox>
            <Checkbox>Andhra</Checkbox>
            <Checkbox>Asian</Checkbox>
            <Checkbox>Awadhi</Checkbox>
            <Checkbox>Bakery</Checkbox>
            <Checkbox>Bengali</Checkbox>
            <Checkbox>Biryani</Checkbox>
            <Checkbox>Bakery</Checkbox>
            <Checkbox>Tea</Checkbox>
            <Checkbox>Burgers</Checkbox>
            <Checkbox>Cafe</Checkbox>
            <Checkbox>Chaat</Checkbox>
            <Checkbox>Combo</Checkbox>
            <Checkbox>Fast food</Checkbox>
            <Checkbox>Home food</Checkbox>
            <Checkbox>Ice cream</Checkbox>
          </Box>
        );
        break;

      case "rating":
        return (
          <Box display="flex" flexDirection="column" gap="4px">
            <Text>FILTER BY</Text>
            <Checkbox>Ratings 4.5+</Checkbox>
            <Checkbox>Ratings 4.0+</Checkbox>
            <Checkbox>Ratings 3.5+</Checkbox>
          </Box>
        );
        break;

      default:
        return (
          <Box display="flex" flexDirection="column" gap="4px" bg="white">
            <Text>SORT BY</Text>
            <Radio value="1">Relevance(Default)</Radio>
            <Radio value="2">DeliveryTime</Radio>
            <Radio value="3">Rating</Radio>
            <Radio value="4">Cost:LowtoHigh</Radio>
            <Radio value="5">Cost:HightoLow</Radio>
          </Box>
        );
        break;
    }
  };

  return (
    <>
      <Box className="restaurant-grid-filter">
        <Button
          colorScheme="teal"
          variant="outline"
          className="filter-btn"
          onClick={onOpen}
        >
          <Image src={filterIcon} alt="filter" w="20px" />
          <Text>Filter</Text>
        </Button>
        <Modal
          blockScrollOnMount={false}
          isOpen={isOpen}
          size="xl"
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent h="344px">
            <ModalHeader size="md">Filter</ModalHeader>
            <ModalCloseButton />
            <ModalBody
              display="flex"
              gap="19px"
              className="modalBody"
              pl="0px"
              pt="0px"
              pb="0px"
            >
              <Box className="filters">
                <Text onClick={() => handleTypeClick("sort")}>Sort by</Text>
                <Text onClick={() => handleTypeClick("deliveryTime")}>
                  Delivary Time
                </Text>
                <Text onClick={() => handleTypeClick("cuisine")}>Cuisines</Text>
                <Text onClick={() => handleTypeClick("rating")}>Rating</Text>
              </Box>
              <Box mt="3px">{renderTypeFilter()}</Box>
            </ModalBody>

            <ModalFooter>
              <Button variant="goast" mr={3} onClick={onClose}>
                Close
              </Button>
              <WrapItem>
                <Button colorScheme="orange">Orange</Button>
              </WrapItem>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Button colorScheme="teal" variant="outline">
          Pure Veg
        </Button>
        <Button colorScheme="teal" variant="outline">
          Sort By
        </Button>
        <Button colorScheme="teal" variant="outline">
          Fast Delivery
        </Button>
        <Button colorScheme="teal" variant="outline">
          Rating
        </Button>
      </Box>
    </>
  );
};

export default Filter;
