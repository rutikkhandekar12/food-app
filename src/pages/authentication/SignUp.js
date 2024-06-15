import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  WrapItem,
  Button,
  ModalBody,
  TabPanel,
  Stack,
  TabPanels,
} from "@chakra-ui/react";
import { GoogleIcon } from "../../components/chakra-icons/GoogleIcon";
import "./SignUp.scss";

const SignUp = () => {
  return (
      <TabPanel className="signup-body">
        <FormControl width="100%">
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" mb="16px" />

          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" mb="16px" />

          <FormLabel htmlFor="cpassword">Confirm Password</FormLabel>
          <Input id="cpassword" type="password" mb="20px" />
        </FormControl>
        <WrapItem width="100%">
          <Button colorScheme="yellow" className="login-btn">
            Sign Up
          </Button>
        </WrapItem>
        <p className="or">Or</p>
        <Button className="google-btn" width="100%">
          <GoogleIcon />
          <p>Sign up with google</p>
        </Button>
      </TabPanel>
  );
};

export default SignUp;
