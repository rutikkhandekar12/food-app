import {
  Box,
  Button,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  FormControl,
  FormLabel,
  HStack,
  Checkbox,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { GoogleIcon } from "../../chakra-icons/GoogleIcon";
import SignUp from "./SignUp";
import React from "react";
import "./Login.scss";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Button bg="sandybrown" onClick={onOpen}>
        Login
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <Tabs isFitted variant="enclosed">
            <TabList>
              <Tab>Login</Tab>
              <Tab>SingUp</Tab>
            </TabList>
            <TabPanels p="23px">
              <TabPanel>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" mb="16px" />

                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input id="password" type="password" />
                </FormControl>

                <HStack justify="space-between" width="100%" mb="16px">
                  <Checkbox defaultChecked>Remember me</Checkbox>
                  <Button variant="text" size="sm">
                    Forgot password?
                  </Button>
                </HStack>
                <WrapItem>
                  <Button colorScheme="yellow" className="login-btn">
                    Login
                  </Button>
                </WrapItem>
                <p className="or">Or</p>
                <Button className="google-btn">
                  <GoogleIcon />
                  <p>Sign in with google</p>
                </Button>
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
