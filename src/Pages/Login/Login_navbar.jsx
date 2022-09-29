import React from "react";
import { Box, ButtonGroup, Flex, Image, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const LoginNavbar = () => {
  return (
    <Box w="100%" px="10px" >
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2" m="10px">
          <Image
          height={'50px'}
            src={
              "https://app.hellobonsai.com/assets/logo-icon-6263c52498bd8749917ac337dfcb797432a7d3df25bc04e1a5ce2b0e7451268e.png"
            }
          />
        </Box>
        <Spacer />
        <ButtonGroup gap="2" fontSize="18px">
          <Link to="/login">Login</Link>
          <Link to="/sign-up">Sign Up</Link>
        </ButtonGroup>
      </Flex>
      <hr />
    </Box>
  );
};
