import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
  useToast,
} from "@chakra-ui/react";
import MenuNavbar from "../../components/navbar/menuNavbar/MenuNavbar";
import { useSelector } from "react-redux";
import rupee from "../../assets/rupee.png";
import CartItem from "./CartItem";

const Cart = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("cartItems::", cartItems);

  // const cartItems = [
  //   {
  //     id: 1,
  //     name: "Burger",
  //     price: 8.99,
  //     quantity: 2,
  //     image: "https://via.placeholder.com/100",
  //   },
  //   {
  //     id: 2,
  //     name: "Pizza",
  //     price: 12.99,
  //     quantity: 1,
  //     image: "https://via.placeholder.com/100",
  //   },
  // ];

  const deliveryCharge = 40; // Sample delivery charge
  const estimatedTime = 30; // Sample estimated time in minutes

  const calculateSubtotal = () => {
    const subtotal = cartItems.reduce((acc, item) => {
      const price = item.price? item.price : item.defaultPrice;
      console.log("price:::", price)
      console.log("item.quantity:::", item.quantity);
      return acc + price * item.quantity
    },0);

    console.log("subtotal::::",subtotal);
    // console.log("item.defaultPrice::::",item.defaultPrice);
  };

  const calculateTotal = () => {
    return (parseFloat(calculateSubtotal()) + deliveryCharge).toFixed(2);
  };

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    const { name, email, address, city, zipCode, country } = billingDetails;
    if (!name || !email || !address || !city || !zipCode || !country) {
      toast({
        title: "Billing Details Incomplete",
        description: "Please fill out all billing details before proceeding.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      onOpen();
    }
  };

  return (
    <>
      <MenuNavbar cart="cart" />
      <Box
        p={6}
        w={["100%", "80%", "60%"]}
        m="auto"
        bg="gray.50"
        borderRadius="md"
        boxShadow="md"
      >
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Your Cart
        </Heading>
        <Stack spacing={4}>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Stack>
        <Box mt={8} p={4} bg="white" borderRadius="md" boxShadow="sm">
          <Heading as="h3" size="lg" mb={4}>
            Billing Details
          </Heading>
          <Stack spacing={4}>
            <Input
              name="name"
              placeholder="Name"
              bg="gray.100"
              onChange={handleInputChange}
            />
            <Input
              name="email"
              placeholder="Email"
              type="email"
              bg="gray.100"
              onChange={handleInputChange}
            />
            <Input
              name="address"
              placeholder="Address"
              bg="gray.100"
              onChange={handleInputChange}
            />
            <Flex>
              <Input
                name="city"
                placeholder="City"
                bg="gray.100"
                mr={2}
                onChange={handleInputChange}
              />
              <Input
                name="zipCode"
                placeholder="Zip Code"
                bg="gray.100"
                onChange={handleInputChange}
              />
            </Flex>
            <Input
              name="country"
              placeholder="Country"
              bg="gray.100"
              onChange={handleInputChange}
            />
          </Stack>
        </Box>
        <Box mt={8} p={4} bg="white" borderRadius="md" boxShadow="sm">
          <Heading as="h3" size="lg" mb={4}>
            Payment Method
          </Heading>
          <RadioGroup
            mt={4}
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <Stack spacing={3}>
              <Radio value="creditCard">Credit Card</Radio>
              <Radio value="paypal">PayPal</Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Box mt={8} p={4} bg="white" borderRadius="md" boxShadow="sm">
          <Flex justify="space-between" align="center">
            <Text>Delivery Charge:</Text>
            <Text
              fontWeight="bold"
              display="flex"
              alignItems="center"
              gap="3px"
            >
              <Image src={rupee} alt="rupee" boxSize={3} />
              {deliveryCharge.toFixed(2)}
            </Text>
          </Flex>
          <Flex justify="space-between" align="center" mt={2}>
            <Text>Estimated Time:</Text>
            <Text fontWeight="bold">{estimatedTime} mins</Text>
          </Flex>
        </Box>
        <Divider my={6} />
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="lg">Subtotal:</Text>
          <Text fontSize="lg" fontWeight="bold">
            ${calculateSubtotal()}
          </Text>
        </Flex>
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="xl">Total:</Text>
          <Text fontSize="xl" fontWeight="bold">
            ${calculateTotal()}
          </Text>
        </Flex>
        <Button
          colorScheme="teal"
          size="lg"
          width="100%"
          onClick={handleCheckout}
        >
          Checkout
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Payment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text mb={4}>Please confirm your order details:</Text>
              <Flex justify="space-between" align="center">
                <Text>Subtotal:</Text>
                <Text fontWeight="bold">${calculateSubtotal()}</Text>
              </Flex>
              <Flex justify="space-between" align="center" mt={2}>
                <Text>Delivery Charge:</Text>
                <Text fontWeight="bold">
                  <Image src={rupee} alt="rupee" boxSize={3} />
                  {deliveryCharge.toFixed(2)}
                </Text>
              </Flex>
              <Flex justify="space-between" align="center" mt={2}>
                <Text>Total:</Text>
                <Text fontWeight="bold">${calculateTotal()}</Text>
              </Flex>
              <Flex justify="space-between" align="center" mt={2}>
                <Text>Payment Method:</Text>
                <Text fontWeight="bold">
                  {paymentMethod === "creditCard" ? "Credit Card" : "PayPal"}
                </Text>
              </Flex>
              <Flex justify="space-between" align="center" mt={2}>
                <Text>Estimated Delivery Time:</Text>
                <Text fontWeight="bold">{estimatedTime} mins</Text>
              </Flex>
              <Box mt={4}>
                <Heading as="h4" size="md" mb={2}>
                  Billing Details:
                </Heading>
                <Text>Name: {billingDetails.name}</Text>
                <Text>Email: {billingDetails.email}</Text>
                <Text>Address: {billingDetails.address}</Text>
                <Text>City: {billingDetails.city}</Text>
                <Text>Zip Code: {billingDetails.zipCode}</Text>
                <Text>Country: {billingDetails.country}</Text>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Confirm
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Cart;
