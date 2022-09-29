import './navar.css'
import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineDown} from 'react-icons/ai'
import {
  Box,
  Image,
  Flex,
  Text,
  Spacer,Button
} from "@chakra-ui/react";

import logo from '../../../Assests/logo.jpeg'
const Navbar = () => {
  return (
    <>
      <Box
        w={{ sm: "95%", md: "100%", lg: "75%" }}
        m="auto"
        mt="5px"
        top="0"
        position="sticky"
        zIndex="2000"
        bgColor={"whiteAlpha.500"}
      >
        <Flex flexWrap={"wrap"}>
          <Box>
            <Link to="/">
              <Image w="150px" mt="10px" src={logo} alt=".." />
            </Link>
          </Box>
          <Spacer />

          <Box p="2">
            <div class="dropdown">
              <button class="dropbtn">Product </button>
              <div class="dropdown-content">
                <Link to="/">AAAAAAAa</Link>
                <Link to="/">BBBBBBB</Link>
                <Link to="/">CCCCCCCC</Link>
              </div>
            </div>
          </Box>
          <Box p="2">
            <div class="dropdown">
              <button class="dropbtn">Templates </button>
              <div class="dropdown-content">
                <Link to="/">AAAAAAAa</Link>
                <Link to="/">BBBBBBB</Link>
                <Link to="/">CCCCCCCC</Link>
                <Link to="/">AAAAAAAa</Link>
                <Link to="/">BBBBBBB</Link>
                <Link to="/">CCCCCCCC</Link>
              </div>
            </div>
          </Box>
          <Box p="1.5">
            <div class="dropdown">
              <button class="dropbtn">
                <Link to="/pricing">Pricing</Link>
              </button>
            </div>
          </Box>
          <Box p="1.5">
            <div class="dropdown">
              <button class="dropbtn">
                <Link to="/reviews">Reviews</Link>
              </button>
            </div>
          </Box>
          <Spacer />
          <Box p="3">
            <Button
              colorScheme="white"
              color={"teal"}
              size="md"
              border={"1px solid teal"}
            >
              LOG IN
            </Button>
          </Box>

          <Box p="3">
            <Link to="/sign-up">
              <Button bg="#06B48B" color={"white"} size="md">
                START FREE
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
      <hr />
    </>
  );
}

export default Navbar